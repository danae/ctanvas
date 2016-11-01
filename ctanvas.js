//-----------------------------------------------------------------------------

// CTANVAS.JS created by DENGSN
// A simple JavaScript library to draw CTAs (Centraal Bediende Treinaanwijzers) 
// on the HTML5 canvas element

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

//-----------------------------------------------------------------------------

// Load stations in a cache and create a cache for queries
var Stations = [];
var StationsLoaded = 0;
var Queries = [];

// Load the stations from the API
$(document).ready(function()
{
  $.ajax({
    url: "//api.rijdendetreinen.nl/v1/json/stations",
    context: this,
    success: function(stations)
    {     
      // Iterate over stations and save them in cache
      for (var i = 0; i < stations.length; i ++)
      {
        var station = stations[i];
      
        // Check if in the Netherlands
        if (station.land !== 'NL')
          continue;
        
        // Check if already in the list, else create a new station
        var filtereds = Stations.filter(element => station.code === element.code);
        if (filtereds.length > 0)
          filtereds[0].synonyms.push(station.value);
        else
          Stations.push({
            code: station.code, 
            name: station.value, 
            synonyms: [],
            lat: station.geo_lat,
            lon: station.geo_lng
          });
      }
      
      // Trigger ready event
      $(document).trigger('cta-stations-ready');
    }
  });
});

//-----------------------------------------------------------------------------

// Utility functions
var Utils = function(){};

// Copies object properties to another
Utils.copy = function(a, b)
{
  for (var property in a)
    if (a.hasOwnProperty(property))
      b[property] = a[property];
  return b;
};

// Wraps a string into lines using words, optionally using dots
Utils.wrap = function(text, maxWidth, canvas, wordWrap, dots)
{
  // Create default variables
  if (typeof wordWrap === 'undefined')
    wordWrap = true;
  if (typeof dots === 'undefined')
    dots = false;
  
  var splitter = (wordWrap ? " " : "");
  var dot = (dots ? "..." : "");
  
  var ctx = canvas.getContext("2d");
  var words = text.split(splitter);
  var lines = [];
  var line = words[0];

  // Loop over words
  for (var i = 1; i < words.length; i++) 
  {
    var word = words[i];
    var width = ctx.measureText(line + " " + word + dot).width;
    if (width < maxWidth)
      line += splitter + word;
    else
    {
      lines.push(line + dot);
      line = dot + word;
    }
  }
  
  // Return the lines
  lines.push(line);
  return lines;
};

//-----------------------------------------------------------------------------

// Formatter class
var Formatter = function(){};

// Pads a string with zeroes
Formatter.pad = function(number, length)
{
  var string = new String(number);
  while (string.length < length)
    string = "0" + string;
  return string;
};

// Format a Date to "HH:mm"
Formatter.time = function(time)
{
  return Formatter.pad(time.getHours(),2) + ":" + Formatter.pad(time.getMinutes(),2);
};

// Format a delay in minutes to "+d"
Formatter.delay = function(delay, round)
{
  if (typeof round === 'undefined')
    round = true;
  
  return "+" + (round ? Math.ceil(delay / 5) * 5 : delay);
};

// Format a route
Formatter.route = function(route)
{
  if (typeof route === 'undefined' || route === null || route.length === 0)
    return "";
  else if (route.length === 1)
    return "via " + route[0].name;
  else if (route.length === 2)
    return "via " + route[0].name + " en " + route[1].name;

  var string = "via " + route[0].name;
  for (var i = 1; i < route.length - 1; i ++)
    string += ", " + route[i].name;
  string += " en " + route[route.length - 1].name;
  return string;
};

//-----------------------------------------------------------------------------

// Train class for managing train properties
var Train = function(object)
{
  // Variables
  this.number = "";
  this.type = "";
  this.operator = "";
  this.destination = null;
  this.route = [];
  this.time = Date.now();
  this.delay = 0;
  this.platform = "";
  this.info = [];
  this.infoOptional = [];
  
  // Set object if defined
  if (typeof object !== 'undefined')
    Utils.copy(object,this);
};

// Returns a string representation of this Train (for use as next train string)
Train.prototype.toString = function()
{
  return Formatter.time(this.time) + " " + this.type + " " + this.destination.name + (this.delay > 0 ? " " + Formatter.delay(this.delay) : "");
};

//-----------------------------------------------------------------------------

// Station class for managing trains and CTAs
var Station = function(object, silent = false)
{
  // Variables
  this.code = '';
  this.name = '';
  this.synonyms = [];
  this.trains = [];
  this.cta = {};
  
  // Set object if defined
  if (typeof object !== 'undefined')
  {
    object = typeof object === 'string' ? Station.find(object) : object;
    if (object === null)
      throw "NotFoundError: '" + object + "'";
    else
      Utils.copy(object,this);
  }
  
  // Load the trains and create CTAs
  $.ajax({
    url: "//api.rijdendetreinen.nl/v2/json/vertrektijden",
    data: {station: this.code},
    context: this,
    success: function(data)
    {
      // Parse the trains into the station
      for (var i = 0; i < data.vertrektijden.length; i ++)
      {
        var vertrektijd = data.vertrektijden[i];
        
        this.trains.push(new Train({
          number: vertrektijd.treinNr,
          type: vertrektijd.soort,
          operator: vertrektijd.vervoerder,
          destination: Station.findOrFake(vertrektijd.bestemming),
          route: (typeof vertrektijd.via !== 'undefined' && vertrektijd.via !== null) ? vertrektijd.via.split(',').map(station => Station.findOrFake(station)) : [],
          time: new Date(vertrektijd.vertrek),
          delay: vertrektijd.vertraging,
          platform: vertrektijd.spoor,
          info: vertrektijd.opmerkingen,
          infoOptional: vertrektijd.tips
        }));
      }
      
      // Create CTAs per platform
      var platforms = this.platforms();
      for (var i = 0; i < platforms.length; i ++)
      {
        // Get all trains departing from this platform
        var platform = platforms[i];
        var trains = this.trains.filter(train => train.platform === platform);
        
        // Add CTA based on the trains
        if (trains.length >= 2)
          this.cta[platform] = new CTA(trains[0],trains[1]);
        else if (trains.length === 1)
          this.cta[platform] = new CTA(trains[0]);
      }
      
      // Create CTAs per platform
      if (!silent)
        $(document).trigger('cta-ready',[this]);
    }
  });
};

// Get an array of unique platforms on this station
Station.prototype.platforms = function()
{
  // Map trains to platforms
  var platforms = $.map(this.trains,train => train.platform);
  
  // Remove duplicates
  var platformsUnique = [];
  $.each(platforms,function(index, platform)
  {
    if ($.inArray(platform,platformsUnique) < 0) 
      platformsUnique.push(platform);
  });
  
  // Sort and return
  return platformsUnique.sort(function(a, b) 
  {
    var ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
    b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
    
    while(ax.length && bx.length) {
      var an = ax.shift();
      var bn = bx.shift();
      var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
      if (nn)
        return nn;
    }

    return ax.length - bx.length;
  });
};

// Returns a found station given a code or name query, or null if nothing found
Station.find = function(query)
{
  // Check if already cached
  if (Queries.hasOwnProperty(query))
    return Queries[query];
 
  // Check for names
  for (var i = 0; i < Stations.length; i ++)
  {
    var station = Stations[i];
    if (station.name === query)
      return Queries[query] = station;
  }
  
  // Check for synonyms
  for (var i = 0; i < Stations.length; i ++)
  {
    var station = Stations[i];
    if ($.inArray(query,station.synonyms) >= 0)
      return Queries[query] = station;
  }
  
  // Check for code
  for (var i = 0; i < Stations.length; i ++)
  {
    var station = Stations[i];
    if (station.code === query)
      return Queries[query] = station;
  }
  
  // No match, return null
  return Queries[query] = null;
};

// Returns a found station given a code or name query, or a placeholder is nothing found
Station.findOrFake = function(query)
{
  return Station.find(query) || {name: query};
};

// Select a random station
Station.random = function()
{
  return Stations[Math.floor(Math.random() * Stations.length)];
};

//-----------------------------------------------------------------------------

// CTA class for drawing CTAs from two trains
var CTA = function(train, nextTrain)
{
  // Create default variables
  if (typeof nextTrain === 'undefined')
    nextTrain = null;
  
  this.train = train;
  this.nextTrain = nextTrain;
  
  // Fill info lines
  this.infos = [];
  if (typeof this.train.infoOptional !== 'undefined')
  {
    for (var i = 0; i < this.train.infoOptional.length; i ++)
      this.infos.push({text: this.train.infoOptional[i], color: CTA.prototype.light});
  }
  if (typeof this.train.info !== 'undefined')
  {
    for (var i = 0; i < this.train.info.length; i ++)
      this.infos.push({text: this.train.info[i], color: CTA.prototype.dark});
  }
  
  // Add info for next train
  if (this.nextTrain !== null)
    this.infos.push({text: this.nextTrain.toString(), color: CTA.prototype.dark});
};

// Constants
CTA.prototype.light = "rgb(255,255,255)";
CTA.prototype.dark = "rgb(9,40,105)";
CTA.prototype.font = "'Open Sans Condensed', sans-serif";

// Return the opposite color for light and dark
CTA.prototype.opposite = function(color)
{
  if (color === this.light)
    return this.dark;
  else if (color === this.dark)
    return this.light;
  else
    return color;
};

// Draw the CTA
CTA.prototype.draw = function(canvas)
{
  var ctx = canvas.getContext("2d");
  
  // Determine sizes
  var boundary_small = 0.019 * canvas.height;
  var boundary_large = 0.028 * canvas.height;
  var delay_x = 0.350 * canvas.width;
  var delay_height = 0.167 * canvas.height;
  var info_height = 0.092 * canvas.height;
  var font_y_time = 0.130 * canvas.height;
  var font_y_destination = 0.333 * canvas.height;
  var font_y_route = 0.487 * canvas.height;
  var font_y_info = 0.067 * canvas.height;
  var font_size_time = 0.148 * canvas.height;
  var font_size_destination = 0.200 * canvas.height;
  var font_size_route = 0.111 * canvas.height;
  var font_height_route = 0.13 * canvas.height;
  var font_size_info = 0.070 * canvas.height;
  var stroke = 0.0019 * canvas.height;
    
  // Draw background
  ctx.fillStyle = this.light;
  ctx.fillRect(0,0,canvas.width,canvas.height);
    
  // Draw time
  ctx.font = "bold " + font_size_time + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  ctx.fillText(Formatter.time(this.train.time),boundary_large,font_y_time);
  
  // Draw delay if there is delay, else draw train type
  if (typeof this.train.delay !== 'undefined' && this.train.delay > 0)
  {
    // Draw delay
    ctx.fillStyle = this.dark;
    ctx.fillRect(delay_x,0,canvas.width - delay_x,delay_height);
    
    ctx.font = "bold " + font_size_time + "px " + this.font;
    ctx.textAlign = "left";
    ctx.fillStyle = this.light;
    ctx.fillText(Formatter.delay(this.train.delay) + " minuten",delay_x + boundary_large,font_y_time);
  }
  else
  {
    // Draw train type
    ctx.font = "bold " + font_size_time + "px " + this.font;
    ctx.textAlign = "right";
    ctx.fillStyle = this.dark;
    ctx.fillText(this.train.type,canvas.width - boundary_large,font_y_time);
  }
  
  // Draw destination
  ctx.font = "bold " + font_size_destination + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  /*var text = function(names, maxWidth)
  {
    for (var i = 0; i < names.length; i ++)
    {
      if (ctx.measureText(names[i]).width <= maxWidth)
        return names[i];
    }
    return Utils.wrap(names[0],maxWidth,canvas,false,true)[0];
  }(this.train.destination.names,canvas.width - 2 * boundary_small);*/
  var text = this.train.destination.name;
  ctx.fillText(text,boundary_small,font_y_destination);
  
  // Draw route
  ctx.font = "bold " + font_size_route + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  
  var wrapped = Utils.wrap(Formatter.route(this.train.route),canvas.width - 2 * boundary_large,canvas);
  for (var i = 0; i < wrapped.length; i ++)
    ctx.fillText(wrapped[i],boundary_large,font_y_route + i * font_height_route);
  
  // Draw information lines (including next train)
  for (var i = 0; i < this.infos.length; i ++)
  {
    var index = this.infos.length - (i + 1);
    !function(info, index)
    {
      // Draw ribbon
      ctx.fillStyle = info.color;
      ctx.fillRect(0,canvas.height - (index + 1) * info_height,canvas.width,info_height);
    
      ctx.fillStyle = this.opposite(info.color);
      ctx.fillRect(0,canvas.height - (index + 1) * info_height,canvas.width,stroke);
  
      // Draw text    
      ctx.font = "bold " + font_size_info + "px " + CTA.prototype.font;
      ctx.textAlign = "left";
      ctx.fillStyle = this.opposite(info.color);
      
      var text = Utils.wrap(info.text,canvas.width - 2 * boundary_small,canvas,true,true)[0];
      ctx.fillText(text,boundary_small,canvas.height - (index + 1) * info_height + font_y_info);
    }.call(this,this.infos[i],index);
  }
};

// Create a canvas and draw the CTA on it
CTA.prototype.createAndDraw = function(width, height)
{
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.className = "cta";
  
  this.draw(canvas);
  return canvas;
};

//-----------------------------------------------------------------------------
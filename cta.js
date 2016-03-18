//-----------------------------------------------------------------------------

// Load stations in a cache
var Stations = [];
$.getJSON($("script[src]").last().attr("src").split('?')[0].split('/').slice(0, -1).join('/') + "/cta.stations.json",function(data)
{
  Stations = data;
  
  // Trigger ready event
  $(document).trigger('cta-ready');
});

// Query cache
var Queries = [];

//-----------------------------------------------------------------------------

// Station class for managing trains and CTAs
var Station = function(data)
{
  // Parse the data string if not already
  if (typeof data === 'string')
  {
    data = Station.prototype.find(data);
    if (!data.hasOwnProperty('code'))
      throw "No station found for '" + data.query + "'";
  }
  
  // Copy the station data into this object
  for (var key in data)
    this[key] = data[key];
  
  this.trains = [];
  this.cta = {};
  
  // Load the trains and create CTAs
  $.ajax({
    url: "http://api.rijdendetreinen.nl/v2/json/vertrektijden",
    data: {station: this.code},
    context: this,
    success: function(data)
    {
      // Parse the trains into the station
      for (var i = 0; i < data.vertrektijden.length; i ++)
      {
        var trein = data.vertrektijden[i];
      
        this.trains.push({
          number: trein.treinNr,
          type: trein.soort,
          operator: trein.vervoerder,
          destination: Station.prototype.find(trein.bestemming),
          route: trein.via === null ? [] : trein.via.split(", ").map(function(string)
          {
            return Station.prototype.find(string);
          }),
          time: new Date(trein.vertrek),
          delay: trein.vertraging,
          platform: trein.spoor,
          info: trein.opmerkingen,
          infoOptional: trein.tips
        });
      }
      
      // Create CTAs per platform
      var platforms = this.platforms();
      for (var i = 0; i < platforms.length; i ++)
      {
        // Get all trains departing from this platform
        var platform = platforms[i];
        var trains = this.trains.filter(function(train)
        {
          return train.platform === platform;
        });
        
        // Add CTA based on the trains
        if (trains.length >= 2)
          this.cta[platform] = new CTA(trains[0],trains[1]);
        else if (trains.length === 1)
          this.cta[platform] = new CTA(trains[0]);
      }
      
      // Trigger ready event
      $(document).trigger('cta-station-ready');
    }
  });
};

// Find a station given a code or name query
Station.prototype.find = function(query)
{
  // Check if already cached
  if (Queries.hasOwnProperty(query))
    return Queries[query];
 
  // Check for names
  for (var i = 0; i < Stations.length; i ++)
  {
    var station = Stations[i];
    if ($.inArray(query,station.name) >= 0)
    {
      Queries[query] = $.extend(station,{query: query});
      return Queries[query];
    }
  }
  
  // Check for code
  for (var i = 0; i < Stations.length; i ++)
  {
    var station = Stations[i];
    if (station.code === query)
    {
      Queries[query] = $.extend(station,{query: query});
      return Queries[query];
    }
  }
  
  // No match, onbly return the query
  Queries[query] = {query: query};
  return Queries[query];
};

// Get an array of unique platforms on this station
Station.prototype.platforms = function()
{
  // Map trains to platforms
  var platforms = $.map(this.trains,function(train)
  {
    return train.platform;
  });
  
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
        if(nn) return nn;
    }

    return ax.length - bx.length;
  });
};

//-----------------------------------------------------------------------------

// Class for drawing CTAs
var CTA = function(train, nextTrain)
{
  this.train = train;
  this.nextTrain = nextTrain;
  
  // Fill info lines
  this.infos = [];
  for (var i = 0; i < this.train.infoOptional.length; i ++)
    this.infos.push({text: this.train.infoOptional[i], color: CTA.prototype.light});
  for (var i = 0; i < this.train.info.length; i ++)
    this.infos.push({text: this.train.info[i], color: CTA.prototype.dark});
  
  // Add info for next train
  if (typeof this.nextTrain !== 'undefined' && this.nextTrain !== null)
  {
    var text = CTA.prototype.formatTime(this.nextTrain.time) + " " + this.nextTrain.type + " " + this.nextTrain.destination.name[0] + (this.nextTrain.delay > 0 ? " " + this.formatDelayShort(this.nextTrain.delay) : "");
    this.infos.push({text: text, color: CTA.prototype.dark});
  }
};

// Constants
CTA.prototype.light = "rgb(255,255,255)";
CTA.prototype.dark = "rgb(9,40,105)";
CTA.prototype.font = "BenchNine, sans-serif";

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
  ctx.font = font_size_time + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  ctx.fillText(this.formatTime(this.train.time),boundary_large,font_y_time);
  
  // Draw delay if there is delay, else draw train type
  if (this.delay > 0)
  {
    // Draw delay
    ctx.fillStyle = this.dark;
    ctx.fillRect(delay_x,0,canvas.width - delay_x,delay_height);
    
    ctx.font = font_size_time + "px " + this.font;
    ctx.textAlign = "left";
    ctx.fillStyle = this.light;
    ctx.fillText(this.formatDelay(this.train.delay),delay_x + boundary_large,font_y_time);
  }
  else
  {
    // Draw train type
    ctx.font = font_size_time + "px " + this.font;
    ctx.textAlign = "right";
    ctx.fillStyle = this.dark;
    ctx.fillText(this.train.type,canvas.width - boundary_large,font_y_time);
  }
  
  // Draw destination
  ctx.font = font_size_destination + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  var text = function(names, maxWidth)
  {
    for (var i = 0; i < names.length; i ++)
    {
      if (ctx.measureText(names[i]).width <= maxWidth)
        return names[i];
    }
    return names[0];
  }(this.train.destination.name,canvas.width - 2 * boundary_small);
  ctx.fillText(text,boundary_small,font_y_destination);
  
  // Draw route
  ctx.font = font_size_route + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  
  var route = this.formatRoute(this.train.route);
  var wrapped = this.wrap(route,canvas.width - 2 * boundary_large,canvas);
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
      ctx.font = font_size_info + "px " + CTA.prototype.font;
      ctx.textAlign = "left";
      ctx.fillStyle = this.opposite(info.color);
      ctx.fillText(info.text,boundary_small,canvas.height - (index + 1) * info_height + font_y_info);
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

// Format functions
CTA.prototype.zeroPadding = function(number, count)
{
  var string = new String(number);
  while (string.length < count)
    string = "0" + string;
  return string;
};
CTA.prototype.formatTime = function(date)
{
  if (!(date instanceof Date))
    date = new Date(date);
  return CTA.prototype.zeroPadding(date.getHours(),2) + ":" + CTA.prototype.zeroPadding(date.getMinutes(),2);
};
CTA.prototype.formatDelayShort = function(minutes)
{
  return "+" + minutes;
};
CTA.prototype.formatDelay = function(minutes)
{
  return this.formatDelayShort(minutes) + " minuten";
};
CTA.prototype.formatRoute = function(route)
{
  if (typeof route === 'undefined' || route === null || route.length === 0)
    return "";
  else if (route.length === 1)
    return "via " + route[0].name[0];
  else if (route.length === 2)
    return "via " + route[0].name[0] + " en " + route[1].name[0];

  var string = "via " + route[0].name[0];
  for (var i = 1; i < route.length - 1; i ++)
    string += ", " + route[i].name[0];
  string += " en " + route[route.length - 1].name[0];
  return string;
};

// Text wrapping
CTA.prototype.wrap = function(text, maxWidth, canvas)
{
  var ctx = canvas.getContext("2d");
  var words = text.split(" ");
  var lines = [];
  var line = words[0];

  for (var i = 1; i < words.length; i++) 
  {
    var word = words[i];
    var width = ctx.measureText(line + " " + word).width;
    if (width < maxWidth)
      line += " " + word;
    else
    {
      lines.push(line);
      line = word;
    }
  }
  
  lines.push(line);
  return lines;
};

//-----------------------------------------------------------------------------
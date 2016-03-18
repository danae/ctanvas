# CTA.js

[![GitHub release](https://img.shields.io/github/release/dengsn/cta.js.svg?style=plastic)]() [![Github Releases](https://img.shields.io/github/downloads/dengsn/cta.js/latest/total.svg?style=plastic)]() [![GitHub license](https://img.shields.io/github/license/dengsn/cta.js.svg?style=plastic)]()

**cta.js** is een JavaScript-bibliotheek om de welbekende [Centraal Bediende Treinaanwijzers](https://nl.wikipedia.org/wiki/Centraal_bediende_treinaanwijzers_in_Nederland) (CTA's) die op de meeste NS-stations hangen, te tekenen op het HTML5 canvas-element. De bibliotheek haalt de actuele vertrektijden op via de [Rijden De Treinen-API](https://github.com/geertw/rdt-infoplus-dvs) en verwerkt deze tot CTA's per spoot. Omdat de bibliotheek in het Engels is geschreven, volgt de verdere technische uitleg in het Engels.

**cta.js** is a JavaScript library to draw CTAs, signs displaying the next train departing from a station, used by the Dutch Railways, on a HTML5 canvas element. The library uses the [Rijden De Treinen API](https://github.com/geertw/rdt-infoplus-dvs) to fetch the actual departure times and uses these to create a CTA for every platform.

To give an impression of the functionality of cta.js, you can view this [preview page](https://dl.dropboxusercontent.com/u/12669217/cta.js/preview.html#rtd). The current features of cta.js include:

 - Fetching of departing trains from a Dutch railway station.
 - Drawing a CTA given a current train and an optional next train.
 - Automatically creating a CTA for every platform on the station.

## Download and installation

You can download the latest release of cta.js from GitHub. Currently the only dependency is **jQuery**. The library is built using version 2.1.

To use cta.js, you can include the script file in your HTML page just as any other script.

    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="cta.js"></script>

## Usage

The cta.js library exists of several classes to minimize the effort of creating CTAs. These are

- `Station` for storing the code and names of a station and the departing trains and CTAs for the platforms.
- `CTA` for drawing a CTA on a HTML5 canvas element.

What follows is a basic tutorial on how to use the library. A more complete example is situated in the `tests/index.html` file.

    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="cta.js"></script>
    
    <script>
    // Used to store the current station
    var station;

    // Start loading the station if the document is loaded
    $(document).ready(function() {
      station = new Station("Utrecht Centraal");
    });

    // The 'cta-ready' event is triggered if the departing trains are loaded
    $(window).on('cta-ready',function() {
      // Station.cta contains the CTAs per platform
      for (var platform in station.cta)
        // CTA.createAndDraw() creates a new canvas and draws the CTA
        $('body').append(station.cta[platform].createAndDraw(400,200));
    });
    </script>

## Documentation

Only the relevant functions to use the library are listed here; the library contains some more utility functions that can be inspected in the source code.

### Station class

    var station = new Station(data)

The station constructor creates a new station based on the given argument. The **data** parameter can either be a string containing the name or code of the station, or an object containing a `name` array of strings and a `code` string (as returned by `Station.prototype.find(query)`. The function returns a new `Station` instance and loads the departing trans and CTAs. The class has the following properties:

- `station.name: Array of String` contains the names of the station.
- `station.code: String`  containins the internal station code.
- `station.trains: Array of Train` denotes the departing trains at this station.
- `station.cta: Object` contains CTA objects containing a CTA for every platform at the station. For example `station.cta["8a"]` contains the CTA for platform 8a.

#### Find a station

    var station = Station.prototype.find(query)

The `find` function is used to fetch a `Station` object based on a query. The query is tested against the code and all the names of the station. This function returns `{query: query}` if no station was found.

#### Get all platforms

    Station.prototype.platforms()

The `platforms` function returns a naturally sorted array of strings, containing the platforms of this station, based on the departing trains.

### CTA class

    var cta = new CTA(train, [nextTrain])

The CTA constructor creates a new CTA based on the current train and an optional next train. The **train** and optional **nextTrain** arguments contain a train object returned by `station.trains`. The function returns a new `CTA` object. The class has the following properties:

- `cta.train: Train` contains the currently displayed train.
- `cta.nextTrain: Train` contains the next displayed train, or can be `null` if there is no next train.


#### Draw the CTA

    CTA.prototype.draw(canvas)

The `draw` function draws the CTA on a predefined canvas object. The **canvas** argument denotes this canvas.

#### Create a canvas and draw the CTA

    var canvas = CTA.prototype.createAndDraw(width, height)

The `createAndDraw` function creates a new canvas element, draws the CTA on it using the `draw` function and returns it. The **width** and **height** parameters specify the dimensions of the canvas to be created.
    
### Train object

The `Train` object contains information about a departing train. It has the following properties:

 - `number: String` contains the internal train number.
 - `type: String` contains the type of the train, like Intercity or Sprinter.
 - `operator: String` contains the operator of this line, like NS or Arriva.
 - `destination: Station` contains the destination station.
 - `route: Array of Station` contains the via-stations of this line.
 - `time: Date` contains the departure time.
 - `delay: Integer` contains the departure delay in minutes.
 - `platform: String` contains the departure platform.
 - `info: Array of String` contains obligaroty information about the departure (`opmerkingen` in RDT-API).
 - `infoOptional: Array of String`contains optional information about the line (`tips` in RDT-API).
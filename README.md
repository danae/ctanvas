# Ctanvas

[![GitHub release](https://img.shields.io/github/release/dengsn/Ctanvas.svg)](https://github.com/dengsn/Ctanvas/releases) [![Github Releases](https://img.shields.io/github/downloads/dengsn/Ctanvas/latest/total.svg)](https://github.com/dengsn/Ctanvas/releases)

**Ctanvas** is a JavaScript library to draw CTAs, train indicators displaying the next train departing from a station, used by the [Dutch Railways](http://ns.nl), on a HTML5 canvas element. The library uses the [Rijden De Treinen API](https://github.com/geertw/rdt-infoplus-dvs) to fetch the actual departure times and uses these to create a CTA for every platform.

The current features of Ctanvas include:

 - Fetching departing trains from a Dutch railway station.
 - Drawing a CTA given a current train and an optional next train.
 - Automatically creating a CTA for every platform on the station.

## Download and installation

The latest release of Ctanvas is available under the [releases](https://github.com/dengsn/Ctanvas/releases) tab in the [GitHub repository](https://github.com/dengsn/Ctanvas). Ctanvas depends on the following external libraries, make sure you download and include them in your project as well:

- [jQuery](https://jquery.com/) >= `1.12.0`

To use Ctanvas, you must include the script file in your HTML5 page just as any other script:

    <script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="ctanvas.js"></script>

## Usage

The Ctanvas library exists of several classes to minimize the effort of creating CTAs. These are:

- `Train` to store information of a departing train, such as time, platform and route.
- `Station` for storing the code and names of a station and the departing trains and CTAs for the platforms.
- `CTA` for drawing a CTA on a HTML5 canvas element.

What follows is a basic tutorial on how to use the library:

    <script src="path/to/jquery.js"></script>
    <script src="path/to/ctanvas.js"></script>
    
    <script>
      // Used to store the current station
      var station;

      // The 'cta-stations-ready' event is triggered if all stations are loaded
      $(document).on('cta-stations-ready',function() {
        station = new Station("Utrecht Centraal");
      });

      // The 'cta-ready' event is triggered if the departing trains are loaded
      $(document).on('cta-ready',function() {
        // Station.cta contains the CTAs per platform
        for (var platform in station.cta)
          // CTA.createAndDraw() creates a new canvas and draws the CTA
          $('body').append(station.cta[platform].createAndDraw(400,200));
      });
    </script>

## Documentation

This documentation only includes the functions in the public API. For a full documentation, please refer to the source code, where comments are placed along with each function.

### Train class

    new Train(object)

The `new Train` constructor returns a new, empty `Train` object.  The `Train` class contains information about a departing train, such as time, platform and route. The **`object`** parameter can contain an `Object` with predefined properties, as described below.

The `Train` class has the following properties:

 - `number: string` contains the internal train number.
 - `type: string` contains the type of the train, like Intercity or Sprinter.
 - `operator: string` contains the operator of this line, like NS or Arriva.
 - `destination: Station` contains the destination station.
 - `route: Array[Station]` contains the via-stations of this line.
 - `time: Date` contains the departure time.
 - `delay: integer` contains the departure delay in minutes.
 - `platform: string` contains the departure platform.
 - `info: Array[string]` contains obligaroty information about the departure (`opmerkingen` in RDT-API).
 - `infoOptional: Array[string]`contains optional information about the line (`tips` in RDT-API).

### Station class

    new Station(object)

The `new Station` constructor returns a new `Station` object and loads the departing trans and CTAs per platform, based on the given argument. The **`object`** parameter can either contain an `Object` with predefined properties, as described below, or a query `String` to search for the station using the `find` function.

The `Station` class has the following properties:

- `code: String`  contains the internal station code.
- `name: String` contains the name of the station
- `synonyms: Array of String` contains the synonyms of the station.
- `trains: Array of Train` lists the departing trains at this station.
- `cta: Object` contains `CTA` objects for every platform at the station. For example `cta['8a']` contains the CTA for platform 8a.

#### Find a station

    Station.find(query)

The `find` function returns a `Station` object based on a query. The query is tested against the code and all the names of the station. The **`query`** parameter defines the query to search for.  If a station is found, this is returned as a `Station` object, otherwise the function returns `null`.

    Station.findOrFake(query)

The `findOrFake` function always returns a `Station` object, whether the `find` function finds a station or not. If no station is found, the query is filled in in the `name` property of the `Station` object.

#### Select a random station

    Station.random()

The `random`function returns a random `Station` object representing one of the stations in the Netherlands.

### CTA class

    new CTA(train, [nextTrain])

The `new CTA` constructor returns a new CTA based on the current train and an optional next train.
The **`train`** and optional **`nextTrain`** parameters contain a `Train` object, for example one of `Station.trains`. 

The ``CTA class has the following properties:

- `train: Train` contains the currently displayed train.
- `nextTrain: Train` contains the next displayed train, or can be `null` if there is no next train.

#### Draw the CTA

    CTA.prototype.draw(canvas)

The `draw` function draws the CTA on a predefined canvas object. The **`canvas`** argument denotes the already defined `<canvas>` element to draw on.

#### Create a canvas and draw the CTA

    CTA.prototype.createAndDraw(width, height)

The `createAndDraw` function creates a new `<canvas>` element, draws the CTA on it using the `draw` function and returns the canvas. The **`width`** and **`height`** parameters specify the dimensions of the canvas to be created.

### Events

    $(document).on('cta-stations-ready')

The `cta-stations-ready` event is triggered if all stations are loaded into memory. The loading happoens automatically in the `ready` event of the current document.

    $(document).on('cta-ready')

The  `cta-ready` event is triggered if the `Station` class has loaded its trains and CTAs. Because the trains are fetched in an asynchronous AJAX call, there is no other indication when the CTAs are done loading.

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
var Stations = [{"code":"ht","names":["'s-Hertogenbosch","Den Bosch","Hertogenbosch ('s)"]},{"code":"hto","names":["'s-Hertogenbosch Oost","Hertogenbosch O.","H'bosch O","Hertogenbosch Oost ('s)","Den Bosch Oost"]},{"code":"hde","names":["'t Harde","Harde ('t)"]},{"code":"atn","names":["Aalten"]},{"code":"ac","names":["Abcoude"]},{"code":"eahs","names":["Ahaus"]},{"code":"aime","names":["Aime-la-Plagne","Aime-la-Pl"]},{"code":"aixtgv","names":["Aix-en-Provence","Aix-en-Pro"]},{"code":"akm","names":["Akkrum"]},{"code":"albert","names":["Albertville","Albertv."]},{"code":"aless","names":["Alessandria","Alessandr."]},{"code":"amr","names":["Alkmaar"]},{"code":"amrn","names":["Alkmaar Noord","Alkmaar N"]},{"code":"aml","names":["Almelo"]},{"code":"amri","names":["Almelo de Riet","de Riet"]},{"code":"almb","names":["Almere Buiten","Buiten"]},{"code":"alm","names":["Almere Centrum","Almere C.","Almere C","Almere"]},{"code":"almm","names":["Almere Muziekwijk","Muziekwijk"]},{"code":"almo","names":["Almere Oostvaarders","Oostvaarders","Oostvaard"]},{"code":"almp","names":["Almere Parkwijk","Parkwijk"]},{"code":"ampo","names":["Almere Poort","Almere P"]},{"code":"apn","names":["Alphen a/d Rijn","Alphen","Alphen aan den Rijn"]},{"code":"eabg","names":["Altenberge"]},{"code":"amf","names":["Amersfoort"]},{"code":"amfs","names":["Amersfoort Schothorst","Schothorst"]},{"code":"avat","names":["Amersfoort Vathorst","Vathorst"]},{"code":"asa","names":["Amsterdam Amstel","Amstel"]},{"code":"asb","names":["Amsterdam Bijlmer ArenA","Bijlmer ArenA","Bijlmer A"]},{"code":"asd","names":["Amsterdam Centraal","Amsterdam C.","A'dam C","Amsterdam"]},{"code":"ashd","names":["Amsterdam Holendrecht","Holendrecht","Holendrcht"]},{"code":"asdl","names":["Amsterdam Lelylaan","Lelylaan"]},{"code":"asdm","names":["Amsterdam Muiderpoort","Muiderpoort","Muiderprt"]},{"code":"rai","names":["Amsterdam RAI","A'dam RAI"]},{"code":"assp","names":["Amsterdam Science Park","Science Park","Scienceprk"]},{"code":"ass","names":["Amsterdam Sloterdijk","Sloterdijk"]},{"code":"vmw","names":["Amsterdam Van der Madeweg","Van der Madeweg","vd Madeweg"]},{"code":"asdz","names":["Amsterdam Zuid","A'dam Z"]},{"code":"ana","names":["Anna Paulowna","Anna Paulo"]},{"code":"berch","names":["Antwerpen-Berchem","Antw-Berchem","Antw-Berch"]},{"code":"atw","names":["Antwerpen-Centraal","Antwerpen-C.","Antwerpen"]},{"code":"atwlb","names":["Antwerpen-Luchtbal","Antw-Luchtbal","Antw-Bal"]},{"code":"andd","names":["Antwerpen-Noorderdokken","Antw-N'dokken","Antw-dok"]},{"code":"fnzd","names":["Antwerpen-Zuid","Antw-Zuid"]},{"code":"apd","names":["Apeldoorn"]},{"code":"apdm","names":["Apeldoorn De Maten","De Maten"]},{"code":"apdo","names":["Apeldoorn Osseveld","Osseveld"]},{"code":"apg","names":["Appingedam"]},{"code":"akl","names":["Arkel"]},{"code":"arn","names":["Arnemuiden"]},{"code":"ah","names":["Arnhem"]},{"code":"ahpr","names":["Arnhem Presikhaaf","Presikhaaf"]},{"code":"ahp","names":["Arnhem Velperpoort","Velperpoort","Velperprt"]},{"code":"ahz","names":["Arnhem Zuid","Arnhem Z"]},{"code":"ashfd","names":["Ashford International","Ashford Internat","AshfordINT"]},{"code":"asn","names":["Assen"]},{"code":"ma","names":["Augsburg Hbf","Augsburg"]},{"code":"avtgv","names":["Avignon TGV","Avignon"]},{"code":"brn","names":["Baarn"]},{"code":"bh","names":["Bad Bentheim","Bentheim"]},{"code":"nsch","names":["Bad Nieuweschans","Nweschans","Nieuweschans"]},{"code":"oeynh","names":["Bad Oeynhausen","Bad Oeynh"]},{"code":"badsch","names":["Bad Schandau","Bad Schand"]},{"code":"badenz","names":["Baden"]},{"code":"rbb","names":["Baden-Baden","Baden-B."]},{"code":"bf","names":["Baflo"]},{"code":"brd","names":["Barendrecht","Barendrcht"]},{"code":"bnc","names":["Barneveld Centrum","Barneveld C.","Barnevld C"]},{"code":"bnn","names":["Barneveld Noord","Barnevld N"]},{"code":"bnz","names":["Barneveld Zuid","Barnevld Z"]},{"code":"baselb","names":["Basel Bad Bf","Basel Bad"]},{"code":"basels","names":["Basel SBB"]},{"code":"bdm","names":["Bedum"]},{"code":"bk","names":["Beek-Elsloo","Beek-E"]},{"code":"bsd","names":["Beesd"]},{"code":"bl","names":["Beilen"]},{"code":"llb","names":["Belsele"]},{"code":"bgn","names":["Bergen op Zoom","Bergen opZ"]},{"code":"berhbl","names":["Berlin Hbf","Berlijn"]},{"code":"berhbt","names":["Berlin Hbf (tief)","Berlin Hbf"]},{"code":"bhf","names":["Berlin Ostbahnhof","Berlin Ostbhf","Berlin Ost"]},{"code":"bpaf","names":["Berlin Südkreuz","Berlin Süd"]},{"code":"berfl","names":["Berlin-Schönefeld Flug.","Berlin-S Flug.","Berlin-Fl."]},{"code":"bspd","names":["Berlin-Spandau","Berlin-Spa"]},{"code":"bet","names":["Best"]},{"code":"fbr","names":["Beveren"]},{"code":"bv","names":["Beverwijk"]},{"code":"bielef","names":["Bielefeld Hbf","Bielefeld"]},{"code":"bhv","names":["Bilthoven"]},{"code":"fie","names":["Bilzen"]},{"code":"bischo","names":["Bischofshofen","Bischofsh."]},{"code":"br","names":["Blerick"]},{"code":"bll","names":["Bloemendaal","Bloemendl"]},{"code":"bluden","names":["Bludenz"]},{"code":"bdg","names":["Bodegraven"]},{"code":"kboi","names":["Boisheim"]},{"code":"bonn","names":["Bonn Hbf"]},{"code":"fmb","names":["Boom"]},{"code":"ebok","names":["Bork"]},{"code":"bn","names":["Borne"]},{"code":"bsk","names":["Boskoop"]},{"code":"bourg","names":["Bourg-St-Maurice","Bourg-StM"]},{"code":"bhdv","names":["Boven-Hardinxveld","Boven-Hardinxv.","Boven-H."]},{"code":"bkf","names":["Bovenkarspel Flora","Bovenkarspel Fl.","Bovenk Flo"]},{"code":"bkg","names":["Bovenkarspel-Grootebroek","Bovenkarspel-Gr.","Bovenk-Gr"]},{"code":"bmr","names":["Boxmeer"]},{"code":"btl","names":["Boxtel"]},{"code":"brauns","names":["Braunschweig Hbf","Braunschw"]},{"code":"bd","names":["Breda"]},{"code":"bdpb","names":["Breda-Prinsenbeek","Prinsenbeek","Prinsenbk"]},{"code":"bressx","names":["Bressoux"]},{"code":"bkl","names":["Breukelen"]},{"code":"kbry","names":["Breyell"]},{"code":"bmn","names":["Brummen"]},{"code":"fbnl","names":["Brussel Nat. Luchthaven","Brussel Luchthvn","Brus Lucht"]},{"code":"brusc","names":["Brussel-Centraal","Brussel-C.","Brussel-C"]},{"code":"brusn","names":["Brussel-Noord","Brussel-N"]},{"code":"brusz","names":["Brussel-Zuid/Midi","Brussel Z./Midi","Brussel-Z"]},{"code":"bp","names":["Buitenpost"]},{"code":"bde","names":["Bunde"]},{"code":"bnk","names":["Bunnik"]},{"code":"bsmz","names":["Bussum Zuid","Bussum Z"]},{"code":"ebeo","names":["Bönen","Bonen"]},{"code":"buende","names":["Bünde (Westf)","Bünde (W)","Bunde"]},{"code":"cps","names":["Capelle Schollevaar","Schollevaar","Schollevr"]},{"code":"cas","names":["Castricum"]},{"code":"chamb","names":["Chambéry"]},{"code":"cvm","names":["Chevremont"]},{"code":"chur","names":["Chur"]},{"code":"ecmf","names":["Coesfeld (Westf)","Coesfeld"]},{"code":"co","names":["Coevorden"]},{"code":"como","names":["Como"]},{"code":"ck","names":["Cuijk"]},{"code":"cl","names":["Culemborg"]},{"code":"da","names":["Daarlerveen","Daarlervn"]},{"code":"dln","names":["Dalen"]},{"code":"dl","names":["Dalfsen"]},{"code":"dvnk","names":["De Vink"]},{"code":"dwe","names":["De Westereen","Westereen","Zwaagwesteinde"]},{"code":"decin","names":["Decin hl.n.","Decin hl.n"]},{"code":"dei","names":["Deinum"]},{"code":"ddn","names":["Delden"]},{"code":"dt","names":["Delft"]},{"code":"dtz","names":["Delft Zuid","Delft Z"]},{"code":"dz","names":["Delfzijl"]},{"code":"dzw","names":["Delfzijl West","Delfzijl W"]},{"code":"dld","names":["Den Dolder"]},{"code":"gvc","names":["Den Haag Centraal","Den Haag C.","Den Haag C","'s-Gravenhage","Den Haag"]},{"code":"gv","names":["Den Haag HS","Dn Haag HS"]},{"code":"laa","names":["Den Haag Laan v NOI","Laan v NOI"]},{"code":"gvm","names":["Den Haag Mariahoeve","Mariahoeve"]},{"code":"gvmw","names":["Den Haag Moerwijk","Moerwijk"]},{"code":"ypb","names":["Den Haag Ypenburg","Ypenburg"]},{"code":"hdr","names":["Den Helder"]},{"code":"hdrz","names":["Den Helder Zuid","Dn Heldr Z"]},{"code":"dn","names":["Deurne"]},{"code":"dv","names":["Deventer"]},{"code":"dvc","names":["Deventer Colmschate","Colmschate"]},{"code":"did","names":["Didam"]},{"code":"dmn","names":["Diemen"]},{"code":"dmnz","names":["Diemen Zuid","Diemen Z"]},{"code":"gdp","names":["Diepenbeek"]},{"code":"dr","names":["Dieren"]},{"code":"dtc","names":["Doetinchem"]},{"code":"dtch","names":["Doetinchem De Huet","De Huet"]},{"code":"domod","names":["Domodossola","Domodosso."]},{"code":"ddr","names":["Dordrecht"]},{"code":"ddrs","names":["Dordrecht Stadspolders","Stadspolders","Stadspldrs"]},{"code":"ddzd","names":["Dordrecht Zuid","Dordrcht Z"]},{"code":"edd","names":["Dortmund Derne","Dortmund D"]},{"code":"edo","names":["Dortmund Hbf","Dortmund"]},{"code":"edkd","names":["Dortmund Kirchderne","Dortmund Kirchd.","Dortmund K"]},{"code":"dresd","names":["Dresden Hbf","Dresden H."]},{"code":"dresdn","names":["Dresden-Neustadt","Dresden-N"]},{"code":"db","names":["Driebergen-Zeist","Driebergen"]},{"code":"drh","names":["Driehuis"]},{"code":"drp","names":["Dronryp","Dronrijp"]},{"code":"dron","names":["Dronten"]},{"code":"fdp","names":["Duffel"]},{"code":"duisb","names":["Duisburg Hbf","Duisburg"]},{"code":"dvn","names":["Duiven"]},{"code":"dvd","names":["Duivendrecht","Duivendt"]},{"code":"kdul","names":["Dülken","Dulken"]},{"code":"edulh","names":["Dülmen","Dulmen"]},{"code":"dussel","names":["Düsseldorf Hbf","Düsseldrf","Dusseldorf"]},{"code":"ebbs","names":["Ebbsfleet International","Ebbsfleet Intern","Ebbsfleet"]},{"code":"ec","names":["Echt"]},{"code":"edc","names":["Ede Centrum","Ede C.","Ede C"]},{"code":"ed","names":["Ede-Wageningen","Ede-Wag"]},{"code":"wtm","names":["Eijs-Wittem","Eijs-Witt"]},{"code":"edn","names":["Eijsden"]},{"code":"ehv","names":["Eindhoven"]},{"code":"ehs","names":["Eindhoven Strijp-S","Strijp-S","Eindhoven Beukenlaan"]},{"code":"lkr","names":["Ekeren"]},{"code":"est","names":["Elst"]},{"code":"emn","names":["Emmen"]},{"code":"emnz","names":["Emmen Zuid","Emmen Z"]},{"code":"em","names":["Emmerich"]},{"code":"ekz","names":["Enkhuizen"]},{"code":"eenp","names":["Ennepetal (Gevelsberg)","Ennepetal"]},{"code":"es","names":["Enschede"]},{"code":"ese","names":["Enschede De Eschmarke","De Eschmarke","Eschmarke"]},{"code":"esk","names":["Enschede Kennispark","Kennispark","Enschede Drienerlo"]},{"code":"eepe","names":["Epe (Westf)","Epe (West)"]},{"code":"eml","names":["Ermelo"]},{"code":"esn","names":["Essen (Belgie)","Essen (B)"]},{"code":"etn","names":["Etten-Leur"]},{"code":"egh","names":["Eygelshoven","Eygelshov"]},{"code":"eghm","names":["Eygelshoven Markt","Eygelshoven Mrkt","Eygelsh M"]},{"code":"fwd","names":["Feanwalden","Veenwouden"]},{"code":"fieber","names":["Fieberbrunn","Fieberbrun"]},{"code":"fn","names":["Franeker"]},{"code":"fffm","names":["Frankfurt (M) Hbf","Frankfurt Hbf","Frankfurt"]},{"code":"franko","names":["Frankfurt (Oder)","Frankf(Od)"]},{"code":"fnaf","names":["Frankfurt Flughafen Fernb","Frankfurt Flugh.","FrankfurtF"]},{"code":"rf","names":["Freiburg (Breisgau) Hbf","Freiburg (B.)","Freiburg"]},{"code":"gdr","names":["Gaanderen"]},{"code":"gdk","names":["Geerdijk"]},{"code":"geisl","names":["Geislingen"]},{"code":"gdm","names":["Geldermalsen","G'malsen"]},{"code":"gp","names":["Geldrop"]},{"code":"gln","names":["Geleen Oost","Geleen O"]},{"code":"lut","names":["Geleen-Lutterade","Geleen-Lut"]},{"code":"gz","names":["Gilze-Rijen","Gilze-Rij"]},{"code":"gbr","names":["Glanerbrug"]},{"code":"lgl","names":["Glons"]},{"code":"gs","names":["Goes"]},{"code":"go","names":["Goor"]},{"code":"gr","names":["Gorinchem"]},{"code":"gd","names":["Gouda"]},{"code":"gdg","names":["Gouda Goverwelle","Goverwelle"]},{"code":"gbg","names":["Gramsbergen","Gramsbergn"]},{"code":"gk","names":["Grijpskerk"]},{"code":"g","names":["Gronau (Westf.)","Gronau"]},{"code":"gn","names":["Groningen"]},{"code":"gerp","names":["Groningen Europapark","Europapark"]},{"code":"gnn","names":["Groningen Noord","Groning N"]},{"code":"gw","names":["Grou-Jirnsum","Grou-Jirns"]},{"code":"wij","names":["Gulpen-Wijlre","Gulpen-W"]},{"code":"tgo","names":["Göppingen","Goppingen"]},{"code":"mgzb","names":["Günzburg","Gunzburg"]},{"code":"hlm","names":["Haarlem"]},{"code":"hlms","names":["Haarlem Spaarnwoude","Spaarnwoude","Spaarnwde"]},{"code":"hagen","names":["Hagen Hbf","Hagen"]},{"code":"hwzb","names":["Halfweg-Zwanenburg","Halfweg-Zwanenb.","Halfweg-Zw"]},{"code":"hamh","names":["Hamburg Hbf","Hamburg H"]},{"code":"hamm","names":["Hamm (Westf.)","Hamm"]},{"code":"hann","names":["Hannover Hbf","Hannover H"]},{"code":"hdb","names":["Hardenberg"]},{"code":"hd","names":["Harderwijk"]},{"code":"hbzm","names":["Hardinxveld Blauwe Zoom","Blauwe Zoom","Blauwe Z"]},{"code":"gnd","names":["Hardinxveld-Giessendam","Hardinxveld-G.","Hardinxvld"]},{"code":"hrn","names":["Haren"]},{"code":"hlg","names":["Harlingen"]},{"code":"hlgh","names":["Harlingen Haven","Harl Haven"]},{"code":"fhs","names":["Hasselt"]},{"code":"hk","names":["Heemskerk"]},{"code":"had","names":["Heemstede-Aerdenhout","Heemstede-A.","Heemstede"]},{"code":"hr","names":["Heerenveen"]},{"code":"hry","names":["Heerenveen IJsstadion","IJsstadion","H'veen IJs"]},{"code":"hwd","names":["Heerhugowaard","Heerhugow"]},{"code":"hrl","names":["Heerlen"]},{"code":"hrlk","names":["Heerlen De Kissel","Hrl De Kissel","De Kissel"]},{"code":"hrlw","names":["Heerlen Woonboulevard","Hrl Woonblvd","Heerlen W"]},{"code":"hze","names":["Heeze"]},{"code":"mid","names":["Heide"]},{"code":"hlo","names":["Heiloo"]},{"code":"hno","names":["Heino"]},{"code":"hm","names":["Helmond"]},{"code":"hmh","names":["Helmond 't Hout","'t Hout"]},{"code":"hmbv","names":["Helmond Brandevoort","Brandevoort","Brandevrt"]},{"code":"hmbh","names":["Helmond Brouwhuis","Brouwhuis"]},{"code":"lkm","names":["Hemiksem"]},{"code":"hmn","names":["Hemmen-Dodewaard","Hemmen-D"]},{"code":"hgl","names":["Hengelo"]},{"code":"hglg","names":["Hengelo Gezondheidspark","Hengelo Gezondh.","Hengelo G"]},{"code":"hglo","names":["Hengelo Oost","Hengelo O"]},{"code":"lhs","names":["Herstal"]},{"code":"hz","names":["Herzogenrath","Herzogenr"]},{"code":"hil","names":["Hillegom"]},{"code":"hvs","names":["Hilversum"]},{"code":"hvsm","names":["Hilversum Media Park","Media Park"]},{"code":"hvsp","names":["Hilversum Sportpark","Sportpark"]},{"code":"hnp","names":["Hindeloopen","Hindeloopn"]},{"code":"foe","names":["Hoboken-Polder","Hoboken-P"]},{"code":"hld","names":["Hoek van Holland Haven","Hoek v H. Haven","HvH Haven"]},{"code":"hlds","names":["Hoek van Holland Strand","Hoek v H. Strand","HvH Strand"]},{"code":"hb","names":["Hoensbroek"]},{"code":"hvl","names":["Hoevelaken"]},{"code":"hor","names":["Hollandsche Rading","Holl. Rading","Hol Rading"]},{"code":"hon","names":["Holten"]},{"code":"ehzw","names":["Holzwickede","H'wickede"]},{"code":"hfd","names":["Hoofddorp"]},{"code":"hgv","names":["Hoogeveen"]},{"code":"hgz","names":["Hoogezand-Sappemeer","Hoogezand-Sap.","Hoogezand"]},{"code":"hks","names":["Hoogkarspel","Hoogkrspl"]},{"code":"hn","names":["Hoorn"]},{"code":"hnk","names":["Hoorn Kersenboogerd","Kersenboogerd","Hoorn Kers"]},{"code":"hopf","names":["Hopfgarten"]},{"code":"hrt","names":["Horst-Sevenum","Horst-Sev"]},{"code":"htn","names":["Houten"]},{"code":"htnc","names":["Houten Castellum","Castellum","Houten C"]},{"code":"sgl","names":["Houthem-St Gerlach","Houthem-St Gerl.","Houthem-St"]},{"code":"mho","names":["Hove"]},{"code":"hdg","names":["Hurdegaryp"]},{"code":"ijt","names":["IJlst"]},{"code":"innsb","names":["Innsbruck Hbf","Innsbruck"]},{"code":"jenbac","names":["Jenbach"]},{"code":"kn","names":["Kaldenkirchen","Kaldenkir"]},{"code":"fkth","names":["Kalmthout"]},{"code":"kpn","names":["Kampen"]},{"code":"kpnz","names":["Kampen Zuid","Kampen Z"]},{"code":"bzl","names":["Kapelle-Biezelinge","Kapelle-Biezel.","Kapelle-B"]},{"code":"lkp","names":["Kapellen"]},{"code":"karlsr","names":["Karlsruhe Hbf","Karlsruhe"]},{"code":"krd","names":["Kerkrade Centrum","Kerkrade C.","Kerkrade"]},{"code":"krw","names":["Kerkrade West","Kerkrade W"]},{"code":"ktr","names":["Kesteren"]},{"code":"gkt","names":["Kijkuit"]},{"code":"kirchb","names":["Kirchberg in Tirol","Kirchberg in T.","Kirchberg"]},{"code":"kitzb","names":["Kitzbühel"]},{"code":"kbk","names":["Klarenbeek","Klarenbk"]},{"code":"kmr","names":["Klimmen-Ransdaal","Klimmen-R"]},{"code":"kko","names":["Koblenz Hbf","Koblenz"]},{"code":"konin","names":["Konin"]},{"code":"fki","names":["Kontich"]},{"code":"kbw","names":["Koog Bloemwijk","Koog Bloem"]},{"code":"kzd","names":["Koog-Zaandijk","Koog Zaand"]},{"code":"kmw","names":["Koudum-Molkwerum","Koudum-M"]},{"code":"kbd","names":["Krabbendijke","Krabbendke"]},{"code":"kma","names":["Krommenie-Assendelft","Krommenie-Ass.","Krommenie"]},{"code":"kw","names":["Kropswolde"]},{"code":"krg","names":["Kruiningen-Yerseke","Kruiningen-Y.","Kruiningen"]},{"code":"kufst","names":["Kufstein"]},{"code":"kutno","names":["Kutno"]},{"code":"koln","names":["Köln Hbf","Keulen","Koln"]},{"code":"kkd","names":["Köln-Deutz","Koln-Deutz"]},{"code":"zlw","names":["Lage Zwaluwe","Lage Zwalu"]},{"code":"land","names":["Landeck"]},{"code":"lg","names":["Landgraaf"]},{"code":"landq","names":["Landquart"]},{"code":"landry","names":["Landry"]},{"code":"leer","names":["Leer (Ostfriesland)","Leer (Ostfr.)","Leer"]},{"code":"ldm","names":["Leerdam"]},{"code":"lw","names":["Leeuwarden"]},{"code":"adh","names":["Leeuwarden Achter d Hoven","Achter de Hoven","Achter d.H"]},{"code":"lwc","names":["Leeuwarden Camminghaburen","Camminghaburen","Camminghab"]},{"code":"elgd","names":["Legden"]},{"code":"ledn","names":["Leiden Centraal","Leiden C.","Leiden C","Leiden"]},{"code":"ldl","names":["Leiden Lammenschans","Lammenschans","Leiden Lam"]},{"code":"lls","names":["Lelystad Centrum","Lelystad C.","Lelystad"]},{"code":"elet","names":["Lette (Kr Coersfeld)","Lette (Kr Coers)","Lette"]},{"code":"leuven","names":["Leuven"]},{"code":"ltv","names":["Lichtenvoorde-Groenlo","Lichtenvoorde-G.","Lichtenv-G"]},{"code":"lsl","names":["Liers"]},{"code":"lillee","names":["Lille Europe","Lille E."]},{"code":"flb","names":["Limburg Süd","Limburg S"]},{"code":"livor","names":["Livorno Centrale","Livorno C."]},{"code":"luik","names":["Liège-Guillemins","Liège-G.","Luik"]},{"code":"luikj","names":["Liège-Jonfosse","Liège-J."]},{"code":"luikp","names":["Liège-Palais","Liège-P."]},{"code":"lc","names":["Lochem"]},{"code":"flk","names":["Lokeren"]},{"code":"londs","names":["London St. Pancras","London St. Pancr","London StP"]},{"code":"lp","names":["Loppersum"]},{"code":"ltn","names":["Lunteren"]},{"code":"eldh","names":["Lüdinghausen","Lü'hausen","Ludinghausen"]},{"code":"elue","names":["Lünen Hbf","Lunen"]},{"code":"mz","names":["Maarheeze"]},{"code":"mrn","names":["Maarn"]},{"code":"mas","names":["Maarssen"]},{"code":"mss","names":["Maassluis"]},{"code":"msw","names":["Maassluis West","Maassl W"]},{"code":"mt","names":["Maastricht"]},{"code":"mtn","names":["Maastricht Noord","Maastr N"]},{"code":"mtr","names":["Maastricht Randwyck","Maastricht Randw","Maastr Rw"]},{"code":"fmz","names":["Mainz Hbf"]},{"code":"mannhe","names":["Mannheim Hbf","Mannheim"]},{"code":"mg","names":["Mantgum"]},{"code":"mrb","names":["Mariënberg"]},{"code":"marne","names":["Marne-la-Vallée-Chessy","Marne-la-Vallée","Marne-la-V"]},{"code":"mars","names":["Marseille-St-Charles","Marseille-St-C","Marseille"]},{"code":"mth","names":["Martenshoek","Martensh"]},{"code":"mech","names":["Mechelen"]},{"code":"lnk","names":["Mechelen-Nekkerspoel","Mech-Nekkerspoel","Nekkersp"]},{"code":"mes","names":["Meerssen"]},{"code":"lm","names":["Melsele"]},{"code":"mp","names":["Meppel"]},{"code":"emte","names":["Metelen Land","Metelen L."]},{"code":"mdb","names":["Middelburg"]},{"code":"bltm","names":["Milmort"]},{"code":"minden","names":["Minden (Westf.)","Minden"]},{"code":"kmb","names":["Montabaur"]},{"code":"mmlh","names":["Mook Molenhoek","Molenhoek","Mook Molen"]},{"code":"gmd","names":["Mortsel-Deurnesteenweg","M-Deurnesteenweg","M-Deurnest"]},{"code":"gmog","names":["Mortsel-Oude God","M-Oude God"]},{"code":"mout","names":["Moutiers-Salins-Brides","Moutiers-Salins","Moutiers-S"]},{"code":"mcgb","names":["Mönchengladbach Hbf","Mönchengladbach","Mönchengl","Monchengladbach"]},{"code":"munchh","names":["München Hbf","München","Munchen"]},{"code":"munst","names":["Münster (Westf.) Hbf","Münster (Westf.)","Münster","Munster (Westf) Hbf"]},{"code":"enhf","names":["Münster Zentrum Nord","Münster Nord","Münster N","Munster Zentrum Nord"]},{"code":"enbe","names":["Münster-Häger","Münster-H","Munster-Hager"]},{"code":"ndb","names":["Naarden-Bussum","Naarden-B"]},{"code":"neuss","names":["Neuss Hbf","Neuss"]},{"code":"lni","names":["Niel"]},{"code":"na","names":["Nieuw Amsterdam","Nw A'dam"]},{"code":"nvp","names":["Nieuw Vennep","Nw Vennep"]},{"code":"nwk","names":["Nieuwerkerk a/d IJssel","Nieuwerkerk","Nieuwerkrk"]},{"code":"fnu","names":["Nieuwkerken-Waas","Nieuwkerke"]},{"code":"nkk","names":["Nijkerk"]},{"code":"nm","names":["Nijmegen"]},{"code":"nmd","names":["Nijmegen Dukenburg","Dukenburg"]},{"code":"nmgo","names":["Nijmegen Goffert","Goffert"]},{"code":"nmh","names":["Nijmegen Heyendaal","Nm Heyendaal","Heyendaal"]},{"code":"nml","names":["Nijmegen Lent","Lent"]},{"code":"nvd","names":["Nijverdal"]},{"code":"ndkp","names":["Noorderkempen","N.kempen"]},{"code":"enow","names":["Nordwalde"]},{"code":"ns","names":["Nunspeet"]},{"code":"nh","names":["Nuth"]},{"code":"nurnb","names":["Nürnberg Hbf","Nürnberg"]},{"code":"obd","names":["Obdam"]},{"code":"oberh","names":["Oberhausen Hbf","Oberhausen"]},{"code":"eop","names":["Ochtrup"]},{"code":"ro","names":["Offenburg"]},{"code":"ot","names":["Oisterwijk"]},{"code":"odz","names":["Oldenzaal"]},{"code":"ost","names":["Olst"]},{"code":"omn","names":["Ommen"]},{"code":"otb","names":["Oosterbeek"]},{"code":"op","names":["Opheusden"]},{"code":"osnh","names":["Osnabrück Hbf","Osnabrück"]},{"code":"o","names":["Oss"]},{"code":"ow","names":["Oss West","Oss W"]},{"code":"odb","names":["Oudenbosch"]},{"code":"ovn","names":["Overveen"]},{"code":"paris","names":["Paris-Nord","Parijs"]},{"code":"tp","names":["Plochingen"]},{"code":"pozn","names":["Poznan Gl."]},{"code":"praha","names":["Praha hl.n.","Praha hl.n"]},{"code":"prahol","names":["Praha-Holesovice","Praha-Hol."]},{"code":"eprn","names":["Preussen"]},{"code":"pmr","names":["Purmerend"]},{"code":"pmo","names":["Purmerend Overwhere","Overwhere"]},{"code":"pmw","names":["Purmerend Weidevenne","Weidevenne"]},{"code":"pt","names":["Putten"]},{"code":"frp","names":["Puurs"]},{"code":"rat","names":["Raalte"]},{"code":"lrw","names":["Rathenow"]},{"code":"rvs","names":["Ravenstein"]},{"code":"rv","names":["Reuver"]},{"code":"rh","names":["Rheden"]},{"code":"rheine","names":["Rheine"]},{"code":"rhn","names":["Rhenen"]},{"code":"rsn","names":["Rijssen"]},{"code":"rsw","names":["Rijswijk"]},{"code":"rb","names":["Rilland-Bath","Rilland-B"]},{"code":"rm","names":["Roermond"]},{"code":"rd","names":["Roodeschool","Roodesch"]},{"code":"rsd","names":["Roosendaal"]},{"code":"ehw","names":["Rosendahl-Holtwick","Rosendahl-Holtw.","Rosend-H"]},{"code":"rs","names":["Rosmalen"]},{"code":"rta","names":["Rotterdam Alexander","Alexander"]},{"code":"rtb","names":["Rotterdam Blaak","Blaak"]},{"code":"rtd","names":["Rotterdam Centraal","Rotterdam C.","R'dam C","Rotterdam"]},{"code":"rlb","names":["Rotterdam Lombardijen","Lombardijen","Lombardije"]},{"code":"rtn","names":["Rotterdam Noord","R'dam N"]},{"code":"rtst","names":["Rotterdam Stadion","R'dam Stadion","R'dam Sta"]},{"code":"rtz","names":["Rotterdam Zuid","R'dam Z"]},{"code":"fsv","names":["Ruisbroek-Sauvegarde","Ruisbroek-Sauv.","Ruisbr-S"]},{"code":"rl","names":["Ruurlo"]},{"code":"rzepin","names":["Rzepin"]},{"code":"saalf","names":["Saalfelden"]},{"code":"sptn","names":["Santpoort Noord","Santprt N"]},{"code":"sptz","names":["Santpoort Zuid","Santprt Z"]},{"code":"spm","names":["Sappemeer Oost","Sappemr O"]},{"code":"ssh","names":["Sassenheim"]},{"code":"swd","names":["Sauwerd"]},{"code":"sgn","names":["Schagen"]},{"code":"sda","names":["Scheemda"]},{"code":"schll","names":["Schelle"]},{"code":"sdm","names":["Schiedam Centrum","Schiedam C.","Schiedam C"]},{"code":"nwl","names":["Schiedam Nieuwland","Nieuwland"]},{"code":"sog","names":["Schin op Geul","Schin op G"]},{"code":"sn","names":["Schinnen"]},{"code":"shl","names":["Schiphol Airport","Schiphol","Amsterdam Airport"]},{"code":"schwar","names":["Schwarzach-St. Veit","Schwarzach-St. V","Schwarzach"]},{"code":"kswe","names":["Schwelm"]},{"code":"esrt","names":["Schwerte (Ruhr)","Schwerte (R)","Schwerte"]},{"code":"esem","names":["Selm"]},{"code":"eseb","names":["Selm-Beifang","Selm-B"]},{"code":"ksb","names":["Siegburg/Bonn","Siegburg"]},{"code":"spv","names":["Simpelveld"]},{"code":"lsw","names":["Sinaai"]},{"code":"fwa","names":["Sint-Katelijne-Waver","Sint-Katelijne-W","Sint-Katel"]},{"code":"fsn","names":["Sint-Niklaas","Sint-Nikla"]},{"code":"std","names":["Sittard"]},{"code":"sdt","names":["Sliedrecht"]},{"code":"sdtb","names":["Sliedrecht Baanhoek","Baanhoek"]},{"code":"sk","names":["Sneek"]},{"code":"sknd","names":["Sneek Noord","Sneek N"]},{"code":"st","names":["Soest"]},{"code":"stz","names":["Soest Zuid","Soest Z"]},{"code":"sd","names":["Soestdijk"]},{"code":"sbk","names":["Spaubeek"]},{"code":"sph","names":["Spekholzerheide","Spekholzer"]},{"code":"maria","names":["St-Mariaburg","St-Mariab"]},{"code":"stjohp","names":["St. Johann im Pongau","St. Johann im P.","St.JohannP"]},{"code":"stjoh","names":["St. Johann in Tirol","St. Johann in T.","St. Johann"]},{"code":"stv","names":["Stavoren"]},{"code":"stm","names":["Stedum"]},{"code":"swk","names":["Steenwijk"]},{"code":"ebgo","names":["Steinfurt-Borghorst","Steinfurt-Borgh","Steinf-Bor"]},{"code":"ebft","names":["Steinfurt-Burgsteinfurt","Steinfurt-Burgst","Steinf-Bur"]},{"code":"egrk","names":["Steinfurt-Grottenkamp","Steinfurt-Grotte","Steinf-Gr"]},{"code":"ls","names":["Stendal"]},{"code":"ts","names":["Stuttgart Hbf","Stuttgart"]},{"code":"srn","names":["Susteren"]},{"code":"sm","names":["Swalmen"]},{"code":"wta","names":["Tantow"]},{"code":"tg","names":["Tegelen"]},{"code":"tbg","names":["Terborg"]},{"code":"tl","names":["Tiel"]},{"code":"tpsw","names":["Tiel Passewaaij","Passewaaij"]},{"code":"tb","names":["Tilburg"]},{"code":"tbr","names":["Tilburg Reeshof","Reeshof"]},{"code":"tbu","names":["Tilburg Universiteit","Tilburg Univers.","Tilburg U"]},{"code":"ftg","names":["Tongeren"]},{"code":"twl","names":["Twello"]},{"code":"utg","names":["Uitgeest"]},{"code":"uhz","names":["Uithuizen"]},{"code":"uhm","names":["Uithuizermeeden","Uithuizerm"]},{"code":"tu","names":["Ulm Hbf","Ulm"]},{"code":"eun","names":["Unna"]},{"code":"ust","names":["Usquert"]},{"code":"usti","names":["Usti nad Labem","Usti nad L"]},{"code":"ut","names":["Utrecht Centraal","Utrecht C.","Utrecht C","Utrecht"]},{"code":"utlr","names":["Utrecht Leidsche Rijn","Leidsche Rijn","Leidsche R"]},{"code":"utl","names":["Utrecht Lunetten","Lunetten"]},{"code":"utm","names":["Utrecht Maliebaan","Maliebaan","Spoorwegmuseum"]},{"code":"uto","names":["Utrecht Overvecht","Overvecht"]},{"code":"utt","names":["Utrecht Terwijde","Terwijde"]},{"code":"utzl","names":["Utrecht Zuilen","Zuilen"]},{"code":"valtgv","names":["Valence TGV","ValenceTGV"]},{"code":"vk","names":["Valkenburg"]},{"code":"vsv","names":["Varsseveld"]},{"code":"vdm","names":["Veendam"]},{"code":"vndc","names":["Veenendaal Centrum","Veenendaal C.","Veenendl C"]},{"code":"vndw","names":["Veenendaal West","Veenendl W"]},{"code":"klp","names":["Veenendaal-De Klomp","De Klomp"]},{"code":"vp","names":["Velp"]},{"code":"vl","names":["Venlo"]},{"code":"vry","names":["Venray"]},{"code":"vlb","names":["Vierlingsbeek","Vierlingsb"]},{"code":"viers","names":["Viersen"]},{"code":"fvs","names":["Visé"]},{"code":"vdg","names":["Vlaardingen Centrum","Vlaardingen C.","Vlaard C"]},{"code":"vdo","names":["Vlaardingen Oost","Vlaard O"]},{"code":"vdw","names":["Vlaardingen West","Vlaard W"]},{"code":"vtn","names":["Vleuten"]},{"code":"vs","names":["Vlissingen"]},{"code":"vss","names":["Vlissingen Souburg","Souburg"]},{"code":"vdl","names":["Voerendaal"]},{"code":"vb","names":["Voorburg"]},{"code":"vh","names":["Voorhout"]},{"code":"vst","names":["Voorschoten","Voorschtn"]},{"code":"vem","names":["Voorst-Empe","Voorst-E"]},{"code":"vd","names":["Vorden"]},{"code":"vz","names":["Vriezenveen","Vriezenvn"]},{"code":"vhp","names":["Vroomshoop"]},{"code":"vg","names":["Vught"]},{"code":"wad","names":["Waddinxveen","Waddinxv"]},{"code":"wadn","names":["Waddinxveen Noord","Waddinxveen N.","Waddinxv N"]},{"code":"wfm","names":["Warffum"]},{"code":"warszc","names":["Warszawa Centralna","Warszawa C.","Warszawa C"]},{"code":"warsaw","names":["Warszawa Wschodnia","Warszawa Wschodn","Warszawa W"]},{"code":"wr","names":["Weener"]},{"code":"wt","names":["Weert"]},{"code":"wp","names":["Weesp"]},{"code":"wl","names":["Wehl"]},{"code":"wtv","names":["Westervoort","Westervrt"]},{"code":"wz","names":["Wezep"]},{"code":"wienw","names":["Wien Westbahnhof","Wien Westbf","Wien Westb"]},{"code":"wdn","names":["Wierden"]},{"code":"wc","names":["Wijchen"]},{"code":"wh","names":["Wijhe"]},{"code":"gwd","names":["Wildert"]},{"code":"ws","names":["Winschoten"]},{"code":"wsm","names":["Winsum"]},{"code":"ww","names":["Winterswijk","Winterswk"]},{"code":"www","names":["Winterswijk West","Wintersw W"]},{"code":"wd","names":["Woerden"]},{"code":"wf","names":["Wolfheze"]},{"code":"hwob","names":["Wolfsburg"]},{"code":"wv","names":["Wolvega"]},{"code":"wk","names":["Workum"]},{"code":"wm","names":["Wormerveer"]},{"code":"kwba","names":["Wuppertal Barmen","Wuppertal B","Wup'tal B"]},{"code":"wupph","names":["Wuppertal Hbf","Wuppertal"]},{"code":"kwo","names":["Wuppertal Oberbarmen","Wuppertal O","Wup'tal O"]},{"code":"wuppv","names":["Wuppertal-Vohwinkel","Wupp-Vohwinkel","Wupp-Vohw"]},{"code":"worgl","names":["Wörgl","Worgl"]},{"code":"wurzb","names":["Würzburg Hbf","Würzburg"]},{"code":"zd","names":["Zaandam"]},{"code":"zdk","names":["Zaandam Kogerveld","Kogerveld"]},{"code":"zbm","names":["Zaltbommel"]},{"code":"zvt","names":["Zandvoort aan Zee","Zandvoort a Zee","Zandvoort"]},{"code":"zell","names":["Zell am See","Zell am S."]},{"code":"za","names":["Zetten-Andelst","Zetten-A"]},{"code":"zv","names":["Zevenaar"]},{"code":"zvb","names":["Zevenbergen","Zevenbergn"]},{"code":"ztm","names":["Zoetermeer"]},{"code":"ztmo","names":["Zoetermeer Oost","Z'meer O"]},{"code":"zb","names":["Zuidbroek"]},{"code":"zh","names":["Zuidhorn"]},{"code":"zp","names":["Zutphen"]},{"code":"zwd","names":["Zwijndrecht","Zwijndrcht"]},{"code":"lzd","names":["Zwijndrecht (Belgie)","Zwijndrecht (B)","Zwijndrech"]},{"code":"zl","names":["Zwolle"]},{"code":"zue","names":["Zürich HB","Zurich"]},{"code":"oetz","names":["Ötztal","Otztal"]}];
var Queries = [];

//-----------------------------------------------------------------------------

// Utility functions
var Utils = function(){};

// Copies object properties to another based on a map
Utils.copy = function(a, b, map = {})
{
  // Loop over the keys
  for (var key in a)
  {
    if (!a.hasOwnProperty(key))
      continue;
    
    // Check if there exists a mapping, else just copy
    var mapping = map[key];
    if (typeof mapping === 'undefined')
      b[key] = a[key];
    
    // If mapping is an object, then map using this function
    else if (typeof mapping === 'object')
    {
      if (typeof mapping.key !== 'string')
        throw "TypeError: mapping key was not defined";
      
      var mKey = mapping.key;
      if (typeof mapping.fn === 'function')
        b[mKey] = mapping.fn.call(this,a[key]);
      else
        b[mKey] = a[key];
    }
    
    // If mapping is a string, then map 1:1
    else
      b[mapping] = a[key];
  }
  
  // Return the destination
  return b;
}

// Pads a string with zeroes
Utils.pad = function(number, length)
{
  var string = new String(number);
  while (string.length < length)
    string = "0" + string;
  return string;
};

// Wraps a string into lines using words, optionally using dots
Utils.wrap = function(text, maxWidth, canvas, wordWrap = true, dots = false)
{
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

// Train class for managing train properties
var Train = function()
{
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
};

// Train formatting functions
Train.prototype.formatTime = function()
{
  return Utils.pad(this.time.getHours(),2) + ":" + Utils.pad(this.time.getMinutes(),2);
};
Train.prototype.formatDelayShort = function()
{
  return "+" + this.delay;
};
Train.prototype.formatDelay = function()
{
  return this.formatDelayShort() + " minuten";
};
Train.prototype.formatRoute = function()
{
  if (typeof this.route === 'undefined' || this.route === null || this.route.length === 0)
    return "";
  else if (this.route.length === 1)
    return "via " + this.route[0].names[0];
  else if (this.route.length === 2)
    return "via " + this.route[0].names[0] + " en " + this.route[1].names[0];

  var string = "via " + this.route[0].names[0];
  for (var i = 1; i < this.route.length - 1; i ++)
    string += ", " + this.route[i].names[0];
  string += " en " + this.route[this.route.length - 1].names[0];
  return string;
};

// Returns a string representation of this Train (for use as next train string)
Train.prototype.toString = function()
{
  return this.formatTime() + " " + this.type + " " + this.destination.names[0] + (this.delay > 0 ? " " + this.formatDelayShort() : "")
}

// Creates a train based on the given data
Train.of = function(data)
{
  return Utils.copy(data,new Train());
}

//-----------------------------------------------------------------------------

// Station class for managing trains and CTAs
var Station = function(data)
{
  // Parse the data string if not already
  if (typeof data === 'string')
  {
    data = Station.find(data);
    if (data === null)
      throw "NotFoundError: No station found for '" + data.query + "'";
  }
  
  // Copy the station data into this object
  for (var key in data)
    this[key] = data[key];
  
  this.trains = [];
  this.cta = {};
  
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
        this.trains.push(Utils.copy(data.vertrektijden[i],new Train(),{
          "treinNr": "number",
          "soort": "type",
          "vervoerder": "operator",
          "bestemming": {key: "destination", fn: Station.find},
          "via": {key: "route", fn: function(a)
          {
            if (typeof a === 'undefined' || a === null)
              return [];
            else
              return a.split(", ").map(Station.find);
          }},
          "vertrek": {key: "time", fn: a => new Date(a)},
          "vertraging": "delay",
          "spoor": "platform",
          "opmerkingen": "info",
          "tips": "infoOptional"
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
      
      // Trigger ready event
      $(document).trigger('cta-ready');
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
        if(nn) return nn;
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
    if ($.inArray(query,station.names) >= 0)
      return Queries[query] = station;
  }
  
  // Check for code
  for (var i = 0; i < Stations.length; i ++)
  {
    var station = Stations[i];
    if (station.code === query)
      return Queries[query] = station;
  }
  
  // No match, only return the query
  return Queries[query] = null;
};

//-----------------------------------------------------------------------------

// CTA class for drawing CTAs from two trains
var CTA = function(train, nextTrain = null)
{
  this.train = train;
  this.nextTrain = nextTrain;
  console.log(this);
  
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
  ctx.fillText(this.train.formatTime(),boundary_large,font_y_time);
  
  // Draw delay if there is delay, else draw train type
  if (typeof this.train.delay !== 'undefined' && this.train.delay > 0)
  {
    // Draw delay
    ctx.fillStyle = this.dark;
    ctx.fillRect(delay_x,0,canvas.width - delay_x,delay_height);
    
    ctx.font = "bold " + font_size_time + "px " + this.font;
    ctx.textAlign = "left";
    ctx.fillStyle = this.light;
    ctx.fillText(this.train.formatDelay(),delay_x + boundary_large,font_y_time);
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
  var text = function(names, maxWidth)
  {
    console.log(names);
    for (var i = 0; i < names.length; i ++)
    {
      if (ctx.measureText(names[i]).width <= maxWidth)
        return names[i];
    }
    return Utils.wrap(names[0],maxWidth,canvas,false,true)[0];
  }(this.train.destination.names,canvas.width - 2 * boundary_small);
  console.log(text);
  ctx.fillText(text,boundary_small,font_y_destination);
  
  // Draw route
  ctx.font = "bold " + font_size_route + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  
  var wrapped = Utils.wrap(this.train.formatRoute(),canvas.width - 2 * boundary_large,canvas);
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
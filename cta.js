//-----------------------------------------------------------------------------

// Load stations in a cache and create a cache for queries
var Stations = [{"code":"ht","name":["'s-Hertogenbosch","Den Bosch","Hertogenbosch ('s)"]},{"code":"hto","name":["'s-Hertogenbosch Oost","Hertogenbosch O.","H'bosch O","Hertogenbosch Oost ('s)","Den Bosch Oost"]},{"code":"hde","name":["'t Harde","Harde ('t)"]},{"code":"atn","name":["Aalten"]},{"code":"ac","name":["Abcoude"]},{"code":"eahs","name":["Ahaus"]},{"code":"aime","name":["Aime-la-Plagne","Aime-la-Pl"]},{"code":"aixtgv","name":["Aix-en-Provence","Aix-en-Pro"]},{"code":"akm","name":["Akkrum"]},{"code":"albert","name":["Albertville","Albertv."]},{"code":"aless","name":["Alessandria","Alessandr."]},{"code":"amr","name":["Alkmaar"]},{"code":"amrn","name":["Alkmaar Noord","Alkmaar N"]},{"code":"aml","name":["Almelo"]},{"code":"amri","name":["Almelo de Riet","de Riet"]},{"code":"almb","name":["Almere Buiten","Buiten"]},{"code":"alm","name":["Almere Centrum","Almere C.","Almere C","Almere"]},{"code":"almm","name":["Almere Muziekwijk","Muziekwijk"]},{"code":"almo","name":["Almere Oostvaarders","Oostvaarders","Oostvaard"]},{"code":"almp","name":["Almere Parkwijk","Parkwijk"]},{"code":"ampo","name":["Almere Poort","Almere P"]},{"code":"apn","name":["Alphen a/d Rijn","Alphen","Alphen aan den Rijn"]},{"code":"eabg","name":["Altenberge"]},{"code":"amf","name":["Amersfoort"]},{"code":"amfs","name":["Amersfoort Schothorst","Schothorst"]},{"code":"avat","name":["Amersfoort Vathorst","Vathorst"]},{"code":"asa","name":["Amsterdam Amstel","Amstel"]},{"code":"asb","name":["Amsterdam Bijlmer ArenA","Bijlmer ArenA","Bijlmer A"]},{"code":"asd","name":["Amsterdam Centraal","Amsterdam C.","A'dam C","Amsterdam"]},{"code":"ashd","name":["Amsterdam Holendrecht","Holendrecht","Holendrcht"]},{"code":"asdl","name":["Amsterdam Lelylaan","Lelylaan"]},{"code":"asdm","name":["Amsterdam Muiderpoort","Muiderpoort","Muiderprt"]},{"code":"rai","name":["Amsterdam RAI","A'dam RAI"]},{"code":"assp","name":["Amsterdam Science Park","Science Park","Scienceprk"]},{"code":"ass","name":["Amsterdam Sloterdijk","Sloterdijk"]},{"code":"vmw","name":["Amsterdam Van der Madeweg","Van der Madeweg","vd Madeweg"]},{"code":"asdz","name":["Amsterdam Zuid","A'dam Z"]},{"code":"ana","name":["Anna Paulowna","Anna Paulo"]},{"code":"berch","name":["Antwerpen-Berchem","Antw-Berchem","Antw-Berch"]},{"code":"atw","name":["Antwerpen-Centraal","Antwerpen-C.","Antwerpen"]},{"code":"atwlb","name":["Antwerpen-Luchtbal","Antw-Luchtbal","Antw-Bal"]},{"code":"andd","name":["Antwerpen-Noorderdokken","Antw-N'dokken","Antw-dok"]},{"code":"fnzd","name":["Antwerpen-Zuid","Antw-Zuid"]},{"code":"apd","name":["Apeldoorn"]},{"code":"apdm","name":["Apeldoorn De Maten","De Maten"]},{"code":"apdo","name":["Apeldoorn Osseveld","Osseveld"]},{"code":"apg","name":["Appingedam"]},{"code":"akl","name":["Arkel"]},{"code":"arn","name":["Arnemuiden"]},{"code":"ah","name":["Arnhem"]},{"code":"ahpr","name":["Arnhem Presikhaaf","Presikhaaf"]},{"code":"ahp","name":["Arnhem Velperpoort","Velperpoort","Velperprt"]},{"code":"ahz","name":["Arnhem Zuid","Arnhem Z"]},{"code":"ashfd","name":["Ashford International","Ashford Internat","AshfordINT"]},{"code":"asn","name":["Assen"]},{"code":"ma","name":["Augsburg Hbf","Augsburg"]},{"code":"avtgv","name":["Avignon TGV","Avignon"]},{"code":"brn","name":["Baarn"]},{"code":"bh","name":["Bad Bentheim","Bentheim"]},{"code":"nsch","name":["Bad Nieuweschans","Nweschans","Nieuweschans"]},{"code":"oeynh","name":["Bad Oeynhausen","Bad Oeynh"]},{"code":"badsch","name":["Bad Schandau","Bad Schand"]},{"code":"badenz","name":["Baden"]},{"code":"rbb","name":["Baden-Baden","Baden-B."]},{"code":"bf","name":["Baflo"]},{"code":"brd","name":["Barendrecht","Barendrcht"]},{"code":"bnc","name":["Barneveld Centrum","Barneveld C.","Barnevld C"]},{"code":"bnn","name":["Barneveld Noord","Barnevld N"]},{"code":"bnz","name":["Barneveld Zuid","Barnevld Z"]},{"code":"baselb","name":["Basel Bad Bf","Basel Bad"]},{"code":"basels","name":["Basel SBB"]},{"code":"bdm","name":["Bedum"]},{"code":"bk","name":["Beek-Elsloo","Beek-E"]},{"code":"bsd","name":["Beesd"]},{"code":"bl","name":["Beilen"]},{"code":"llb","name":["Belsele"]},{"code":"bgn","name":["Bergen op Zoom","Bergen opZ"]},{"code":"berhbl","name":["Berlin Hbf","Berlijn"]},{"code":"berhbt","name":["Berlin Hbf (tief)","Berlin Hbf"]},{"code":"bhf","name":["Berlin Ostbahnhof","Berlin Ostbhf","Berlin Ost"]},{"code":"bpaf","name":["Berlin Südkreuz","Berlin Süd"]},{"code":"berfl","name":["Berlin-Schönefeld Flug.","Berlin-S Flug.","Berlin-Fl."]},{"code":"bspd","name":["Berlin-Spandau","Berlin-Spa"]},{"code":"bet","name":["Best"]},{"code":"fbr","name":["Beveren"]},{"code":"bv","name":["Beverwijk"]},{"code":"bielef","name":["Bielefeld Hbf","Bielefeld"]},{"code":"bhv","name":["Bilthoven"]},{"code":"fie","name":["Bilzen"]},{"code":"bischo","name":["Bischofshofen","Bischofsh."]},{"code":"br","name":["Blerick"]},{"code":"bll","name":["Bloemendaal","Bloemendl"]},{"code":"bluden","name":["Bludenz"]},{"code":"bdg","name":["Bodegraven"]},{"code":"kboi","name":["Boisheim"]},{"code":"bonn","name":["Bonn Hbf"]},{"code":"fmb","name":["Boom"]},{"code":"ebok","name":["Bork"]},{"code":"bn","name":["Borne"]},{"code":"bsk","name":["Boskoop"]},{"code":"bourg","name":["Bourg-St-Maurice","Bourg-StM"]},{"code":"bhdv","name":["Boven-Hardinxveld","Boven-Hardinxv.","Boven-H."]},{"code":"bkf","name":["Bovenkarspel Flora","Bovenkarspel Fl.","Bovenk Flo"]},{"code":"bkg","name":["Bovenkarspel-Grootebroek","Bovenkarspel-Gr.","Bovenk-Gr"]},{"code":"bmr","name":["Boxmeer"]},{"code":"btl","name":["Boxtel"]},{"code":"brauns","name":["Braunschweig Hbf","Braunschw"]},{"code":"bd","name":["Breda"]},{"code":"bdpb","name":["Breda-Prinsenbeek","Prinsenbeek","Prinsenbk"]},{"code":"bressx","name":["Bressoux"]},{"code":"bkl","name":["Breukelen"]},{"code":"kbry","name":["Breyell"]},{"code":"bmn","name":["Brummen"]},{"code":"fbnl","name":["Brussel Nat. Luchthaven","Brussel Luchthvn","Brus Lucht"]},{"code":"brusc","name":["Brussel-Centraal","Brussel-C.","Brussel-C"]},{"code":"brusn","name":["Brussel-Noord","Brussel-N"]},{"code":"brusz","name":["Brussel-Zuid/Midi","Brussel Z./Midi","Brussel-Z"]},{"code":"bp","name":["Buitenpost"]},{"code":"bde","name":["Bunde"]},{"code":"bnk","name":["Bunnik"]},{"code":"bsmz","name":["Bussum Zuid","Bussum Z"]},{"code":"ebeo","name":["Bönen","Bonen"]},{"code":"buende","name":["Bünde (Westf)","Bünde (W)","Bunde"]},{"code":"cps","name":["Capelle Schollevaar","Schollevaar","Schollevr"]},{"code":"cas","name":["Castricum"]},{"code":"chamb","name":["Chambéry"]},{"code":"cvm","name":["Chevremont"]},{"code":"chur","name":["Chur"]},{"code":"ecmf","name":["Coesfeld (Westf)","Coesfeld"]},{"code":"co","name":["Coevorden"]},{"code":"como","name":["Como"]},{"code":"ck","name":["Cuijk"]},{"code":"cl","name":["Culemborg"]},{"code":"da","name":["Daarlerveen","Daarlervn"]},{"code":"dln","name":["Dalen"]},{"code":"dl","name":["Dalfsen"]},{"code":"dvnk","name":["De Vink"]},{"code":"dwe","name":["De Westereen","Westereen","Zwaagwesteinde"]},{"code":"decin","name":["Decin hl.n.","Decin hl.n"]},{"code":"dei","name":["Deinum"]},{"code":"ddn","name":["Delden"]},{"code":"dt","name":["Delft"]},{"code":"dtz","name":["Delft Zuid","Delft Z"]},{"code":"dz","name":["Delfzijl"]},{"code":"dzw","name":["Delfzijl West","Delfzijl W"]},{"code":"dld","name":["Den Dolder"]},{"code":"gvc","name":["Den Haag Centraal","Den Haag C.","Den Haag C","'s-Gravenhage","Den Haag"]},{"code":"gv","name":["Den Haag HS","Dn Haag HS"]},{"code":"laa","name":["Den Haag Laan v NOI","Laan v NOI"]},{"code":"gvm","name":["Den Haag Mariahoeve","Mariahoeve"]},{"code":"gvmw","name":["Den Haag Moerwijk","Moerwijk"]},{"code":"ypb","name":["Den Haag Ypenburg","Ypenburg"]},{"code":"hdr","name":["Den Helder"]},{"code":"hdrz","name":["Den Helder Zuid","Dn Heldr Z"]},{"code":"dn","name":["Deurne"]},{"code":"dv","name":["Deventer"]},{"code":"dvc","name":["Deventer Colmschate","Colmschate"]},{"code":"did","name":["Didam"]},{"code":"dmn","name":["Diemen"]},{"code":"dmnz","name":["Diemen Zuid","Diemen Z"]},{"code":"gdp","name":["Diepenbeek"]},{"code":"dr","name":["Dieren"]},{"code":"dtc","name":["Doetinchem"]},{"code":"dtch","name":["Doetinchem De Huet","De Huet"]},{"code":"domod","name":["Domodossola","Domodosso."]},{"code":"ddr","name":["Dordrecht"]},{"code":"ddrs","name":["Dordrecht Stadspolders","Stadspolders","Stadspldrs"]},{"code":"ddzd","name":["Dordrecht Zuid","Dordrcht Z"]},{"code":"edd","name":["Dortmund Derne","Dortmund D"]},{"code":"edo","name":["Dortmund Hbf","Dortmund"]},{"code":"edkd","name":["Dortmund Kirchderne","Dortmund Kirchd.","Dortmund K"]},{"code":"dresd","name":["Dresden Hbf","Dresden H."]},{"code":"dresdn","name":["Dresden-Neustadt","Dresden-N"]},{"code":"db","name":["Driebergen-Zeist","Driebergen"]},{"code":"drh","name":["Driehuis"]},{"code":"drp","name":["Dronryp","Dronrijp"]},{"code":"dron","name":["Dronten"]},{"code":"fdp","name":["Duffel"]},{"code":"duisb","name":["Duisburg Hbf","Duisburg"]},{"code":"dvn","name":["Duiven"]},{"code":"dvd","name":["Duivendrecht","Duivendt"]},{"code":"kdul","name":["Dülken","Dulken"]},{"code":"edulh","name":["Dülmen","Dulmen"]},{"code":"dussel","name":["Düsseldorf Hbf","Düsseldrf","Dusseldorf"]},{"code":"ebbs","name":["Ebbsfleet International","Ebbsfleet Intern","Ebbsfleet"]},{"code":"ec","name":["Echt"]},{"code":"edc","name":["Ede Centrum","Ede C.","Ede C"]},{"code":"ed","name":["Ede-Wageningen","Ede-Wag"]},{"code":"wtm","name":["Eijs-Wittem","Eijs-Witt"]},{"code":"edn","name":["Eijsden"]},{"code":"ehv","name":["Eindhoven"]},{"code":"ehs","name":["Eindhoven Strijp-S","Strijp-S","Eindhoven Beukenlaan"]},{"code":"lkr","name":["Ekeren"]},{"code":"est","name":["Elst"]},{"code":"emn","name":["Emmen"]},{"code":"emnz","name":["Emmen Zuid","Emmen Z"]},{"code":"em","name":["Emmerich"]},{"code":"ekz","name":["Enkhuizen"]},{"code":"eenp","name":["Ennepetal (Gevelsberg)","Ennepetal"]},{"code":"es","name":["Enschede"]},{"code":"ese","name":["Enschede De Eschmarke","De Eschmarke","Eschmarke"]},{"code":"esk","name":["Enschede Kennispark","Kennispark","Enschede Drienerlo"]},{"code":"eepe","name":["Epe (Westf)","Epe (West)"]},{"code":"eml","name":["Ermelo"]},{"code":"esn","name":["Essen (Belgie)","Essen (B)"]},{"code":"etn","name":["Etten-Leur"]},{"code":"egh","name":["Eygelshoven","Eygelshov"]},{"code":"eghm","name":["Eygelshoven Markt","Eygelshoven Mrkt","Eygelsh M"]},{"code":"fwd","name":["Feanwalden","Veenwouden"]},{"code":"fieber","name":["Fieberbrunn","Fieberbrun"]},{"code":"fn","name":["Franeker"]},{"code":"fffm","name":["Frankfurt (M) Hbf","Frankfurt Hbf","Frankfurt"]},{"code":"franko","name":["Frankfurt (Oder)","Frankf(Od)"]},{"code":"fnaf","name":["Frankfurt Flughafen Fernb","Frankfurt Flugh.","FrankfurtF"]},{"code":"rf","name":["Freiburg (Breisgau) Hbf","Freiburg (B.)","Freiburg"]},{"code":"gdr","name":["Gaanderen"]},{"code":"gdk","name":["Geerdijk"]},{"code":"geisl","name":["Geislingen"]},{"code":"gdm","name":["Geldermalsen","G'malsen"]},{"code":"gp","name":["Geldrop"]},{"code":"gln","name":["Geleen Oost","Geleen O"]},{"code":"lut","name":["Geleen-Lutterade","Geleen-Lut"]},{"code":"gz","name":["Gilze-Rijen","Gilze-Rij"]},{"code":"gbr","name":["Glanerbrug"]},{"code":"lgl","name":["Glons"]},{"code":"gs","name":["Goes"]},{"code":"go","name":["Goor"]},{"code":"gr","name":["Gorinchem"]},{"code":"gd","name":["Gouda"]},{"code":"gdg","name":["Gouda Goverwelle","Goverwelle"]},{"code":"gbg","name":["Gramsbergen","Gramsbergn"]},{"code":"gk","name":["Grijpskerk"]},{"code":"g","name":["Gronau (Westf.)","Gronau"]},{"code":"gn","name":["Groningen"]},{"code":"gerp","name":["Groningen Europapark","Europapark"]},{"code":"gnn","name":["Groningen Noord","Groning N"]},{"code":"gw","name":["Grou-Jirnsum","Grou-Jirns"]},{"code":"wij","name":["Gulpen-Wijlre","Gulpen-W"]},{"code":"tgo","name":["Göppingen","Goppingen"]},{"code":"mgzb","name":["Günzburg","Gunzburg"]},{"code":"hlm","name":["Haarlem"]},{"code":"hlms","name":["Haarlem Spaarnwoude","Spaarnwoude","Spaarnwde"]},{"code":"hagen","name":["Hagen Hbf","Hagen"]},{"code":"hwzb","name":["Halfweg-Zwanenburg","Halfweg-Zwanenb.","Halfweg-Zw"]},{"code":"hamh","name":["Hamburg Hbf","Hamburg H"]},{"code":"hamm","name":["Hamm (Westf.)","Hamm"]},{"code":"hann","name":["Hannover Hbf","Hannover H"]},{"code":"hdb","name":["Hardenberg"]},{"code":"hd","name":["Harderwijk"]},{"code":"hbzm","name":["Hardinxveld Blauwe Zoom","Blauwe Zoom","Blauwe Z"]},{"code":"gnd","name":["Hardinxveld-Giessendam","Hardinxveld-G.","Hardinxvld"]},{"code":"hrn","name":["Haren"]},{"code":"hlg","name":["Harlingen"]},{"code":"hlgh","name":["Harlingen Haven","Harl Haven"]},{"code":"fhs","name":["Hasselt"]},{"code":"hk","name":["Heemskerk"]},{"code":"had","name":["Heemstede-Aerdenhout","Heemstede-A.","Heemstede"]},{"code":"hr","name":["Heerenveen"]},{"code":"hry","name":["Heerenveen IJsstadion","IJsstadion","H'veen IJs"]},{"code":"hwd","name":["Heerhugowaard","Heerhugow"]},{"code":"hrl","name":["Heerlen"]},{"code":"hrlk","name":["Heerlen De Kissel","Hrl De Kissel","De Kissel"]},{"code":"hrlw","name":["Heerlen Woonboulevard","Hrl Woonblvd","Heerlen W"]},{"code":"hze","name":["Heeze"]},{"code":"mid","name":["Heide"]},{"code":"hlo","name":["Heiloo"]},{"code":"hno","name":["Heino"]},{"code":"hm","name":["Helmond"]},{"code":"hmh","name":["Helmond 't Hout","'t Hout"]},{"code":"hmbv","name":["Helmond Brandevoort","Brandevoort","Brandevrt"]},{"code":"hmbh","name":["Helmond Brouwhuis","Brouwhuis"]},{"code":"lkm","name":["Hemiksem"]},{"code":"hmn","name":["Hemmen-Dodewaard","Hemmen-D"]},{"code":"hgl","name":["Hengelo"]},{"code":"hglg","name":["Hengelo Gezondheidspark","Hengelo Gezondh.","Hengelo G"]},{"code":"hglo","name":["Hengelo Oost","Hengelo O"]},{"code":"lhs","name":["Herstal"]},{"code":"hz","name":["Herzogenrath","Herzogenr"]},{"code":"hil","name":["Hillegom"]},{"code":"hvs","name":["Hilversum"]},{"code":"hvsm","name":["Hilversum Media Park","Media Park"]},{"code":"hvsp","name":["Hilversum Sportpark","Sportpark"]},{"code":"hnp","name":["Hindeloopen","Hindeloopn"]},{"code":"foe","name":["Hoboken-Polder","Hoboken-P"]},{"code":"hld","name":["Hoek van Holland Haven","Hoek v H. Haven","HvH Haven"]},{"code":"hlds","name":["Hoek van Holland Strand","Hoek v H. Strand","HvH Strand"]},{"code":"hb","name":["Hoensbroek"]},{"code":"hvl","name":["Hoevelaken"]},{"code":"hor","name":["Hollandsche Rading","Holl. Rading","Hol Rading"]},{"code":"hon","name":["Holten"]},{"code":"ehzw","name":["Holzwickede","H'wickede"]},{"code":"hfd","name":["Hoofddorp"]},{"code":"hgv","name":["Hoogeveen"]},{"code":"hgz","name":["Hoogezand-Sappemeer","Hoogezand-Sap.","Hoogezand"]},{"code":"hks","name":["Hoogkarspel","Hoogkrspl"]},{"code":"hn","name":["Hoorn"]},{"code":"hnk","name":["Hoorn Kersenboogerd","Kersenboogerd","Hoorn Kers"]},{"code":"hopf","name":["Hopfgarten"]},{"code":"hrt","name":["Horst-Sevenum","Horst-Sev"]},{"code":"htn","name":["Houten"]},{"code":"htnc","name":["Houten Castellum","Castellum","Houten C"]},{"code":"sgl","name":["Houthem-St Gerlach","Houthem-St Gerl.","Houthem-St"]},{"code":"mho","name":["Hove"]},{"code":"hdg","name":["Hurdegaryp"]},{"code":"ijt","name":["IJlst"]},{"code":"innsb","name":["Innsbruck Hbf","Innsbruck"]},{"code":"jenbac","name":["Jenbach"]},{"code":"kn","name":["Kaldenkirchen","Kaldenkir"]},{"code":"fkth","name":["Kalmthout"]},{"code":"kpn","name":["Kampen"]},{"code":"kpnz","name":["Kampen Zuid","Kampen Z"]},{"code":"bzl","name":["Kapelle-Biezelinge","Kapelle-Biezel.","Kapelle-B"]},{"code":"lkp","name":["Kapellen"]},{"code":"karlsr","name":["Karlsruhe Hbf","Karlsruhe"]},{"code":"krd","name":["Kerkrade Centrum","Kerkrade C.","Kerkrade"]},{"code":"krw","name":["Kerkrade West","Kerkrade W"]},{"code":"ktr","name":["Kesteren"]},{"code":"gkt","name":["Kijkuit"]},{"code":"kirchb","name":["Kirchberg in Tirol","Kirchberg in T.","Kirchberg"]},{"code":"kitzb","name":["Kitzbühel"]},{"code":"kbk","name":["Klarenbeek","Klarenbk"]},{"code":"kmr","name":["Klimmen-Ransdaal","Klimmen-R"]},{"code":"kko","name":["Koblenz Hbf","Koblenz"]},{"code":"konin","name":["Konin"]},{"code":"fki","name":["Kontich"]},{"code":"kbw","name":["Koog Bloemwijk","Koog Bloem"]},{"code":"kzd","name":["Koog-Zaandijk","Koog Zaand"]},{"code":"kmw","name":["Koudum-Molkwerum","Koudum-M"]},{"code":"kbd","name":["Krabbendijke","Krabbendke"]},{"code":"kma","name":["Krommenie-Assendelft","Krommenie-Ass.","Krommenie"]},{"code":"kw","name":["Kropswolde"]},{"code":"krg","name":["Kruiningen-Yerseke","Kruiningen-Y.","Kruiningen"]},{"code":"kufst","name":["Kufstein"]},{"code":"kutno","name":["Kutno"]},{"code":"koln","name":["Köln Hbf","Keulen","Koln"]},{"code":"kkd","name":["Köln-Deutz","Koln-Deutz"]},{"code":"zlw","name":["Lage Zwaluwe","Lage Zwalu"]},{"code":"land","name":["Landeck"]},{"code":"lg","name":["Landgraaf"]},{"code":"landq","name":["Landquart"]},{"code":"landry","name":["Landry"]},{"code":"leer","name":["Leer (Ostfriesland)","Leer (Ostfr.)","Leer"]},{"code":"ldm","name":["Leerdam"]},{"code":"lw","name":["Leeuwarden"]},{"code":"adh","name":["Leeuwarden Achter d Hoven","Achter de Hoven","Achter d.H"]},{"code":"lwc","name":["Leeuwarden Camminghaburen","Camminghaburen","Camminghab"]},{"code":"elgd","name":["Legden"]},{"code":"ledn","name":["Leiden Centraal","Leiden C.","Leiden C","Leiden"]},{"code":"ldl","name":["Leiden Lammenschans","Lammenschans","Leiden Lam"]},{"code":"lls","name":["Lelystad Centrum","Lelystad C.","Lelystad"]},{"code":"elet","name":["Lette (Kr Coersfeld)","Lette (Kr Coers)","Lette"]},{"code":"leuven","name":["Leuven"]},{"code":"ltv","name":["Lichtenvoorde-Groenlo","Lichtenvoorde-G.","Lichtenv-G"]},{"code":"lsl","name":["Liers"]},{"code":"lillee","name":["Lille Europe","Lille E."]},{"code":"flb","name":["Limburg Süd","Limburg S"]},{"code":"livor","name":["Livorno Centrale","Livorno C."]},{"code":"luik","name":["Liège-Guillemins","Liège-G.","Luik"]},{"code":"luikj","name":["Liège-Jonfosse","Liège-J."]},{"code":"luikp","name":["Liège-Palais","Liège-P."]},{"code":"lc","name":["Lochem"]},{"code":"flk","name":["Lokeren"]},{"code":"londs","name":["London St. Pancras","London St. Pancr","London StP"]},{"code":"lp","name":["Loppersum"]},{"code":"ltn","name":["Lunteren"]},{"code":"eldh","name":["Lüdinghausen","Lü'hausen","Ludinghausen"]},{"code":"elue","name":["Lünen Hbf","Lunen"]},{"code":"mz","name":["Maarheeze"]},{"code":"mrn","name":["Maarn"]},{"code":"mas","name":["Maarssen"]},{"code":"mss","name":["Maassluis"]},{"code":"msw","name":["Maassluis West","Maassl W"]},{"code":"mt","name":["Maastricht"]},{"code":"mtn","name":["Maastricht Noord","Maastr N"]},{"code":"mtr","name":["Maastricht Randwyck","Maastricht Randw","Maastr Rw"]},{"code":"fmz","name":["Mainz Hbf"]},{"code":"mannhe","name":["Mannheim Hbf","Mannheim"]},{"code":"mg","name":["Mantgum"]},{"code":"mrb","name":["Mariënberg"]},{"code":"marne","name":["Marne-la-Vallée-Chessy","Marne-la-Vallée","Marne-la-V"]},{"code":"mars","name":["Marseille-St-Charles","Marseille-St-C","Marseille"]},{"code":"mth","name":["Martenshoek","Martensh"]},{"code":"mech","name":["Mechelen"]},{"code":"lnk","name":["Mechelen-Nekkerspoel","Mech-Nekkerspoel","Nekkersp"]},{"code":"mes","name":["Meerssen"]},{"code":"lm","name":["Melsele"]},{"code":"mp","name":["Meppel"]},{"code":"emte","name":["Metelen Land","Metelen L."]},{"code":"mdb","name":["Middelburg"]},{"code":"bltm","name":["Milmort"]},{"code":"minden","name":["Minden (Westf.)","Minden"]},{"code":"kmb","name":["Montabaur"]},{"code":"mmlh","name":["Mook Molenhoek","Molenhoek","Mook Molen"]},{"code":"gmd","name":["Mortsel-Deurnesteenweg","M-Deurnesteenweg","M-Deurnest"]},{"code":"gmog","name":["Mortsel-Oude God","M-Oude God"]},{"code":"mout","name":["Moutiers-Salins-Brides","Moutiers-Salins","Moutiers-S"]},{"code":"mcgb","name":["Mönchengladbach Hbf","Mönchengladbach","Mönchengl","Monchengladbach"]},{"code":"munchh","name":["München Hbf","München","Munchen"]},{"code":"munst","name":["Münster (Westf.) Hbf","Münster (Westf.)","Münster","Munster (Westf) Hbf"]},{"code":"enhf","name":["Münster Zentrum Nord","Münster Nord","Münster N","Munster Zentrum Nord"]},{"code":"enbe","name":["Münster-Häger","Münster-H","Munster-Hager"]},{"code":"ndb","name":["Naarden-Bussum","Naarden-B"]},{"code":"neuss","name":["Neuss Hbf","Neuss"]},{"code":"lni","name":["Niel"]},{"code":"na","name":["Nieuw Amsterdam","Nw A'dam"]},{"code":"nvp","name":["Nieuw Vennep","Nw Vennep"]},{"code":"nwk","name":["Nieuwerkerk a/d IJssel","Nieuwerkerk","Nieuwerkrk"]},{"code":"fnu","name":["Nieuwkerken-Waas","Nieuwkerke"]},{"code":"nkk","name":["Nijkerk"]},{"code":"nm","name":["Nijmegen"]},{"code":"nmd","name":["Nijmegen Dukenburg","Dukenburg"]},{"code":"nmgo","name":["Nijmegen Goffert","Goffert"]},{"code":"nmh","name":["Nijmegen Heyendaal","Nm Heyendaal","Heyendaal"]},{"code":"nml","name":["Nijmegen Lent","Lent"]},{"code":"nvd","name":["Nijverdal"]},{"code":"ndkp","name":["Noorderkempen","N.kempen"]},{"code":"enow","name":["Nordwalde"]},{"code":"ns","name":["Nunspeet"]},{"code":"nh","name":["Nuth"]},{"code":"nurnb","name":["Nürnberg Hbf","Nürnberg"]},{"code":"obd","name":["Obdam"]},{"code":"oberh","name":["Oberhausen Hbf","Oberhausen"]},{"code":"eop","name":["Ochtrup"]},{"code":"ro","name":["Offenburg"]},{"code":"ot","name":["Oisterwijk"]},{"code":"odz","name":["Oldenzaal"]},{"code":"ost","name":["Olst"]},{"code":"omn","name":["Ommen"]},{"code":"otb","name":["Oosterbeek"]},{"code":"op","name":["Opheusden"]},{"code":"osnh","name":["Osnabrück Hbf","Osnabrück"]},{"code":"o","name":["Oss"]},{"code":"ow","name":["Oss West","Oss W"]},{"code":"odb","name":["Oudenbosch"]},{"code":"ovn","name":["Overveen"]},{"code":"paris","name":["Paris-Nord","Parijs"]},{"code":"tp","name":["Plochingen"]},{"code":"pozn","name":["Poznan Gl."]},{"code":"praha","name":["Praha hl.n.","Praha hl.n"]},{"code":"prahol","name":["Praha-Holesovice","Praha-Hol."]},{"code":"eprn","name":["Preussen"]},{"code":"pmr","name":["Purmerend"]},{"code":"pmo","name":["Purmerend Overwhere","Overwhere"]},{"code":"pmw","name":["Purmerend Weidevenne","Weidevenne"]},{"code":"pt","name":["Putten"]},{"code":"frp","name":["Puurs"]},{"code":"rat","name":["Raalte"]},{"code":"lrw","name":["Rathenow"]},{"code":"rvs","name":["Ravenstein"]},{"code":"rv","name":["Reuver"]},{"code":"rh","name":["Rheden"]},{"code":"rheine","name":["Rheine"]},{"code":"rhn","name":["Rhenen"]},{"code":"rsn","name":["Rijssen"]},{"code":"rsw","name":["Rijswijk"]},{"code":"rb","name":["Rilland-Bath","Rilland-B"]},{"code":"rm","name":["Roermond"]},{"code":"rd","name":["Roodeschool","Roodesch"]},{"code":"rsd","name":["Roosendaal"]},{"code":"ehw","name":["Rosendahl-Holtwick","Rosendahl-Holtw.","Rosend-H"]},{"code":"rs","name":["Rosmalen"]},{"code":"rta","name":["Rotterdam Alexander","Alexander"]},{"code":"rtb","name":["Rotterdam Blaak","Blaak"]},{"code":"rtd","name":["Rotterdam Centraal","Rotterdam C.","R'dam C","Rotterdam"]},{"code":"rlb","name":["Rotterdam Lombardijen","Lombardijen","Lombardije"]},{"code":"rtn","name":["Rotterdam Noord","R'dam N"]},{"code":"rtst","name":["Rotterdam Stadion","R'dam Stadion","R'dam Sta"]},{"code":"rtz","name":["Rotterdam Zuid","R'dam Z"]},{"code":"fsv","name":["Ruisbroek-Sauvegarde","Ruisbroek-Sauv.","Ruisbr-S"]},{"code":"rl","name":["Ruurlo"]},{"code":"rzepin","name":["Rzepin"]},{"code":"saalf","name":["Saalfelden"]},{"code":"sptn","name":["Santpoort Noord","Santprt N"]},{"code":"sptz","name":["Santpoort Zuid","Santprt Z"]},{"code":"spm","name":["Sappemeer Oost","Sappemr O"]},{"code":"ssh","name":["Sassenheim"]},{"code":"swd","name":["Sauwerd"]},{"code":"sgn","name":["Schagen"]},{"code":"sda","name":["Scheemda"]},{"code":"schll","name":["Schelle"]},{"code":"sdm","name":["Schiedam Centrum","Schiedam C.","Schiedam C"]},{"code":"nwl","name":["Schiedam Nieuwland","Nieuwland"]},{"code":"sog","name":["Schin op Geul","Schin op G"]},{"code":"sn","name":["Schinnen"]},{"code":"shl","name":["Schiphol Airport","Schiphol","Amsterdam Airport"]},{"code":"schwar","name":["Schwarzach-St. Veit","Schwarzach-St. V","Schwarzach"]},{"code":"kswe","name":["Schwelm"]},{"code":"esrt","name":["Schwerte (Ruhr)","Schwerte (R)","Schwerte"]},{"code":"esem","name":["Selm"]},{"code":"eseb","name":["Selm-Beifang","Selm-B"]},{"code":"ksb","name":["Siegburg/Bonn","Siegburg"]},{"code":"spv","name":["Simpelveld"]},{"code":"lsw","name":["Sinaai"]},{"code":"fwa","name":["Sint-Katelijne-Waver","Sint-Katelijne-W","Sint-Katel"]},{"code":"fsn","name":["Sint-Niklaas","Sint-Nikla"]},{"code":"std","name":["Sittard"]},{"code":"sdt","name":["Sliedrecht"]},{"code":"sdtb","name":["Sliedrecht Baanhoek","Baanhoek"]},{"code":"sk","name":["Sneek"]},{"code":"sknd","name":["Sneek Noord","Sneek N"]},{"code":"st","name":["Soest"]},{"code":"stz","name":["Soest Zuid","Soest Z"]},{"code":"sd","name":["Soestdijk"]},{"code":"sbk","name":["Spaubeek"]},{"code":"sph","name":["Spekholzerheide","Spekholzer"]},{"code":"maria","name":["St-Mariaburg","St-Mariab"]},{"code":"stjohp","name":["St. Johann im Pongau","St. Johann im P.","St.JohannP"]},{"code":"stjoh","name":["St. Johann in Tirol","St. Johann in T.","St. Johann"]},{"code":"stv","name":["Stavoren"]},{"code":"stm","name":["Stedum"]},{"code":"swk","name":["Steenwijk"]},{"code":"ebgo","name":["Steinfurt-Borghorst","Steinfurt-Borgh","Steinf-Bor"]},{"code":"ebft","name":["Steinfurt-Burgsteinfurt","Steinfurt-Burgst","Steinf-Bur"]},{"code":"egrk","name":["Steinfurt-Grottenkamp","Steinfurt-Grotte","Steinf-Gr"]},{"code":"ls","name":["Stendal"]},{"code":"ts","name":["Stuttgart Hbf","Stuttgart"]},{"code":"srn","name":["Susteren"]},{"code":"sm","name":["Swalmen"]},{"code":"wta","name":["Tantow"]},{"code":"tg","name":["Tegelen"]},{"code":"tbg","name":["Terborg"]},{"code":"tl","name":["Tiel"]},{"code":"tpsw","name":["Tiel Passewaaij","Passewaaij"]},{"code":"tb","name":["Tilburg"]},{"code":"tbr","name":["Tilburg Reeshof","Reeshof"]},{"code":"tbu","name":["Tilburg Universiteit","Tilburg Univers.","Tilburg U"]},{"code":"ftg","name":["Tongeren"]},{"code":"twl","name":["Twello"]},{"code":"utg","name":["Uitgeest"]},{"code":"uhz","name":["Uithuizen"]},{"code":"uhm","name":["Uithuizermeeden","Uithuizerm"]},{"code":"tu","name":["Ulm Hbf","Ulm"]},{"code":"eun","name":["Unna"]},{"code":"ust","name":["Usquert"]},{"code":"usti","name":["Usti nad Labem","Usti nad L"]},{"code":"ut","name":["Utrecht Centraal","Utrecht C.","Utrecht C","Utrecht"]},{"code":"utlr","name":["Utrecht Leidsche Rijn","Leidsche Rijn","Leidsche R"]},{"code":"utl","name":["Utrecht Lunetten","Lunetten"]},{"code":"utm","name":["Utrecht Maliebaan","Maliebaan","Spoorwegmuseum"]},{"code":"uto","name":["Utrecht Overvecht","Overvecht"]},{"code":"utt","name":["Utrecht Terwijde","Terwijde"]},{"code":"utzl","name":["Utrecht Zuilen","Zuilen"]},{"code":"valtgv","name":["Valence TGV","ValenceTGV"]},{"code":"vk","name":["Valkenburg"]},{"code":"vsv","name":["Varsseveld"]},{"code":"vdm","name":["Veendam"]},{"code":"vndc","name":["Veenendaal Centrum","Veenendaal C.","Veenendl C"]},{"code":"vndw","name":["Veenendaal West","Veenendl W"]},{"code":"klp","name":["Veenendaal-De Klomp","De Klomp"]},{"code":"vp","name":["Velp"]},{"code":"vl","name":["Venlo"]},{"code":"vry","name":["Venray"]},{"code":"vlb","name":["Vierlingsbeek","Vierlingsb"]},{"code":"viers","name":["Viersen"]},{"code":"fvs","name":["Visé"]},{"code":"vdg","name":["Vlaardingen Centrum","Vlaardingen C.","Vlaard C"]},{"code":"vdo","name":["Vlaardingen Oost","Vlaard O"]},{"code":"vdw","name":["Vlaardingen West","Vlaard W"]},{"code":"vtn","name":["Vleuten"]},{"code":"vs","name":["Vlissingen"]},{"code":"vss","name":["Vlissingen Souburg","Souburg"]},{"code":"vdl","name":["Voerendaal"]},{"code":"vb","name":["Voorburg"]},{"code":"vh","name":["Voorhout"]},{"code":"vst","name":["Voorschoten","Voorschtn"]},{"code":"vem","name":["Voorst-Empe","Voorst-E"]},{"code":"vd","name":["Vorden"]},{"code":"vz","name":["Vriezenveen","Vriezenvn"]},{"code":"vhp","name":["Vroomshoop"]},{"code":"vg","name":["Vught"]},{"code":"wad","name":["Waddinxveen","Waddinxv"]},{"code":"wadn","name":["Waddinxveen Noord","Waddinxveen N.","Waddinxv N"]},{"code":"wfm","name":["Warffum"]},{"code":"warszc","name":["Warszawa Centralna","Warszawa C.","Warszawa C"]},{"code":"warsaw","name":["Warszawa Wschodnia","Warszawa Wschodn","Warszawa W"]},{"code":"wr","name":["Weener"]},{"code":"wt","name":["Weert"]},{"code":"wp","name":["Weesp"]},{"code":"wl","name":["Wehl"]},{"code":"wtv","name":["Westervoort","Westervrt"]},{"code":"wz","name":["Wezep"]},{"code":"wienw","name":["Wien Westbahnhof","Wien Westbf","Wien Westb"]},{"code":"wdn","name":["Wierden"]},{"code":"wc","name":["Wijchen"]},{"code":"wh","name":["Wijhe"]},{"code":"gwd","name":["Wildert"]},{"code":"ws","name":["Winschoten"]},{"code":"wsm","name":["Winsum"]},{"code":"ww","name":["Winterswijk","Winterswk"]},{"code":"www","name":["Winterswijk West","Wintersw W"]},{"code":"wd","name":["Woerden"]},{"code":"wf","name":["Wolfheze"]},{"code":"hwob","name":["Wolfsburg"]},{"code":"wv","name":["Wolvega"]},{"code":"wk","name":["Workum"]},{"code":"wm","name":["Wormerveer"]},{"code":"kwba","name":["Wuppertal Barmen","Wuppertal B","Wup'tal B"]},{"code":"wupph","name":["Wuppertal Hbf","Wuppertal"]},{"code":"kwo","name":["Wuppertal Oberbarmen","Wuppertal O","Wup'tal O"]},{"code":"wuppv","name":["Wuppertal-Vohwinkel","Wupp-Vohwinkel","Wupp-Vohw"]},{"code":"worgl","name":["Wörgl","Worgl"]},{"code":"wurzb","name":["Würzburg Hbf","Würzburg"]},{"code":"zd","name":["Zaandam"]},{"code":"zdk","name":["Zaandam Kogerveld","Kogerveld"]},{"code":"zbm","name":["Zaltbommel"]},{"code":"zvt","name":["Zandvoort aan Zee","Zandvoort a Zee","Zandvoort"]},{"code":"zell","name":["Zell am See","Zell am S."]},{"code":"za","name":["Zetten-Andelst","Zetten-A"]},{"code":"zv","name":["Zevenaar"]},{"code":"zvb","name":["Zevenbergen","Zevenbergn"]},{"code":"ztm","name":["Zoetermeer"]},{"code":"ztmo","name":["Zoetermeer Oost","Z'meer O"]},{"code":"zb","name":["Zuidbroek"]},{"code":"zh","name":["Zuidhorn"]},{"code":"zp","name":["Zutphen"]},{"code":"zwd","name":["Zwijndrecht","Zwijndrcht"]},{"code":"lzd","name":["Zwijndrecht (Belgie)","Zwijndrecht (B)","Zwijndrech"]},{"code":"zl","name":["Zwolle"]},{"code":"zue","name":["Zürich HB","Zurich"]},{"code":"oetz","name":["Ötztal","Otztal"]}];
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
    url: "//api.rijdendetreinen.nl/v2/json/vertrektijden",
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
      $(document).trigger('cta-ready');
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
  if (typeof this.nextTrain !== 'undefined' && this.nextTrain !== null)
  {
    var text = CTA.prototype.formatTime(this.nextTrain.time) + " " + this.nextTrain.type + " " + this.nextTrain.destination.name[0] + (typeof this.nextTrain.delay !== 'undefined' && this.nextTrain.delay > 0 ? " " + this.formatDelayShort(this.nextTrain.delay) : "");
    this.infos.push({text: text, color: CTA.prototype.dark});
  }
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
  ctx.font = font_size_time + "px " + this.font;
  ctx.textAlign = "left";
  ctx.fillStyle = this.dark;
  ctx.fillText(this.formatTime(this.train.time),boundary_large,font_y_time);
  
  // Draw delay if there is delay, else draw train type
  if (typeof this.train.delay !== 'undefined' && this.train.delay > 0)
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
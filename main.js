
/* Accessing and checking for parameters!

let akiraColor = allPics[5].color
console.log(akiraColor.includes('black'))
*/


/* Searching option: Autocomplete
https://www.w3schools.com/howto/howto_js_autocomplete.asp
*/

const allPics = [
	{
		src: "./assets/256images/070.jpg",
		caption: "Album Cover for Modus Vivendi, by 070 Shake.",
		category: "music" + "art",
		type: "album",
		color: "orange" + "purple",
		theme: "cyberpunk"
	},
	{
		src: "./assets/256images/070Live.jpg",
		caption: "Photo from 070 Shake concert.",
		category: "music",
		type: "photo" + "show",
		color: "gray",
		theme: "people"
	},
	{
		src: "./assets/256images/1999.png",
		caption: "Album Cover for 1999, by Joey Bada$$.",
		category: "music" + "type" + "art",
		type: "album",
		color: "yellow" + "purple",
		theme: "skate"
	},
	{
		src: "./assets/256images/2001.jpg",
		caption: "Poster for '2001: A Space Odyssey.'",
		category: "film" + "type" + "art",
		type: "poster",
		color: "blue" + "black" + "yellow"+"white",
		theme: "space" + "existentialism"
	},
	{
		src: "./assets/256images/2002r.jpeg",
		caption: "Photo of New Balance 2002r's.",
		category: "shoes" + "clothing",
		type: "photo",
		color: "gray" + "earth",
		theme: "space"
	},
	{
		src: "./assets/256images/22amillion.png",
		caption: "Album Cover for '22, A Million,' by Bon Iver.",
		category: "music" + "art",
		type: "album",
		color: "black" + "orange",
		theme: "existentialism"
	},
	{
		src: "./assets/256images/240sx.jpeg",
		caption: "Photo of the Nissan 240SX.",
		category: "cars",
		type: "photo",
		color: "red" + "green",
		theme: "outside"
	},
	{
		src: "./assets/256images/874.jpeg",
		caption: "Photo of Dickies 874's.",
		category: "clothing",
		type: "photo",
		color: "green" + "black",
		theme: "people" + "city"
	},
	{
		src: "./assets/256images/911.jpeg",
		caption: "Photo of a 1986 Porsche 911 Turbo. ",
		category: "cars",
		type: "photo",
		color: "red",
		theme: "outside"
	},
	{
		src: "./assets/256images/akira.jpeg",
		caption: "Scene from Akira(1988).",
		category: "cars",
		type: "anime" + "animation",
		color: "orange" + "red",
		theme: "cyberpunk" + "city"
	},
	{
		src: "./assets/256images/aliens.jpeg",
		caption: "Behind the scenes of Aliens(1986).",
		category: "film",
		type: "photo" + "sfx",
		color: "black" + "earth",
		theme: "space" + "indoors"
	},
	{
		src: "./assets/256images/analog-modular-synth.jpeg",
		caption: "Photo of an analog modular synthesizer.",
		category: "music" + "tools" + "type",
		type: "photo",
		color: "gray" + "black" + "yellow",
		theme: "buttons"
	},
	{
		src: "./assets/256images/anatomyofamurder.jpeg",
		caption: "Title card from Anatomy of a Murder(1959).",
		category: "film" + "type" + "art",
		type: "animation",
		color: "red" + "black",
		theme: "people"
	},
	{
		src: "./assets/256images/andersonpaak.png",
		caption: "Screenshot of Anderson .Paak's Tiny Desk Concert.",
		category: "music",
		type: "photo"+"show",
		color: "black" + "blue" + "pink",
		theme: "people" + "indoors"
	},
	{
		src: "./assets/256images/animalcrossing.jpeg",
		caption: "Art from Animal Crossing(2006).",
		category: "games" + "art",
		type: "3d" + "digital",
		color: "green" + "purple" + "yellow",
		theme: "people" + "outside" + "vibrant"
	},
	{
		src: "./assets/256images/animalcrossing2.PNG",
		caption: "Screenshot from Animal Crossing New Horizons(2020).",
		category: "games",
		type: "3d" + "digital",
		color: "green" + "earth" + "yellow",
		theme: "people" + "outside"
	},
	{
		src: "./assets/256images/antsfromupthere.png",
		caption: "Album Cover for Ants From Up There, by Black Country New Road.",
		category: "music" + "art",
		type: "album",
		color: "earth" + "gray",
		theme: "existentialism"
	},
	{
		src: "./assets/256images/asap.jpg",
		caption: "Album Cover for 'At.Long.Last.A$AP,' by A$AP Rocky.",
		category: "music",
		type: "album" + "photo",
		color: "black" + "gray" + "red" + "pink"+"white",
		theme: "people"
	},
	{
		src: "./assets/256images/audi-s1.jpeg",
		caption: "Photo of a racing Audi Sport Quattro S1.",
		category: "cars",
		type: "photo",
		color: "yellow" + "red" +"white",
		theme: "people" + "outside"
	},
	{
		src: "./assets/256images/babydriver.jpg",
		caption: "Scene from Baby Driver(2017).",
		category: "cars"+ "film",
		type: "photo",
		color: "earth" + "red",
		theme: "people"
	},
	{
		src: "./assets/256images/bam-jonathan_mehring.jpeg",
		caption: "Photo of Bam Margera 'acid-dropping' from a truck by Jonathan Mehring.",
		category: "cars"+ "skate",
		type: "photo",
		color: "black" + "gray" +"white",
		theme: "people"	+ "outside" + "city" + "monochrome"
	},
	{
		src: "./assets/256images/batmanbeyond.jpeg",
		caption: "Scene from the show, Batman Beyond(1999).",
		category: "art",
		type: "animation",
		color: "black" + "gray" + "purple",
		theme: "people"	+ "outside" + "city" 
	},
	{
		src: "./assets/256images/beachhouse.jpeg",
		caption: "Album cover for Bloom, by Beach House.",
		category: "art" + "music",
		type: "album",
		color: "black",
		theme: "existentialism" + "monochrome"
	},
	{
		src: "./assets/256images/beepster.png",
		caption: "Screenshot of Beepster, a web-based synthesizer.",
		link: "https://zenzoa.itch.io/beepster",
		category: "web" + "tools",
		type: "album" + "digital",
		color: "gray",
		theme: "buttons"
	},
	{
		src: "./assets/256images/benz.JPG",
		caption: "Photo of a Benz 300D.",
		category: "cars",
		type: "photo",
		color: "earth" + "orange",
		theme: "outside" + "city"
	},
	{
		src: "./assets/256images/benz190E.jpeg",
		caption: "Photo of a Benz 190E.",
		category: "cars",
		type: "photo",
		color: "black",
		theme: "outside" + "city"
	},
	{
		src: "./assets/256images/betteroblivion.png",
		caption: "Album Cover for Better Oblivion Community Center, by Phoebe Bridgers and Conor Oberst.",
		category: "music" + "type",
		type: "photo"+ "album",
		color: "black" + "yellow",
		theme: "indoors"
	},
	{
		src: "./assets/256images/Black-Panther-Party_Poster.jpeg",
		caption: "Poster for the Black Panther Party.",
		category: "art"+ "type",
		type: "poster",
		color: "black" +"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/blackmarble.jpeg",
		caption: "Album Cover for A Different Arrangement, by Black Marble",
		category: "music" + "art",
		type: "album",
		color: "black" +"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/blackmirror.jpeg",
		caption: "Scene from Season 1 Episode 2 of Black Mirror",
		category: "film",
		type: "photo",
		color: "earth"+ "black"+ "blue" + "pink",
		theme: "cyberpunk" + "indoors" + "people"
	},
	{
		src: "./assets/256images/bladerunner.png",
		caption: "Scene from Blade Runner 2049(2017).",
		category: "film",
		type: "photo" + "sfx",
		color: "black"+ "blue" + "pink",
		theme: "cyberpunk" + "people" + "city" + "vibrant"
	},
	{
		src: "./assets/256images/bmo.jpeg",
		caption: "Image of BMO from Adventure Time.",
		category: "art",
		type: "animation",
		color: "green"+ "blue" + "pink" + "yellow",
		theme: "buttons" + "vibrant"
	},
	{
		src: "./assets/256images/bmw.jpeg",
		caption: "Photo of a BMW 840Li.",
		category: "cars",
		type: "photo",
		color: "gray"+ "blue",
		theme: "city"
	},
	{
		src: "./assets/256images/boniverjacket.jpeg",
		caption: "Photo of a limited edition Bon Iver i,i jacket.",
		category: "clothing"+"art",
		type: "photo",
		color: "black"+ "green"+"red",
		theme: "indoors"
	},
	{
		src: "./assets/256images/boniverlive.png",
		caption: "Photo from a live Bon Iver set at Brooklyn Steel.",
		category: "music",
		type: "photo" + "show",
		color: "black"+ "blue",
		theme: "indoors" + "people"
	},
	{
		src: "./assets/256images/boygenius.jpeg",
		caption: "Album Cover for Boygenius, by Julien Baker, Phoebe Bridgers, and Lucy Dacus.",
		category: "music",
		type: "photo" + "album",
		color: "black" +"white",
		theme: "indoors" + "people" + "monochrome"
	},
	{
		src: "./assets/256images/boygenius2.png",
		caption: "Screenshot from Boygenius' Tiny Desk Concert.",
		category: "music",
		type: "photo" + "show",
		color: "earth" + "black",
		theme: "indoors" + "people"
	},
	{
		src: "./assets/256images/Brody-Whiplash.jpeg",
		caption: "Scene from Whiplash(2014).",
		category: "music" + "film",
		type: "photo",
		color: "earth" + "black",
		theme: "indoors" + "people"
	},
	{
		src: "./assets/256images/brooklynbanks.jpeg",
		caption: "Photo of the historic skate spot, the Brooklyn Banks.",
		category: "skate",
		type: "photo",
		color: "earth" + "green",
		theme: "outside" + "people"
	},
	{
		src: "./assets/256images/bustcrew.png",
		caption: "Screenshot from a Richmond, Va. based skate filmers, Bust Crew.",
		category: "skate" + "film",
		type: "photo",
		color: "earth" + "green" +"white",
		theme: "outside" + "people" + "city"
	},
	{
		src: "./assets/256images/byrd_theater.jpeg",
		caption: "Photo of the Byrd Theater in Richmond, Va.",
		category: "skate" + "film" + "type",
		type: "photo",
		color: "earth" + "red" + "blue",
		theme: "outside" + "city"
	},
	{
		src: "./assets/256images/cadillac.JPG",
		caption: "Photo of a 70's Cadillac.",
		category: "cars",
		type: "photo",
		color: "earth" + "red" + "green",
		theme: "outside" + "city"
	},
	{
		src: "./assets/256images/carpet.png",
		caption: "Photo of graffiti art by Carpet Company.",
		category: "cars" + "skate" + "type" + "art",
		type: "photo",
		color: "earth" + "black",
		theme: "outside" + "city"
	},
	{
		src: "./assets/256images/carpet2.jpeg",
		caption: "Photo of Ayman and Osama from Carpet Company.",
		category: "tools" + "skate",
		type: "photo",
		color: "blue" + "pink" + "yellow" + "black",
		theme: "indoors" + "making" + "people"
	},
	{
		src: "./assets/256images/castleinthesky.jpg",
		caption: "Scene from Castle In The Sky(1986).",
		category: "film" + "art",
		type: "anime"+"animation",
		color: "blue" + "red" + "green" + "earth",
		theme: "indoors" + "making" + "people" + "vibrant"
	},
	{
		src: "./assets/256images/channelorange.jpg",
		caption: "Album Cover for Channel Orange, by Frank Ocean.",
		category: "music" + "type",
		type: "album",
		color: "orange",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/chorus.jpeg",
		caption: "Photo of an Arion Stereo Chorus pedal.",
		category: "music" + "type" + "tools" + "tech",
		type: "photo",
		color: "black"+"blue"+"earth",
		theme: "indoors" + "buttons"
	},
	{
		src: "./assets/256images/chunkydunky.jpeg",
		caption: "Image of the Nike SB 'Chunky Dunky's.'",
		category: "clothing" + "skate" + "shoes",
		type: "",
		color: "black"+"blue"+"green"+"yellow",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/cinemascope.jpeg",
		caption: "Image of the Cinemascope logo.",
		category: "film" + "type",
		type: "animation",
		color: "red"+"blue",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/cons.jpeg",
		caption: "Image of Converse Cons CTAS Hi Pro.",
		category: "skate" + "clothing" + "shoes",
		type: "",
		color: "black",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/contra.jpg",
		caption: "Album Cover for Contra, by Vampire Weekend.",
		category: "music" + "type",
		type: "album" + "photo",
		color: "black" + "purple" + "earth" ,
		theme: "indoors" + "people"
	},
	{
		src: "./assets/256images/coolors.png",
		caption: "Web-based color picker called Coolors.",
		link: "https://coolors.co/",
		category: "web"+"tools",
		type: "digital",
		color: "green" + "blue",
		theme: "buttons" + "vibrant"
	},
	{
		src: "./assets/256images/corita-kent.jpeg",
		caption: "A screen-printed piece by Corita Kent.",
		category: "art"+"type",
		type: "poster",
		color: "yellow" + "orange" + "pink" + "green" + "blue",
		theme: "buttons" + "vibrant"
	},
	{
		src: "./assets/256images/cowboybebop-intro.png",
		caption: "Scene from the intro to the show, Cowboy Bebop.",
		category: "art"+"type",
		type: "animation"+"anime",
		color: "red" + "black",
		theme: "people"
	},
	{
		src: "./assets/256images/cowboybebop.jpg",
		caption: "Scene from the show, Cowboy Bebop.",
		category: "art",
		type: "animation"+"anime",
		color: "earth" + "blue",
		theme: "people" + "outside"
	},
	{
		src: "./assets/256images/crt.jpeg",
		caption: "Image of a CRT TV.",
		category: "tech",
		type: "photo",
		color: "pink" + "blue" + "green" + "black",
		theme: "buttons" 
	},
	{
		src: "./assets/256images/datsun.jpeg",
		caption: "Photo of a Datsun Fairlady Z.",
		category: "cars",
		type: "photo",
		color: "gray" + "earth",
		theme: "outside" 
	},
	{
		src: "./assets/256images/deathcab.png",
		caption: "Album Cover for Transatlanticism, by Death Cab for Cutie.",
		category: "music" + "art",
		type: "album",
		color: "earth" + "black" + "red",
		theme: "" 
	},
	{
		src: "./assets/256images/deathwish.jpeg",
		caption: "Photo of the skate deck assembly process.",
		category: "skate" + "tools",
		type: "photo",
		color: "earth" + "purple",
		theme: "making" + "indoors" 
	},
	{
		src: "./assets/256images/dodgersdunks.jpeg",
		caption: "Photo of the Nike SB LA Dodgers Dunks.",
		category: "skate" + "shoes" + "clothing",
		type: "photo",
		color: "earth" + "blue",
		theme: "" 
	},
	{
		src: "./assets/256images/doomdunk.jpeg",
		caption: "Photo of the Nike SB MF DOOM Dunks.",
		category: "skate" + "shoes" + "clothing",
		type: "photo",
		color: "black" + "red",
		theme: "" 
	},
	{
		src: "./assets/256images/Dragon-Ball_Logo.jpeg",
		caption: "Image of a logo for Dragon Ball.",
		category: "type",
		type: "anime"+"animation", 
		color: "blue" + "red" + "yellow",
		theme: "vibrant" 
	},
	{
		src: "./assets/256images/dragon-spacesuits.jpeg",
		caption: "Image of the NASA x SpaceX Astronauts in Dragon Spacesuits.",
		category: "clothing" + "tech",
		type: "photo", 
		color: "blue" + "gray" + "earth"+"white",
		theme: "people" + "outside" + "space"
	},
	{
		src: "./assets/256images/dragonballcovers.jpeg",
		caption: "Image of a compilation of Dragon Ball manga covers.",
		category: "art" + "type",
		type: "anime", 
		color: "blue" + "green" + "yellow" + "orange",
		theme: "people" + "vibrant"
	},
	{
		src: "./assets/256images/drakejones.jpeg",
		caption: "Photo of Pro Skater, Drake Jones.",
		category: "skate",
		type: "photo", 
		color: "blue" + "yellow"+"white",
		theme: "people" + "vibrant" + "outside"
	},
	{
		src: "./assets/256images/dreamcast.jpg",
		caption: "Image of a Sega Dreamcast controller.",
		category: "tech" + "games",
		type: "photo", 
		color: "blue" + "yellow" + "red" + "blue"+"white",
		theme: "vibrant" + "buttons"
	},
	{
		src: "./assets/256images/dreamcastad.jpeg",
		caption: "A Sega Dreamcast ad.",
		category: "tech" + "type" + "games",
		type: "photo" + "poster", 
		color: "blue" + "orange",
		theme: "vibrant" + "buttons"
	},

	{
		src: "./assets/256images/drsupreme.jpeg",
		caption: "Image of Supreme X Doc Martens 1461 Shoes.",
		category: "clothing" + "shoes",
		type: "photo", 
		color: "red" + "black" +"white",
		theme: ""
	},
	{
		src: "./assets/256images/erictimothycarlson.jpeg",
		caption: "Concepts by Eric Timothy Carlson for Bon Iver's '22, A Million.'",
		category: "music" + "art",
		type: "", 
		color: "yellow" + "black" +"white",
		theme: "making"
	},
	{
		src: "./assets/256images/etc-video-synth.jpeg",
		caption: "Image of an ETC Video Synthesizer chain.'",
		category: "music" + "art" + "tools" + "tech",
		type: "photo", 
		color: "red" + "green" + "gray" + "yellow" + "black",
		theme: "making" + "people" + "buttons" 
	},
	{
		src: "./assets/256images/f_zero_gx5.jpeg",
		caption: "Screenshot from F Zero GX(2003).",
		category: "games" + "type",
		type: "3d" + "digital", 
		color: "blue" + "earth" + "yellow",
		theme: "cyberpunk"
	},
	{
		src: "./assets/256images/fajacket.jpeg",
		caption: "Image of the Embroidered Mechanics Jacket by Fucking Awesome.",
		category: "skate" + "clothing",
		type: "", 
		color: "black",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/fajam.jpg",
		caption: "Photo of a skater at the FA Junk Jam.",
		category: "skate",
		type: "photo", 
		color: "black" + "green" + "orange",
		theme: "city"+"people"+"outside"
	},
	{
		src: "./assets/256images/falcon.jpeg",
		caption: "Photo from the set of Star Wars in the Millenium Falcon.",
		category: "film",
		type: "photo" + "sfx", 
		color: "black" + "blue" + "earth" + "gray",
		theme: "space"+"people"+"indoors"+ "making"+ "buttons"
	},
	{
		src: "./assets/256images/fantasticmrfox.jpeg",
		caption: "Scene from Fantastic Mr.Fox(2009)",
		category: "film",
		type: "photo" + "animation" + "sfx", 
		color: "orange" + "earth",
		theme: "outside" + "vibrant"
	},
	{
		src: "./assets/256images/ff7.jpg",
		caption: "Screenshot from Final Fantasy 7(1997).",
		category: "games",
		type: "3d" + "digital", 
		color: "purple" + "earth" +"red"+ "yellow",
		theme: "cyberpunk" + "city" +"outside" + "people"
	},
	{
		src: "./assets/256images/ffx.jpeg",
		caption: "Cover from Final Fantasy X(2001).",
		category: "games" + "type" + "art",
		type: "3d" + "digital", 
		color: "blue" +"red"+ "yellow",
		theme: "vibrant" + "outside" + "people"
	},
	{
		src: "./assets/256images/first-bug.jpeg",
		caption: "Image of the first computer 'bug' from a Harvard computer in 1947.",
		category: "tech" + "type",
		type: "photo", 
		color: "black" +"earth" +"white",
		theme: "making"
	},
	{
		src: "./assets/256images/fossil.jpeg",
		caption: "Image of the Titanosaur from the Museum of Natural History.",
		category: "",
		type: "photo", 
		color: "black" +"earth" + "yellow",
		theme: "indoors"
	},
	{
		src: "./assets/256images/frank.jpeg",
		caption: "Photo of Frank Ocean from the 2019 Met Gala.",
		category: "music"+"clothing",
		type: "photo", 
		color: "black" +"green" + "pink",
		theme: "people"
	},
	{
		src: "./assets/256images/frog.jpeg",
		caption: "Photo of the Frog guitar pedal by Jordan.wav",
		category: "music"+"tools"+"tech",
		type: "photo", 
		color: "purple" +"green" + "yellow",
		theme: "buttons"
	},
	{
		src: "./assets/256images/fuckingawesome.jpg",
		caption: "Photo of the a Fucking Awesome t-shirt",
		category: "skate"+"clothing",
		type: "photo", 
		color: "black",
		theme: "monochrome" + "outside"
	},
	{
		src: "./assets/256images/gameboy.png",
		caption: "Image of a Gameboy Advance SP.",
		category: "games"+"tech",
		type: "photo", 
		color: "black" + "gray" + "blue",
		theme: "buttons"
	},
	{
		src: "./assets/256images/gameboyhat.jpeg",
		caption: "Image of a Gameboy Advance SP promo hat.",
		category: "games"+"clothing"+"type",
		type: "photo", 
		color: "black" + "gray",
		theme: ""
	},
	{
		src: "./assets/256images/GameCube_controller.png",
		caption: "Image of a GameCube controller.",
		category: "games"+"tools"+"type",
		type: "photo", 
		color: "purple" + "yellow"+ "red"+ "green"+ "gray",
		theme: "vibrant" + "buttons"
	},
	{
		src: "./assets/256images/games.jpeg",
		caption: "Image of a GameCube controller.",
		category: "games"+"tools"+"tech",
		type: "photo", 
		color: "purple" + "yellow"+ "red"+ "gray",
		theme:  "buttons"+"making"
	},
	{
		src: "./assets/256images/ghibli.JPG",
		caption: "Scene from Castle In The Sky(1986).",
		category: "art"+"film",
		type: "animation"+"anime", 
		color: "orange"+"earth"+"blue",
		theme:  "outside"
	},
	{
		src: "./assets/256images/ghostintheshell.jpg",
		caption: "Scene from Ghost in the Shell(1995).",
		category: "art"+"film",
		type: "animation"+"anime", 
		color: "gray"+"green"+"blue",
		theme: "cyberpunk" + "city" + "people"
	},
	{
		src: "./assets/256images/grandwagoneer.JPG",
		caption: "Photo of a Jeep Grand Wagoneer.",
		category: "cars",
		type: "photo", 
		color: "earth"+"yellow"+"red",
		theme: "outside" + "city"
	},
	{
		src: "./assets/256images/harold_hunter-twin_towers.jpeg",
		caption: "Photo of a skater in NYC by Harold Hunter.",
		category: "cars"+"skate",
		type: "photo", 
		color: "green"+"yellow"+"gray",
		theme: "outside" + "city" + "people"
	},
	{
		src: "./assets/256images/hub-tones.jpeg",
		caption: "Album Cover for Hub-Tones by Freddie Hubbard.",
		category: "music" + "type" + "art",
		type: "photo" + "album", 
		color: "red"+"earth"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/ibmplex.png",
		caption: "Image of a composition made from letterforms from IBM Plex.",
		category: "type" + "art",
		type: "digital", 
		color: "blue",
		theme: ""
	},
	{
		src: "./assets/256images/idles.jpeg",
		caption: "Photo of the band Idles and Kenny Beats recording their album, Crawler.",
		category: "music" + "tools",
		type: "photo", 
		color: "earth"+"black"+"orange",
		theme: "making"+"indoors"+"people"
	},
	{
		src: "./assets/256images/illucia.png",
		caption: "Photo of the Illucia, a DIY interface by Chris Novello.",
		category: "music" + "tools"+ "games"+"tech",
		type: "photo", 
		color: "earth"+"blue"+"yellow"+"orange",
		theme: "making"+"buttons"+"people"+"making"
	},
	{
		src: "./assets/256images/incredibles-credits.jpeg",
		caption: "Images of the end credits from Incredibles(2004).",
		category: "film"+"art"+"type",
		type: "animation", 
		color: "red"+"pink"+"yellow"+"orange"+"blue",
		theme: "people"+"vibrant"
	},
	{
		src: "./assets/256images/initials.jpeg",
		caption: "Photo of my initials in a sidewalk in NYC.",
		category: "type",
		type: "photo", 
		color: "gray"+"yellow",
		theme: "city" + "making"
	},
	{
		src: "./assets/256images/iPod-2.jpeg",
		caption: "Image of an iPod Classic.",
		category: "type"+"tech",
		type: "", 
		color: "gray"+"black"+"blue"+"pink",
		theme: ""
	},
	{
		src: "./assets/256images/iss.jpeg",
		caption: "Photo of the interior of the International Space Station",
		category: "type"+"tech",
		type: "photo", 
		color: "gray"+"red"+"blue",
		theme: "space"+"buttons"
	},
	{
		src: "./assets/256images/itstime.jpeg",
		caption: "Album Cover for It's Time by Jackie McLean.",
		category: "type"+"music" + "art",
		type: "album", 
		color: "earth"+"red"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/jamie.jpeg",
		caption: "Image of a Jamie Hewlett artbook.",
		category: "type"+"music" + "art",
		type: "animation", 
		color: "green"+"red"+"black" + "yellow"+"pink",
		theme: ""
	},
	{
		src: "./assets/256images/jazzmaster.jpeg",
		caption: "Image of a Fender Jazzmaster.",
		category: "tools"+"music",
		type: "photo", 
		color: "earth"+"red"+"black"+"orange",
		theme: "indoors"
	},
	{
		src: "./assets/256images/jcw-mini.jpeg",
		caption: "Image of an 80's John Cooper Works Mini Cooper.",
		category: "cars",
		type: "photo", 
		color: "earth"+"blue",
		theme: "outside"
	},
	{
		src: "./assets/256images/JetSet.JPG",
		caption: "Image of art from the game Jet Grind Radio(2000).",
		category: "games"+"art",
		type: "anime", 
		color: "green"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/johnwick.jpeg",
		caption: "Scene of Keanu Reeves from the John Wick 4(2023) trailer.",
		category: "film",
		type: "photo", 
		color: "orange"+"red"+"black",
		theme: "indoors"+"people"
	},
	{
		src: "./assets/256images/jurassicpark.jpeg",
		caption: "Scene of T-Rex from Jurassic Park(1993).",
		category: "film"+"cars",
		type: "photo"+"sfx", 
		color: "green"+"gray"+"earth",
		theme: "outside"+"making"
	},
	{
		src: "./assets/256images/kaytranada.jpeg",
		caption: "Album Cover for 99.9%, by Kaytranada.",
		category: "music"+"art",
		type: "album", 
		color: "green"+"purple"+"blue"+"red"+"yellow",
		theme: "people"
	},
	{
		src: "./assets/256images/kaytranadaboiler.jpeg",
		caption: "Image from Kaytranada's Boiler Room live set.",
		category: "music",
		type: "show", 
		color: "earth"+"blue",
		theme: "people"+"indoors"
	},
	{
		src: "./assets/256images/kcdc.jpeg",
		caption: "Photo of the KCDC Nike SB Dunks.",
		category: "skate"+"shoes"+"clothing",
		type: "photo", 
		color: "earth"+"pink"+"orange",
		theme: "people"+"indoors"
	},
	{
		src: "./assets/256images/keicar.jpg",
		caption: "Photo of a Subaru Kei Truck.",
		category: "cars",
		type: "photo", 
		color: "green"+"black"+"blue"+"white",
		theme: "outside"
	},
	{
		src: "./assets/256images/ken-sugimori.jpeg",
		caption: "Image of Ken Sugimori's orignal Pokemon art.",
		category: "games"+"art",
		type: "animation", 
		color: "green"+"orange"+"blue",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/kenny-thundercat.jpeg",
		caption: "Photo of Kenny Beats and Thundercat.",
		category: "music"+"type",
		type: "photo", 
		color: "green"+"black"+"blue"+"red"+"purple"+"yellow",
		theme: "making"+"people"
	},
	{
		src: "./assets/256images/key-switches.jpeg",
		caption: "Photo of Kailh Box key switches.",
		category: "tech",
		type: "photo", 
		color: "orange"+"black",
		theme: "buttons"
	},
	{
		src: "./assets/256images/kh1.jpg",
		caption: "Cover art for Kingdom Hearts(2002).",
		category: "games"+"art",
		type: "anime", 
		color: "red"+"purple",
		theme: "space"+"people"
	},
	{
		src: "./assets/256images/kinggeedorah.jpg",
		caption: "Album Cover for Take Me To Your Leader by King Geedorah.",
		category: "music"+"art",
		type: "album", 
		color: "red",
		theme: ""
	},
	{
		src: "./assets/256images/kojima.jpeg",
		caption: "Signed PS3 by Hideo Kojima.",
		category: "tech"+"games",
		type: "photo", 
		color: "earth"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/La-La-Land.jpeg",
		caption: "Scene from La La Land(2016).",
		category: "film",
		type: "photo", 
		color: "yellow"+"purple"+"black",
		theme: "people"+"outside"
	},
	{
		src: "./assets/256images/ladybird2.jpg",
		caption: "Scene from Ladybird(2017).",
		category: "film",
		type: "photo", 
		color: "pink"+"green"+"earth",
		theme: "people"+"outside"
	},
	{
		src: "./assets/256images/lavender2.PNG",
		caption: "3D Models of elements from a town in Pokemon.",
		category: "games",
		type: "3d"+"digital", 
		color: "blue"+"green"+"red",
		theme: "making"+"vibrant"
	},
	{
		src: "./assets/256images/LES.jpeg",
		caption: "Photo of LES Coleman Skatepark in NYC.",
		category: "skate",
		type: "photo", 
		color: "blue"+"earth",
		theme: "city" + "outside"
	},
	{
		src: "./assets/256images/lespaul.jpeg",
		caption: "Photo of a Gibson Les Paul.",
		category: "music"+"tools",
		type: "photo", 
		color: "red"+"orange"+"earth",
		theme: "indoors"+"buttons"
	},
	{
		src: "./assets/256images/lobsters.jpeg",
		caption: "Image of the orange Nike SB 'Lobster' Dunks.",
		category: "shoes"+"clothing"+"skate",
		type: "photo", 
		color: "purple"+"orange",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/lucydacus.png",
		caption: "Album Cover for Historian by Lucy Dacus.",
		category: "music"+"art",
		type: "album", 
		color: "red"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/m3.jpeg",
		caption: "Photo of a BMW E30 M3.",
		category: "cars",
		type: "photo", 
		color: "blue"+"gray",
		theme: "people"+"outside"
	},
	{
		src: "./assets/256images/matriarch.jpeg",
		caption: "Photo of a Moog Matriarch analog synthesizer.",
		category: "music"+"tools",
		type: "photo", 
		color: "blue"+"black"+"green"+"purple"+"yellow",
		theme: "buttons"+"indoors"+"making"
	},
	{
		src: "./assets/256images/mavi.jpeg",
		caption: "Album Cover for Let the Sun Talk by MAVI.",
		category: "music"+"art",
		type: "album", 
		color: "blue"+"earth"+"orange"+"red"+"blue"+"yellow",
		theme: "existentialism"+"people"
	},
	{
		src: "./assets/256images/maxresdefault.jpeg",
		caption: "Logo for World Industries.",
		category: "skate"+"type",
		type: "", 
		color: "red"+"orange"+"yellow",
		theme: ""
	},
	{
		src: "./assets/256images/mclaren-m6.jpeg",
		caption: "Photo of a McLaren M6.",
		category: "cars",
		type: "photo", 
		color: "red"+"gray",
		theme: "city"+"people"
	},
	{
		src: "./assets/256images/merriweather.jpg",
		caption: "Album Cover for Merriweather Post Pavilion by Animal Collective.",
		category: "music"+"art",
		type: "album", 
		color: "purple"+"green"+"blue",
		theme: "vibrant"+"existentialism"
	},
	{
		src: "./assets/256images/MFDOOM.png",
		caption: "Album Cover for Operation Doomsday by MF DOOM.",
		category: "music"+"art",
		type: "album", 
		color: "purple"+"green"+"gray"+"red",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/mgs2.jpeg",
		caption: "Opening for Metal Gear Solid 2.",
		category: "games",
		type: "3d"+"digital", 
		color: "gray"+"red",
		theme: "existentialism"+"people"
	},
	{
		src: "./assets/256images/midskool.jpeg",
		caption: "Image of Vans Mid Skools.",
		category: "shoes"+"skate"+"clothing",
		type: "photo", 
		color: "black",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/midsommar.jpg",
		caption: "Scene from Midsommar(2019).",
		category: "film",
		type: "photo", 
		color: "pink"+"yellow"+"green"+"red"+"pink"+"blue",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/monk.jpeg",
		caption: "Album Cover for Monk by Thelonious Monk.",
		category: "music"+"art",
		type: "album", 
		color: "black"+"blue"+"earth",
		theme: ""
	},
	{
		src: "./assets/256images/monument_ave.jpeg",
		caption: "Photo of Monument Ave. in Richmond, Va.",
		category: "art",
		type: "photo", 
		color: "red"+"yellow"+"earth"+"green",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/moon.jpeg",
		caption: "Photo of the moon",
		category: "",
		type: "photo", 
		color: "blue"+"earth",
		theme: "space"
	},
	{
		src: "./assets/256images/mr2.jpeg",
		caption: "Photo of a Toyota MR2.",
		category: "cars",
		type: "photo", 
		color: "red"+"yellow",
		theme: "outside"
	},
	{
		src: "./assets/256images/myyard.jpeg",
		caption: "Photo of my back yard in Virginia.",
		category: "",
		type: "photo", 
		color: "green"+"earth"+"orange",
		theme: ""
	},
	{
		src: "./assets/256images/nasa.jpeg",
		caption: "Image of the NASA x SpaceX Dragon Helmet.",
		category: "tech",
		type: "photo", 
		color: "white"+"blue"+"red",
		theme: "space"+"people"
	},
	{
		src: "./assets/256images/nasa2.jpeg",
		caption: "Image of the NASA design style guide.",
		category: "tech",
		type: "photo", 
		color: "white"+"red",
		theme: "space"
	},
	{
		src: "./assets/256images/Nausica.jpeg",
		caption: "Scene from Nausica and the Valley of the Wind(1984).",
		category: "film",
		type: "anime"+"animation", 
		color: "green"+"orange",
		theme: "people"
	},
	{
		src: "./assets/256images/neongenesis.jpeg",
		caption: "Scene from the show, Neon Genesis Evangelion.",
		category: "film",
		type: "anime"+"animation", 
		color: "green"+"purple"+"gray",
		theme: "people"
	},
	{
		src: "./assets/256images/newyorkdolls.jpg",
		caption: "Album Cover for the self titled album by the New York Dolls.",
		category: "music"+"type",
		type: "album", 
		color: "pink"+"black"+"gray",
		theme: "monochrome"+"people"
	},
	{
		src: "./assets/256images/nicolehe.png",
		caption: "Website for the designer Nicole He.",
		link:"https://nicole.pizza/",
		category: "web"+"type",
		type: "digital", 
		color: "red"+"blue"+"earth",
		theme: "making"
	},
	{
		src: "./assets/256images/nikeacg.jpeg",
		caption: "Image of a Nike ACG Gore-Tex Jacket.",
		category: "clothing",
		type: "photo", 
		color: "black",
		theme: "people"
	},
	{
		src: "./assets/256images/nikecarpetsb.jpeg",
		caption: "Image of the Carpet Company x Nike SB hoodie.",
		category: "clothing"+"skate",
		type: "photo", 
		color: "black",
		theme: ""
	},
	{
		src: "./assets/256images/nikesb-stripedbox.jpeg",
		caption: "Image of the Carpet Company x Nike SB hoodie.",
		category: "clothing"+"skate",
		type: "photo", 
		color: "green"+"blue"+"red"+"yellow"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/nysnow.jpeg",
		caption: "Photo of snow in NYC.",
		category: "",
		type: "photo", 
		color: "gray"+"white"+"black",
		theme: "outside"+"city"
	},

	{
		src: "./assets/256images/nyvsny.png",
		caption: "Image of the 'NY vs. NY' Nike SB Dunks.",
		category: "clothing"+"skate"+"shoes",
		type: "", 
		color: "green"+"orange"+"white",
		theme: ""
	},
	{
		src: "./assets/256images/oddfuture.jpeg",
		caption: "Image of the Odd Future group.",
		category: "clothing"+"skate"+"music",
		type: "photo", 
		color: "green"+"black"+"white",
		theme: "people"
	},
	{
		src: "./assets/256images/ohno.jpeg",
		caption: "Image of Oh No Type Co's offerings.",
		category: "type"+"art",
		type: "digital", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/onepiece.jpeg",
		caption: "Image of a One Piece manga page.",
		category: "type"+"art",
		type: "anime", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/onepiece2.png",
		caption: "Image of a One Piece manga page.",
		category: "type"+"art",
		type: "anime", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/OP-1.png",
		caption: "Image of the Teenage Engineering OP-1.",
		category: "tech"+"music"+"art"+"tools",
		type: "", 
		color: "black"+"white"+"orange"+"blue",
		theme: "buttons"
	},
	{
		src: "./assets/256images/oscilloscope.jpeg",
		caption: "Image of an oscilloscope.",
		category: "tech"+"music"+"art"+"tools",
		type: "3D"+"digital", 
		color: "black"+"yellow"+"gray",
		theme: "buttons"+"making"
	},
	{
		src: "./assets/256images/outkast.jpeg",
		caption: "Album Cover for ATLiens by Outkast.",
		category: "music"+"type"+"art",
		type: "", 
		color: "green"+"blue"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/Parasite-001.jpeg",
		caption: "Title card from Parasite(2019)",
		category: "film"+"type",
		type: "photo", 
		color: "green"+"gray"+"earth",
		theme: "indoors"
	},
	{
		src: "./assets/256images/paula-scher.jpeg",
		caption: "Poster for the Public Theater by Paula Scher.",
		category: "film"+"art",
		type: "photo"+"poster", 
		color: "yellow"+"black"+"red",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/pedals.jpeg",
		caption: "Image of a populated pedal board.",
		category: "music"+"tools",
		type: "", 
		color: "red"+"orange"+"green"+"blue"+"gray",
		theme: ""
	},
	{
		src: "./assets/256images/persona5.jpeg",
		caption: "Screenshot of combat from Persona 5.",
		category: "games",
		type: "anime", 
		color: "red"+"green",
		theme: "indoors"+"people"
	},
	{
		src: "./assets/256images/persona5menu.png",
		caption: "Screenshot of menu from Persona 5.",
		category: "games",
		type: "anime", 
		color: "white"+"black"+"red"+"blue",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/pinkdeck.jpeg",
		caption: "Photo of my pink Quasi skatedeck.",
		category: "skate"+"cars",
		type: "photo", 
		color: "pink"+"gray"+"black",
		theme: "people"+"city"
	},
	{
		src: "./assets/256images/pinto.png",
		caption: "Photo of my pink Quasi skatedeck.",
		category: "cars",
		type: "photo", 
		color: "red"+"gray"+"earth",
		theme: "city"
	},
	{
		src: "./assets/256images/plan9.jpeg",
		caption: "Image of the Plan 9 Records logo.",
		category: "music"+"type",
		type: "", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/plantst.jpeg",
		caption: "Image of the inside of an NYC Plant Store.",
		category:"",
		type: "photo", 
		color: "green"+"gray"+"red",
		theme: "city"+"indoors"
	},
	{
		src: "./assets/256images/plantst2.JPG",
		caption: "Image of the exterior of an NYC Plant Store.",
		category:"",
		type: "photo", 
		color: "green"+"gray"+"earth"+"white",
		theme: "city"
	},
	{
		src: "./assets/256images/polegreen.png",
		caption: "Photo of Pole Green Skatepark in Virginia.",
		category:"skate",
		type: "photo", 
		color: "green"+"red"+"earth"+"white",
		theme: "outside"
	},
	{
		src: "./assets/256images/policestory.jpg",
		caption: "Scene of stunt car chase from Police Story(1985).",
		category:"film",
		type: "photo"+"sfx", 
		color: "green"+"gray"+"earth",
		theme: "outside"+"making"
	},
	{
		src: "./assets/256images/porschejacket.jpeg",
		caption: "Image of a vintage Porsche Jacket.",
		category:"clothing",
		type: "photo", 
		color: "red"+"black",
		theme: "indoors"
	},
	{
		src: "./assets/256images/postalservice2.jpeg",
		caption: "Image of Press Release for The Postal Service.",
		category:"music",
		type: "photo", 
		color: "green"+"earth",
		theme: ""
	},
	{
		src: "./assets/256images/powellperalta.jpeg",
		caption: "Advertisement for Ray Barbee's Powell Peralta signature board.",
		category:"skate"+"type",
		type: "photo"+"poster", 
		color: "orange"+"gray",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/powellperalta2.jpeg",
		caption: "Advertisement for Powell Peralta.",
		category:"skate"+"type",
		type: "photo"+"poster", 
		color: "pink"+"black"+"red",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/prada.jpeg",
		caption: "Image of a Prada Jacket with Hood.",
		category:"clothing",
		type: "photo", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/precision.jpeg",
		caption: "Image of a Fender Precision Bass.",
		category:"music"+"tools",
		type: "photo", 
		color: "black"+"orange"+"earth",
		theme: "outside"
	},
	{
		src: "./assets/256images/Princess_Mononoke_019.jpeg",
		caption: "Scene from Princess Mononoke(1997).",
		category:"film",
		type: "anime"+"animation", 
		color: "green"+"red"+"white"+"earth",
		theme: "outside"+"people"
	},
	{
		src: "./assets/256images/PrincessMononoke.jpg",
		caption: "Poster advertisement from Princess Mononoke(1997).",
		category:"film"+"type",
		type: "anime"+"animation"+"poster", 
		color: "green"+"blue"+"orange"+"earth"+"white",
		theme: "outside"+"people"
	},
	{
		src: "./assets/256images/ps1.jpeg",
		caption: "Image of the Playstation 1 Logo Startup.",
		category:"games"+"type",
		type: "animation"+"digital", 
		color: "green"+"blue"+"red"+"yellow"+"white"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/ps2.jpeg",
		caption: "Image of the Playstation 2 Startup.",
		category:"games"+"type",
		type: "animation"+"digital", 
		color: "green"+"blue"+"gray"+"white"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/ps3.jpeg",
		caption: "Image of the Playstation 3 UI.",
		category:"games"+"type",
		type: "animation"+"digital", 
		color: "green"+"blue"+"gray"+"white"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/psycho-saulbass.png",
		caption: "Title card animation from Psycho(1960) by Saul Bass.",
		category:"film"+"type",
		type: "animation", 
		color: "gray"+"white"+"black",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/punisher.jpeg",
		caption: "Album Cover for Punisher, by Phoebe Bridgers.",
		category:"music",
		type: "photo"+"album", 
		color: "blue"+"red"+"black",
		theme: "outside"+"people"
	},
	{
		src: "./assets/256images/purecomedy.jpeg",
		caption: "Album Cover for Pure Comedy, by Father John Misty.",
		category:"music"+"type"+"art",
		type: "album", 
		color: "blue"+"gray"+"black",
		theme: "existentialism"
	},
	{
		src: "./assets/256images/quasi.png",
		caption: "Screenshot from a Quasi skate film.",
		category:"film"+"skate",
		type: "photo", 
		color: "earth"+"gray"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/r34.jpeg",
		caption: "Photo of a Nissan R34 Skyline.",
		category:"cars",
		type: "photo", 
		color: "earth"+"gray"+"red"+"black",
		theme: "outside"
	},
	{
		src: "./assets/256images/radiohead.jpg",
		caption: "Album Cover for OK Computer, by Radiohead.",
		category:"album",
		type: "photo", 
		color: "blue"+"gray"+"white",
		theme: ""
	},
	{
		src: "./assets/256images/Raise-the-Red-Lantern-098.jpeg",
		caption: "Scene from Raise the Red Lantern(1991).",
		category:"film",
		type: "photo", 
		color: "red"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/rangerover.JPG",
		caption: "Photo of a Range Rover.",
		category:"cars",
		type: "photo", 
		color: "red"+"black"+"earth"+"green"+"gray",
		theme: ""
	},
	{
		src: "./assets/256images/ratatouille.jpeg",
		caption: "Scene from Ratatouille(2007).",
		category:"film",
		type: "animation"+"3d", 
		color: "red"+"pink"+"earth"+"orange"+"gray",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/redveil-niagara.jpeg",
		caption: "Scene from Ratatouille(2007).",
		category:"music",
		type: "album"+"photo", 
		color: "yellow"+"blue"+"gray",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/Regular-Show-header-2.jpeg",
		caption: "Scene from the show, Regular Show.",
		category:"film",
		type: "animation", 
		color: "green"+"blue"+"earth",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/regularshowintro.png",
		caption: "Intro from the show, Regular Show.",
		category:"film",
		type: "animation", 
		color: "purple"+"black"+"white",
		theme: "space"
	},
	{
		src: "./assets/256images/rhodes.jpeg",
		caption: "Image of a Fender Rhodes Electronic Keyboard.",
		category:"music"+"tools",
		type: "", 
		color: "earth"+"black"+"white",
		theme: "making"
	},
	{
		src: "./assets/256images/Rodney-Mullen.jpeg",
		caption: "Photo of pro skater, Rodney Mullen.",
		category:"skate",
		type: "photo", 
		color: "earth"+"black"+"white",
		theme: "people"
	},
	{
		src: "./assets/256images/roliblocks.jpeg",
		caption: "Image of the Roli Blocks synthesizer.",
		category:"music",
		type: "photo", 
		color: "earth"+"black"+"pink"+"gray",
		theme: "people"+"making"
	},
	{
		src: "./assets/256images/ruronikenshin.jpeg",
		caption: "Image from the Ruroni Kenshin manga.",
		category:"art",
		type: "anime", 
		color: "white"+"black",
		theme: "people"+"monochrome"
	},
	{
		src: "./assets/256images/sbjordan.jpeg",
		caption: "Photo of the Nike SB Koston Jordan 1's.",
		category:"shoes"+"clothing"+"skate",
		type: "photo", 
		color: "white"+"blue"+"earth",
		theme: "people"
	},
	{
		src: "./assets/256images/scififantasy.png",
		caption: "Photo of a Sci-Fi Fantasy hat.",
		category:"clothing"+"skate",
		type: "photo", 
		color: "white"+"green"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/screenprint.jpeg",
		caption: "Photo of the Screenprinting process.",
		category:"art"+"tools",
		type: "photo", 
		color: "white"+"blue"+"earth",
		theme: "people"+"making"
	},
	{
		src: "./assets/256images/sf.jpeg",
		caption: "Photo of buildings in San Francisco.",
		category:"art"+"tools",
		type: "photo", 
		color: "white"+"blue"+"earth",
		theme: "city"
	},
	{
		src: "./assets/256images/sf2.jpeg",
		caption: "Photo of a Street Fighter 2 arcade machine.",
		category:"tech"+"games"+"type",
		type: "photo", 
		color: "red"+"blue"+"black"+"purple"+"yellow",
		theme: "buttons"
	},
	{
		src: "./assets/256images/shepardfairey.jpeg",
		caption: "Image of the iconic Obey Shepard Fairey print.",
		category:"art"+"type",
		type: "", 
		color: "red"+"black"+"white",
		theme: "people"
	},
	{
		src: "./assets/256images/shittyrig.jpeg",
		caption: "Photo of a DIY Stop Motion rig.",
		category:"art"+"type",
		type: "animation", 
		color: "earth"+"black"+"white",
		theme: "making"+"indoors"
	},
	{
		src: "./assets/256images/silversurfer.jpeg",
		caption: "Image of the Supreme x Silver Surfer Jacket.",
		category:"art"+"clothing",
		type: "", 
		color: "blue",
		theme: "people"
	},
	{
		src: "./assets/256images/slide.jpeg",
		caption: "Thrasher Magazine subscription advertisement.",
		category:"skate",
		type: "photo", 
		color: "blue"+"red"+"black"+"red",
		theme: "people"
	},
	{
		src: "./assets/256images/slowdive.jpg",
		caption: "Album Cover for the self titled album by Slowdive.",
		category:"music"+"art",
		type: "album", 
		color: "black"+"white",
		theme: "monochrome"+"people"
	},
	{
		src: "./assets/256images/somerapsongs.png",
		caption: "Album Cover for Some Rap Songs by Earl Sweatshirt.",
		category:"music",
		type: "album"+"photo", 
		color: "black"+"earth",
		theme: "people"
	},
	{
		src: "./assets/256images/sonicyouth.jpeg",
		caption: "Album Cover for Evol by Sonic Youth.",
		category:"music",
		type: "album"+"photo", 
		color: "black"+"white"+"gray"+"yellow"+"blue"+"red",
		theme: "people"
	},
	{
		src: "./assets/256images/southside.jpeg",
		caption: "Photo of the Southside Skatepark in Richmond, Va.",
		category:"skate",
		type: "photo", 
		color: "gray"+"white"+"blue"+"earth",
		theme: "city"
	},
	{
		src: "./assets/256images/sp2.jpeg",
		caption: "Scene from Spiderman 2(2004).",
		category:"film",
		type: "photo", 
		color: "red"+"gray"+"blue"+"earth",
		theme: "city"+"people"
	},
	{
		src: "./assets/256images/space.jpeg",
		caption: "Cockpit of a space shuttle.",
		category:"tech",
		type: "photo", 
		color: "gray"+"blue"+"earth",
		theme: "space"+"buttons"
	},
	{
		src: "./assets/256images/spiderman2.jpeg",
		caption: "Concepts for scenes from Into the Spiderverse.",
		category:"art",
		type: "animation", 
		color: "gray"+"blue"+"earth"+"pink"+"green",
		theme: "making"
	},
	{
		src: "./assets/256images/Spirited_Away_063.jpeg",
		caption: "Scene from Spirited Away(2001).",
		category:"art"+"film",
		type: "animation"+"anime", 
		color: "gray"+"blue"+"green",
		theme: "vibrant"
	},
	{
		src: "./assets/256images/stevequote.png",
		caption: "Quote from Steve Caballero as a preface for a Quasi Skate Film.",
		category:"skate"+"film"+"type",
		type: "", 
		color: "black"+"white",
		theme: ""
	},
	{
		src: "./assets/256images/straight-no-chaser.jpeg",
		caption: "Album Cover for Straight No Chaser by Thelonious Monk.",
		category:"music"+"art",
		type: "album", 
		color: "earth"+"white"+"orange",
		theme: ""
	},
	{
		src: "./assets/256images/stussyaf1.jpg",
		caption: "Photo of the Stussy x Nike Air Force 1's.",
		category:"shoes"+"clothing",
		type: "photo", 
		color: "black"+"white",
		theme: "outside"
	},
	{
		src: "./assets/256images/stussym3.jpeg",
		caption: "Photo of the Stussy Racing BMW M3.",
		category:"cars"+"clothing",
		type: "photo", 
		color: "green"+"gray",
		theme: "outside"
	},
	{
		src: "./assets/256images/stussyrace.jpeg",
		caption: "Photo of the Stussy Racing Uniform.",
		category:"cars"+"clothing",
		type: "photo", 
		color: "earth"+"white",
		theme: "outside"+"people"
	},
	{
		src: "./assets/256images/sunshine.png",
		caption: "Screenshot from Super Mario Sunshine(2002)",
		category:"games",
		type: "digital"+"3d", 
		color: "green"+"white"+"red"+"blue",
		theme: "outside"+"people"
	},
	{
		src: "./assets/256images/superfamicom.jpg",
		caption: "Image of the Super Famicom controller.",
		category:"games"+"tools",
		type: "photo", 
		color: "green"+"yellow"+"red"+"blue"+"gray",
		theme: "buttons"
	},
	{
		src: "./assets/256images/supremedickies.jpeg",
		caption: "Image of the Supreme x Dickies Eisenhower Jacket.",
		category:"clothing",
		type: "photo", 
		color: "earth"+"orange",
		theme: ""
	},
	{
		src: "./assets/256images/Tak_vs_ry_manga.jpeg",
		caption: "Image from the Initial D manga.",
		category:"cars",
		type: "anime", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/technics.jpeg",
		caption: "Image of a Technics turntable.",
		category:"music"+"tools",
		type: "", 
		color: "black"+"gray",
		theme: ""
	},
	{
		src: "./assets/256images/telecaster.jpeg",
		caption: "Image of a Fender Telecaster.",
		category:"music"+"tools",
		type: "photo", 
		color: "earth"+"white",
		theme: "making"+"indoors"
	},
	{
		src: "./assets/256images/thebatman.jpeg",
		caption: "Scene from the Batman(2021).",
		category:"film",
		type: "photo", 
		color: "orange"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/thefall.png",
		caption: "Album Cover for The Fall by Gorillaz.",
		category:"music",
		type: "album", 
		color: "red"+"earth"+"black",
		theme: "people"
	},
	{
		src: "./assets/256images/themen.jpeg",
		caption: "Album Cover for Open Your Heart by The Men.",
		category:"music"+"type",
		type: "album", 
		color: "purple"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/theooz.png",
		caption: "Album Cover for The Ooz by King Krule.",
		category:"music"+"type",
		type: "album", 
		color: "blue"+"pink",
		theme: "outside"
	},
	{
		src: "./assets/256images/thepostalservice.jpg",
		caption: "Album Cover for Give Up by The Postal Service.",
		category:"music"+"type",
		type: "album", 
		color: "earth"+"gray",
		theme: "indoors"
	},
	{
		src: "./assets/256images/theshining.jpeg",
		caption: "Scene from The Shining(1980).",
		category:"film",
		type: "", 
		color: "earth"+"red",
		theme: "indoors"
	},
	{
		src: "./assets/256images/thewarondrugs.jpg",
		caption: "Scene from The Shining(1980).",
		category:"music",
		type: "album", 
		color: "earth"+"white"+"black",
		theme: "indoors"
	},
	{
		src: "./assets/256images/thrasher.jpeg",
		caption: "Thrasher Magazine from January 1991.",
		category:"skate",
		type: "photo", 
		color: "gray"+"red"+"blue",
		theme: "outside"
	},
	{
		src: "./assets/256images/tinytools.png",
		caption: "A database of web-based micro-tools for various cases.",
		link:"https://tinytools.directory/",
		category:"web",
		type: "digital", 
		color: "earth"+"blue",
		theme: "buttons"
	},
	{
		src: "./assets/256images/tpab.jpg",
		caption: "A database of web-based micro-tools for various cases.",
		category:"music",
		type: "photo"+"album", 
		color: "gray"+"black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/Tribe_Logo.png",
		caption: "An Image of a Tribe Called Quest logo.",
		category:"music"+"type",
		type: "photo", 
		color: "gray"+"black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/tribeca.jpeg",
		caption: "A photo of Tribeca Skatepark in NYC.",
		category:"skate",
		type: "photo", 
		color: "gray"+"black"+"orange",
		theme: "outside"+"city"
	},
	{
		src: "./assets/256images/tribecasnack.jpeg",
		caption: "A photo of me having a snack at Tribeca Skatepark in NYC.",
		category:"skate",
		type: "photo", 
		color: "gray"+"earth",
		theme: "outside"+"city"
	},
	{
		src: "./assets/256images/tron.jpg",
		caption: "Scene from Tron Legacy(2010).",
		category:"film",
		type: "sfx", 
		color: "black"+"orange",
		theme: "cyberpunk"
	},
	{
		src: "./assets/256images/trueno.jpeg",
		caption: "Photo of a Trueno AE86.",
		category:"film",
		type: "sfx", 
		color: "black"+"white"+"earth",
		theme: "city"
	},
	{
		src: "./assets/256images/ue5.png",
		caption: "Photo of a Trueno AE86.",
		category:"games",
		type: "3d"+"digital", 
		color: "black"+"white"+"earth",
		theme: "making"+"buttons"
	},
	{
		src: "./assets/256images/unity.jpeg",
		caption: "Album Cover for Unity by Larry Young.",
		category:"type"+"art"+"music",
		type: "album", 
		color: "black"+"earth"+"red",
		theme: ""
	},
	{
		src: "./assets/256images/univers.png",
		caption: "Type Specimen for Univers by Adrian Frutiger.",
		category:"type"+"art"+"tools",
		type: "", 
		color: "black"+"gray"+"red",
		theme: "making"
	},
	{
		src: "./assets/256images/unreal2.jpeg",
		caption: "Photo of Unreal Engine node workflow.",
		category:"type"+"tools",
		type: "sfx"+"animation", 
		color: "black"+"gray"+"red"+"blue"+"green",
		theme: "making"
	},
	{
		src: "./assets/256images/vampireweekend.jpg",
		caption: "Album Cover for the self titled album by Vampire Weekend.",
		category:"music",
		type: "album", 
		color: "orange"+"white",
		theme: "indoors"
	},
	{
		src: "./assets/256images/velvet-underground.jpg",
		caption: "Album Cover for the self titled album by The Velvet Underground.",
		category:"music",
		type: "album", 
		color: "yellow"+"black",
		theme: ""
	},
	{
		src: "./assets/256images/venue.jpeg",
		caption: "Image of Venue Skateshop stickers.",
		category:"skate"+"type",
		type: "", 
		color: "red"+"black"+"white"+"earth",
		theme: ""
	},
	{
		src: "./assets/256images/venue2.jpeg",
		caption: "Image of Venue Skateshop in Richmond, Va.",
		category:"skate",
		type: "photo", 
		color: "green"+"black"+"white"+"earth",
		theme: "indoors"
	},
	{
		src: "./assets/256images/vertigo.jpeg",
		caption: "Poster from the film, Vertigo(1958).",
		category:"film",
		type: "poster", 
		color: "orange"+"black"+"white",
		theme: "people"
	},
	{
		src: "./assets/256images/violenttheremin.png",
		caption: "An online theremin, with a colorful visualizer.",
		link: "http://mdn.github.io/violent-theremin/",
		category:"web"+"tools",
		type: "digital", 
		color: "orange"+"yellow"+"pink",
		theme: "making"
	},
	{
		src: "./assets/256images/wall.jpeg",
		caption: "A photo of my wall of music posters.",
		category:"music"+"art",
		type: "", 
		color: "red"+"earth"+"pink",
		theme: ""
	},
	{
		src: "./assets/256images/warholspace.jpeg",
		caption: "A photo of Andy Warhol's creative space.",
		category:"music"+"art",
		type: "photo", 
		color: "black"+"white"+"gray",
		theme: "monochrome"+"people"
	},
	{
		src: "./assets/256images/watchmen.jpeg",
		caption: "The cover of the Watchmen hardcover book.",
		category:"type"+"art",
		type: "", 
		color: "black"+"yellow"+"red",
		theme: "vibrant"+"people"
	},
	{
		src: "./assets/256images/winners-never-quit.jpeg",
		caption: "Album Cover for Winners Never Quit by Pedro the Lion.",
		category:"music"+"art",
		type: "album", 
		color: "black"+"white",
		theme: "monochrome"
	},
	{
		src: "./assets/256images/xmen.jpeg",
		caption: "Scene from the 90's Xmen cartoon series.",
		category:"film"+"art",
		type: "animation", 
		color: "black"+"yellow"+"blue",
		theme: "people"
	},
	{
		src: "./assets/256images/yard2.JPG",
		caption: "Image of my front yard in Virginia.",
		category:"",
		type: "photo", 
		color: "green"+"orange"+"blue"+"earth",
		theme: "outside"
	},
	{
		src: "./assets/256images/yeezy.jpeg",
		caption: "Image of the Yeezy 'Perfect' Hoodie.",
		category:"clothing",
		type: "", 
		color: "blue",
		theme: ""
	},
	{
		src: "./assets/256images/yeezyboot.jpeg",
		caption: "Image of the Yeezy 'Perfect' Hoodie.",
		category:"clothing"+"shoes",
		type: "", 
		color: "white"+"earth",
		theme: ""
	},
	{
		src: "./assets/256images/Your-Name-007.jpeg",
		caption: "Scene from the film, Your Name(2016).",
		category:"film",
		type: "anime"+"animation", 
		color: "white"+"earth",
		theme: "space"+"city"+"outside"
	},


]




	//let caption = document.createElement("p");
	//let imageCaption = allPics[i].caption;
	//caption.innerText = imageCaption;
	//gallery.append(caption);
	//let link = document.createElement('a');
	//link.href = allPics[23].link;
	//link.innerText = "Link";
	//gallery.append(link);


// route
let desc = {
	locs: [
		{
			html: "bus_station.html",
			text: "Bus & Train station",
			waypoint: 0,
			tour_clock: "Valkea"
		},
		{
			html: "valkea.html",
			text: "Valkea Shopping Center",
			waypoint: 7
		},
		{
			html: "kiikeli.html",
			text: "Kiikeli Public Beach",
			waypoint: 10
		},
		{
			html: "library.html",
			text: "City Library",
			waypoint: 12
		},
		{
			html: "psoas.html",
			text: "PSOAS Office",
			waypoint: 18
		},
		{
			html: "hupisaaret.html",
			text: "Hupisaaret",
			waypoint: 20,
			waypoint_rev: 22
		}
	],
	bonus: [
		{ waypoint:8, text: "Tokmanni" },
		{ waypoint:11, text: "Toripoliisi" },
		{ waypoint:14, text: "Valve" },
		{ waypoint:24, text: "Tietomaa" },
		{ text: "Oulu Castle", lat:65.0174027280823, lon:25.46811890560038 },
		{ text: "Northern Ostrobothnia Museum", lat:65.01768003729576, lon:25.475480763111793 },
		{ text: "Outdoor Theater", lat:65.02023547044791, lon:25.48045930277665 },
		{ text: "City Theater", lat:65.01460240591385, lon:25.462429929848934 }
	]
}

let quest = {
	title: "Oulu City Expedition",
	folder: "content", 
	dist_factor: 1.1,
	dist_accuracy: 0,
	map: {
		file: "appmap.png",
	// toivonniemen sillan pohjoisjuuri
		ref1:{ x:183, y:2, lat:65.02314069525936, lon:25.461418623470255 },
	// raksilan pelikentän risteys
		ref2:{ x:1055, y:1199, lat:65.00974944263169, lon:25.484723719213385 },
		loc_tag_size: 127
	},
	briefing: {
		map: 0,
		pages: [
			{ i: 0 }
		]
	},
	waypoints:[
		{	i: 0,
			name: "Start - Bus station", lat:65.00974944263169, lon:25.484723719213385, inrange: 30,
			read: 0,
			text: "We start at the bus station",
			at_text: "OK, you're at the waypoint now. Press next to select the next waypoint (duh)."
		},
		{	i: 1,
			name: "Madetojan puisto", lat: 65.0072167258904, lon: 25.481773981863263, inrange: 30,
			text: "It's a park",
			at_text: "Turn right."
		},
		{	i: 2,
			name: "Löytynpuiston silta", lat:65.00865901115026, lon:25.476145824224368, inrange: 30,
			text: "It's a bridge.",
			at_text: "Walk across."
		},
		{	i:3,
			name:"Random statue", lat:65.0088217979442, lon:25.475259273043847, inrange:30,
			text:"It's a bridge.",
			at_text:"Walk across."
		},
		{	i:4,
			name:"Random crossroads", lat:65.00913816960148, lon:25.474060829838, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:5,
			name:"Pakkalan muistomerkin risteys", lat:65.00979839621922, lon:25.473996311268657, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:6,
			name:"Kauppurikatu", lat:65.01076407192573, lon:25.474095300059417, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:7,
			name:"Kauppakeskus Valkea", lat:65.01131539891922, lon:25.472233060729945, inrange:30,
			read: 1,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:8,
			name:"Tokmanni", lat:65.01054819422063, lon:25.47109436324293, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:9,
			name:"Kiikelinsilta", lat:65.01309597912869, lon:25.461360889303972, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:10,
			name:"Kiikelinranta", lat:65.01347717460992, lon:25.45909242221077, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell.",
			read: 2
		},
		{	i:11,
			name:"Toripoliisi", lat:65.01329152733457, lon:25.46478315048867, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:12,
			name:"Kirjasto, teatteri", lat:65.01517243263001, lon:25.463330691056722, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell.",
			read: 3
		},
		{	i:13,
			name:"Kääntökulma", lat:65.01531600987448, lon:25.465728140008277, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:14,
			name:"Kulttuuritalo valve", lat:65.01408766132441, lon:25.47051163335754, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:15,
			name:"Franzenin puisto kulma 1", lat:65.0152225622958, lon:25.472709052419674, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:16,
			name:"Franzenin puisto kulma 2", lat:65.01530403925136, lon:25.475216766579255, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:17,
			name:"Joku Åström", lat:65.01619338777782, lon:25.477483433258737, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:18,
			name:"PSOAS office", lat:65.01696065535147, lon:25.478703892012174, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell.",
			read: 4
		},
		{	i:19,
			name:"Paratiisisaari", lat:65.01794161193662, lon:25.47690142815145, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:20,
			name:"Café Kiikku", lat:65.01866462618945, lon:25.47754608288308, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell.",
			read: 5
		},
		{	i:21,
			name:"Kalatie", lat:65.02112857079055, lon:25.482981726352193, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:22,
			name:"Kalakoppi", lat:65.02136495656991, lon:25.4860906536509, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:23,
			name:"Taidemuseo, Hilkku", lat:65.01878250986658, lon:25.48287846509464, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:24,
			name:"Tietomaa", lat:65.01813171865369, lon:25.485333237527435, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:25,
			name:"K-market", lat:65.01691718228128, lon:25.487328402469604, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:26,
			name:"Puusepän puisto", lat:65.01486131786461, lon:25.487135975143477, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:27,
			name:"Tulliväylän alikulku", lat:65.01321459906482, lon:25.485990381988938, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:28,
			name:"Hautausmaa", lat:65.01220555812559, lon:25.48883957762344, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		},
		{	i:29,
			name:"End of Tsöörni", lat:65.00974944263169, lon:25.484723719213385, inrange:30,
			text:"Can't remember.",
			at_text:"Can't tell."
		}
	]
};

// data for navigation
let MAP_WIDTH = 1520;

let window_state = 0;
let deg_to_rad = Math.PI / 180.0;
let rad_to_deg = 180.0 / Math.PI;
let km_per_deg_lat = 60.0 * 1.852;
let map_px_lat;
let map_px_lon;

let tour_active = 0;
let cur_waypoint = 0;
let cur_loc;

let D_SYM = "\xB0 "; // degree symbol with an intentional extra space
let gps_state = 0;
let path = null;
let locreturn = 0;

let google_string="https://www.google.com/maps/search/?api=1&query=";
let zoom_levels = [
//	{ scale: "150vw", scroll: 1.33 },
	{ scale: "200vw", scroll: 1.5 },
	{ scale: "300vw", scroll: 1.33 },
	{ scale: "400vw", scroll: 1.25 },
	{ scale: "500vw", scroll: 1.0 }
];
let zoom = 0;

// screen and modes management
let scr_h = 0;
let scr_w = 0;
let scr_head = 0;
let scr_bottom = 0;
let scr_iframe = 0;
let scr_rnav = 0;

let redraw = briefPage;

// handles for timed refresh of the map canvas and location updates
let interval_handle = null;
let track_handle = null;

// screen constants
let cbox = 45.0; // clickbox +/- dimensions in both axes (map units, not px)
let wpbox = 30.0;

// briefing
let briefpage = 0;
let n_briefpages = 0;

// initialize data members
let userpos = { lat:65.01735835816262, lon:25.467850486326977, hdg:0, speed:0 };
let navdata = { range: 1.0, bearing: 0, meters: 1000 };

/**************** MAP IMAGE *****************/

window.onload = function() {
//	document.documentElement.requestFullscreen();
	drawarea.addEventListener("click", mapClicked);
	drawMap();

	let mode = sessionStorage.getItem("mode");
	if (sessionStorage.getItem("tour")) {
		tour_active = 1;
		cur_waypoint = sessionStorage.getItem("wp");
	}
	canvasholder.scrollTop = 300;
	canvasholder.scrollLeft = 300;
	
	if (mode) {
		if (mode == "loc") {
			activateLocation(sessionStorage.getItem("loc"));
		}
		if (mode == "wp") {
			cur_waypoint = sessionStorage.getItem("wp");
			activateWaypoint();
		}
		if (mode == "map") {
			zoomset(sessionStorage.getItem("zoom"));
			activateBriefing();
		}
	} else {
		zoom = Number(sessionStorage.getItem("zoom"));
		if (zoom >= 0) zoomset(zoom);
		else zoomset(0);
		activateBriefing();
	}
};

/******************* MAIN *******************/

function main() {
// map pixels, scaling and locations
	let lat1 = quest.map.ref1.lat;
	let py1 = quest.map.ref1.y;
	let lat2 = quest.map.ref2.lat;
	let py2 = quest.map.ref2.y;
	let lon1 = quest.map.ref1.lon;
	let px1 = quest.map.ref1.x;
	let lon2 = quest.map.ref2.lon;
	let px2 = quest.map.ref2.x;

	map_px_lat = (py1 - py2) / (lat1 - lat2);
	map_px_lon = (px1 - px2) / (lon1 - lon2);

	buildMapCoordinates();

// init user position
	let tmpxy = mapxy( { lat: userpos.lat, lon: userpos.lon } );
	userpos.x = tmpxy.x; userpos.y = tmpxy.y;

// location tag shift
	quest.map.loc_tag_shiftx = Number((quest.map.loc_tag_size * 0.5).toFixed(0)) + 1;

// add some data members to location descriptions
	cur_waypoint = 0;
	path = quest.folder + "/";

// calculate and initialize data for waypoints
	for (let i = 0; i < quest.waypoints.length; i++) {
	// calculate km per degree of longitude at waypoint
		quest.waypoints[i].lonconst = Math.cos(quest.waypoints[i].lat * deg_to_rad) * km_per_deg_lat;
	// if waypoint has no activation range set, default to 50
		if (!quest.waypoints[i].inrange) quest.waypoints[i].inrange = 50;
	// convert waypoint coordinates into a string
		let locstr = decimalMinutes(quest.waypoints[i].lat, quest.waypoints[i].lon);

		quest.waypoints[i].latstr = locstr.lat;
		quest.waypoints[i].lonstr = locstr.lon;
		quest.waypoints[i].locstr = locstr.lat + ", " + locstr.lon;
		quest.waypoints[i].reached = 0; // Boolean whether to show the At Waypoint / To Waypoint Button
		quest.waypoints[i].text_state = 0; // 0 = .text, anything else = at_text
		quest.waypoints[i].not_first = 0; // selects button text
	}

	quest.route_distance = 0.0;
	for (let i = 0; i < (quest.waypoints.length - 1); i++) {
		let leg = dist(quest.waypoints[i].lat, quest.waypoints[i].lon, quest.waypoints[i + 1]);
		quest.waypoints[i + 1].course = leg.bearing;
		quest.waypoints[i + 1].leg = leg.range;
		quest.route_distance += leg.range;
	}

	if (navigator.geolocation) trackToggle();
	else errortext.innerHTML = "Geolocation error...";
}

function buildMapCoordinates() {
// do all waypoints first
	let tc = quest.waypoints.length;
	let twp = quest.waypoints;
	for (let i = 0; i < tc; i++) {
		let txy = mapxy(twp[i]);
		twp[i].x = txy.x;
		twp[i].y = txy.y;
	}
// copy to locations
	let tlocs = desc.locs;
	tc = tlocs.length;
	for (let i = 0; i < tc; i++) {
		let tpoint = twp[tlocs[i].waypoint];
		tlocs[i].x = tpoint.x;
		tlocs[i].y = tpoint.y;
	}
// do bonus locations
	tlocs = desc.bonus;
	tc = tlocs.length;
	for (let i = 0; i < tc; i++) {
		if (tlocs[i].waypoint != undefined) {
			let tpoint = twp[tlocs[i].waypoint];
			tlocs[i].x = tpoint.x;
			tlocs[i].y = tpoint.y;
		} else {
			let txy = mapxy(tlocs[i]);
			tlocs[i].x = txy.x;
			tlocs[i].y = txy.y;
		}
	}
}

/********** SCREEN MODE TRANSITIONS *********/

function activateBriefing() {
	redraw = briefPage;
	redraw();
	clearPopups();
	gps.style.display = "none";
	locdesc.style.display = "none";
	waypoint.style.display = "none";
	hbriefing.style.display="block";
	sessionStorage.setItem("mode","map");
}

function activateWaypoint() {
	wpRefresh();
	redraw = waypointPage;
	updateWaypointFrame();
	redraw();

	locdesc.style.display = "none";
	hbriefing.style.display = "none";
	gps.style.display = "none";
	waypoint.style.display = "block";
	sessionStorage.setItem("tour","1");
}

function activateGPS() {
	locdesc.style.display = "none";
	hbriefing.style.display = "none";
	gps.style.display = "block";
	redraw = GPSPage();
	redraw();
}

function activateQpicker() {
	hbriefing.style.display = "none";
	gps.style.display = "none";
}

function hideAllFrames() {
	hbriefing.style.display = "none";
	navigation.style.display = "none";
	waypoint.style.display = "none";
	locdesc.style.display = "none";
}

/***************** MAP VIEW *****************/

function briefPage() {
	if (tour_active) mapback.style.visibility = "visible";
	else mapback.style.visibility = "hidden";
}

function backToTour() {
	activateWaypoint();
}

function zoomin() {
	if (zoom < zoom_levels.length - 1) zoom++;
	else return;

	drawarea.style.width = zoom_levels[zoom].scale;
	let sfactor = zoom_levels[zoom - 1].scroll;
	canvasholder.scrollLeft = (canvasholder.scrollLeft + drawarea.clientWidth * 0.05) * sfactor;
	canvasholder.scrollTop = (canvasholder.scrollTop + drawarea.clientHeight * 0.05) * sfactor;
//	canvasholder.scrollTop *= sfactor;

	sessionStorage.setItem("zoom", "" + zoom);
}

function zoomout() {
	if (zoom > 0) zoom--;
	else return;

	drawarea.style.width = zoom_levels[zoom].scale;
	let sfactor = zoom_levels[zoom].scroll;
	canvasholder.scrollLeft = (canvasholder.scrollLeft - drawarea.clientWidth * 0.05) / sfactor;
	canvasholder.scrollTop = (canvasholder.scrollTop - drawarea.clientHeight * 0.05) / sfactor;
//	canvasholder.scrollTop /= sfactor;

	sessionStorage.setItem("zoom", "" + zoom);
}

function zoomset(plvl) {
	drawarea.style.width = zoom_levels[plvl].scale;
	sessionStorage.setItem("zoom", "" + zoom);
}

function drawMap() {
	let dcon = drawarea.getContext("2d");
	dcon.drawImage(document.getElementById("appmap_nw"), 0,0);

	let twpdot = document.getElementById("waypoint_dot");
	for (let i = 0; i < quest.waypoints.length; i++) {
		xy = mapxy(quest.waypoints[i]);
		dcon.drawImage(twpdot, xy.x - 14, xy.y - 13);
	}

	let tlocbonus = document.getElementById("location_bonus");
	for (let i = 0; i < desc.bonus.length; i++) {
		dcon.drawImage(tlocbonus, desc.bonus[i].x - 41.5, desc.bonus[i].y - 80);
	}

	let tloctag = document.getElementById("location_arrow");
	for (let i = 0; i < desc.locs.length; i++) {
		dcon.drawImage(tloctag, desc.locs[i].x - quest.map.loc_tag_shiftx, desc.locs[i].y - quest.map.loc_tag_size);
	}

	dcon.drawImage(user_arrow, userpos.x - 33.5, userpos.y);
}

/**************** MAP POP-UP ****************/

function mapClicked(e) {
	let scale = MAP_WIDTH / drawarea.clientWidth;
	cx = scale * e.offsetX;
	cy = scale * e.offsetY;

	popup_menu.style.display = "none";

// search for major locations first. If found, activate popup and return
	let tc = desc.locs.length;
	let tlocs = desc.locs;
	for (let i = 0; i < tc; i++) {
		if (cx >= tlocs[i].x - cbox && cx <= tlocs[i].x + cbox)
			if (cy >= tlocs[i].y - cbox && cy <= tlocs[i].y + cbox) {
				popup_title.innerHTML = tlocs[i].text;
				popup_read.style.display = "inline";
				popup_read.setAttribute("onclick", "activateLocation(" + i + ", 0);");
				popup_guided.setAttribute("onclick", "startGuided(" + tlocs[i].waypoint + ");");
				popup_guided.style.display = "inline";
				let twp = quest.waypoints[tlocs[i].waypoint];
				popup_google.href = google_string + twp.lat.toFixed(6) + "%2C" + twp.lon.toFixed(6);
				popup_menu.style.display = "block";
				return;
			}
	}

// if not found, then go with bonus locations
	tlocs = desc.bonus;
	tc = tlocs.length;
	for (let i = 0; i < tc; i++) {
		if (cx >= tlocs[i].x - cbox && cx <= tlocs[i].x + cbox)
			if (cy >= tlocs[i].y - cbox && cy <= tlocs[i].y + cbox) {
				popup_title.innerHTML = tlocs[i].text;
				popup_read.style.display = "none";
				if (tlocs[i].waypoint != undefined) {
					popup_guided.setAttribute("onclick", "startGuided(" + tlocs[i].waypoint + ");");
					popup_guided.style.display = "inline";
					let twp = quest.waypoints[tlocs[i].waypoint];
					popup_google.href = google_string + twp.lat.toFixed(6) + "%2C" + twp.lon.toFixed(6);
				} else {
					popup_guided.style.display = "none";
					popup_google.href = google_string + tlocs[i].lat.toFixed(6) + "%2C" + tlocs[i].lon.toFixed(6);
				}
				popup_menu.style.display = "block";
				return;
			}
	}
	
// finally go through waypoints
	tlocs = quest.waypoints;
	tc = tlocs.length;
	for (let i = 0; i < tc; i++) {
		if (cx >= tlocs[i].x - wpbox && cx <= tlocs[i].x + wpbox)
			if (cy >= tlocs[i].y - wpbox && cy <= tlocs[i].y + wpbox) {
				popup_title.innerHTML = "WP" + i + ": " + tlocs[i].name;
				popup_read.style.display = "none";
				popup_guided.style.display = "inline";
				popup_guided.setAttribute("onclick", "startGuided(" + i + ");");
				popup_google.href = google_string + tlocs[i].lat.toFixed(6) + "%2C" + tlocs[i].lon.toFixed(6);
				popup_menu.style.display = "block";
			}
	}
}

function clearPopups() {
	popup_menu.style.display = "none";
}

/***************** LOCATION *****************/

let locmenustate = 0;

function clearLocmenu() {
	locmenustate = 0;
	locdrop.style.display = "none";
}

function toggleLocmenu() {
	if (locmenustate) { locmenustate = 0; locdrop.style.display = "none"; }
	else { locmenustate = 1; locdrop.style.display = "block"; }
}

function activateLocation(select, ret) {
	/* ret = 0: back to map */
	/* ret = 1: back to waypoint */
	locmenustate = 0;
	locdrop.style.display = "none";

	locreturn = ret;
	cur_loc = select;
	locframe.src = "content/" + desc.locs[select].html;
//	if (ret == 0) locguide.style.display = "block";
//	else locguide.style.display = "none";

	hbriefing.style.display = "none";
	gps.style.display = "none";
	waypoint.style.display = "none";
	locdesc.style.display = "block";

	let wp = desc.locs[select].waypoint;
	locguide.setAttribute("onclick", "startGuided(" + wp + ");");
	let twp = quest.waypoints[wp];
	locgoogle.href = google_string + twp.lat.toFixed(6) + "%2C" + twp.lon.toFixed(6);

	sessionStorage.setItem("mode","loc");
	sessionStorage.setItem("loc","" + select);
}

function reverseLocation() {
	if (locreturn) activateWaypoint();
	else activateBriefing();
}

function startGuided(twp) {
	cur_waypoint = twp;
	tour_active = 1;
	activateWaypoint();
}

/***************** WAYPOINT *****************/

function waypointPage() {
	wpbrg.innerHTML = "BRG: " + navdata.bearing.toFixed(1) + D_SYM;
	wprng.innerHTML = "RNG: " + navdata.meters.toFixed(0) + " m";
	wphdg.innerHTML = "HDG: " + userpos.hdg.toFixed(0) + D_SYM;
}

function updateWaypointFrame() {
	let cw = quest.waypoints[cur_waypoint];
	if (quest.waypoints[cur_waypoint].html) wpiframe.src = path + quest.waypoints[cur_waypoint].html
	else wpiframe.src = "";

	if (cw.name) wptitle.innerHTML = cw.name;
	else wptitle.innerHTML = "";
	if (cw.text) wpinfotext.innerHTML = cw.text;
	else wpinfotext.innerHTML = "";

	if (cw.read != undefined) wpread.style.display = "block";
	else wpread.style.display = "none";

	sessionStorage.setItem("mode","wp");
	sessionStorage.setItem("wp","" + cur_waypoint);
}

function wpReadMore() {
	activateLocation(quest.waypoints[cur_waypoint].read, 1);
}

function prevWaypoint() {
	if (cur_waypoint == 0) cur_waypoint = quest.waypoints.length - 1;
	else cur_waypoint--;
	wpRefresh();
	updateWaypointFrame();
//	updateWaypoint();
	sessionStorage.setItem("wp", "" + cur_waypoint);
	return;
}

function nextWaypoint() {
	if (cur_waypoint == quest.waypoints.length - 1) cur_waypoint = 0;
	else cur_waypoint++;
	wpRefresh();
	updateWaypointFrame();
//	updateWaypoint();
	sessionStorage.setItem("wp", "" + cur_waypoint);
	return;
}

/******************* GPS ********************/

function GPSPage() {
}

/******************* CORE *******************/

let poshandler_firstrun = true;
function posHandler(payload) {
	if (poshandler_firstrun) { 
		gpsinfobox.style.display = "none";
		poshandler_firstrun = false;
		drawMap();
	}
	
	userpos.lat = payload.coords.latitude;
	userpos.lon = payload.coords.longitude;
	userpos.speed = payload.coords.speed;
	userpos.hdg = payload.coords.heading;
	if (userpos.hdg == null) userpos.hdg = 0;
	if (userpos.speed == null) userpos.speed = 0;
	let tmpxy = mapxy( { lat: userpos.lat, lon: userpos.lon } );
	userpos.x = tmpxy.x; userpos.y = tmpxy.y;
	wpRefresh();
}

function wpRefresh() {
	navdata = dist(userpos.lat, userpos.lon, quest.waypoints[cur_waypoint]);
	navdata.meters = navdata.range * 1000;

//	let cwp = quest.waypoints[cur_waypoint];	
//	error.innerHTML = cwp.name + ", " + cwp.lat.toFixed(3) + ", " + cwp.lon.toFixed(3);
	redraw();
}
/*
function updateWaypoint() {
	if (quest.waypoints[cur_waypoint].at_text && quest.waypoints[cur_waypoint].reached == 0)
		if (navdata.meters <= quest.waypoints[cur_waypoint].inrange) {
			quest.waypoints[cur_waypoint].reached = 1;
		}
	updateUserLoc();
}*/

function updateUserLoc() {
	let locstrs = decimalMinutes(userpos.lat, userpos.lon);
	userlat.innerHTML = locstrs.lat;
	userlon.innerHTML = locstrs.lon;
}

function trackToggle() {
	if (gps_state) {
		if (track_handle) navigator.geolocation.clearWatch(track_handle);
		if (interval_handle) clearInterval(interval_handle);
		gps_state = 0;
	} else {
		track_handle = navigator.geolocation.watchPosition(posHandler, trackError, { timeout: 180000, maximumAge: 30000 });
		interval_handle = window.setInterval(drawMap, 4000);
		gpsinfobox.style.display = "block";
		gps_state = 1;
	}
}

function trackError(error) {
	const { code } = error;
	switch (code) {
		case GeolocationPositionError.PERMISSION_DENIED:
			brieferrortext.innerHTML = "Location not enabled or permission denied";
			break;
		case GeolocationPositionError.POSITION_UNAVAILABLE:
			brieferrortext.innerHTML = "Location not available.";
			break;
		case GeolocationPositionError.TIMEOUT:
			brieferrortext.innerHTML = "Location acquisition timed out. Try to refresh page.";
			break;
		default:
			brieferrortext.innerHTML = "Location error. Try to refresh page.";
			break;
	}
	navigator.geolocation.clearWatch(track_handle);
	maperror.style.display = "block";
	gpsinfobox.style.display = "none";
	gps_state = 0;
}

function showGPS() {
	gpsinfotext.innerHTML = "lat:" + userpos.lat.toFixed(6) + ", lon:" + userpos.lon.toFixed(6);
	gpsinfobox.style.display = "block";
	gpsinfoclose.style.display = "inline";
}

function hideError() {
	maperror.style.display = "none";
}

function debugError() {
	brieferrortext.innerHTML = "Location not available.";
	maperror.style.display = "block";
	gpsinfobox.style.display = "none";
	gps_state = 0;
}

function debugGPS() {
	gpsinfobox.style.display = "block";
}

function dist(lat, lon, wp) {
	let dy = (wp.lat - lat) * km_per_deg_lat;
	let dx = (wp.lon - lon) * wp.lonconst;

	let dst = Math.sqrt(dx * dx + dy * dy);
	let brng = 90.0 - rad_to_deg * Math.atan2(dy, dx);
	if (brng < 0.0) brng += 360.0;

	return { range:dst, bearing:brng };
}

function mapxy(coords) {
	let ty = (coords.lat - quest.map.ref1.lat) * map_px_lat + quest.map.ref1.y;
	let tx = (coords.lon - quest.map.ref1.lon) * map_px_lon + quest.map.ref1.x;
	return { x: tx, y: ty };
}

function decimalMinutes(lat, lon) {
	let latdeg = lat.toFixed(0);
	let latmin = (lat - latdeg) * 60;
	let latstr;

	if (latmin < 10) latmin = "0" + latmin.toFixed(3);
	else latmin = latmin.toFixed(3);
	if (latdeg >= 0) latstr = "N" + latdeg + D_SYM + latmin + "'";
	else latstr = "S" + latdeg + D_SYM + latmin + "'";
	
	let londeg = lon.toFixed(0);
	let lonmin = (lon - londeg) * 60;
	let lonstr;

	if (lonmin < 10) lonmin = "0" + lonmin.toFixed(3);
	else lonmin = lonmin.toFixed(3);
	if (londeg >= 0) lonstr = "E" + londeg + D_SYM + lonmin + "'";
	else lonstr = "W" + londeg + D_SYM + lonmin + "'";

	return { lat:latstr, lon:lonstr };
}

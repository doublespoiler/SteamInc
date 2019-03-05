function save(){
	var save = {
	steam: steam,
	boilers: boilers,
	copper: copper,
	copperMiners: copperMiners
	};

	localStorage.setItem("save",JSON.stringify(save));
	console.log("Saved game!");
};



function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.steam !== "undefined") steam = savegame.steam;
	if (typeof savegame.boilers !== "undefined") boilers = savegame.boilers;
	if (typeof savegame.copper !== "undefined") copper = savegame.copper;
	if (typeof savegame.copperMiners !=="undefined") copperMiners = savegame.copperMiners;
};

function deleteSave(){
	localStorage.removeItem("save")
};
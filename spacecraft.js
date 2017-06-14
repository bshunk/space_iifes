
var SolarSystem = (function() {
	let spacecraft = [ 
		{name: "Apollo 2.5", year: "1968"}
	];

	let wreckSpacecraft = function() {
		spacecraft.pop();
	}
	let printSpacecraft = function() {
		spacecraft.forEach(function(craft) {
			document.getElementById("spacecraft").innerHTML += `<h3>${craft.name} was first launched in ${craft.year}</h3>`
		})
	}
	
	return {
		addSpacecraft = function(craft) {
			spacecraft.push(craft);
		},
		wreckSpacecraft,
		printSpacecraft
	}

}());
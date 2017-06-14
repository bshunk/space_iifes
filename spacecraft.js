var SolarSystem = (function(oldSolarSystem) {
	let spacecraft = [ 
		{name: "Apollo 2.5", year: "1968"}
	];

	oldSolarSystem.wreckSpacecraft = function() {
		spacecraft.pop();
	}
	
	oldSolarSystem.printSpacecraft = function() {
		spacecraft.forEach(function(craft) {
			document.getElementById("spacecraft").innerHTML += `<h3>${craft.name} was first launched in ${craft.year}</h3>`
		})
	}

	oldSolarSystem.getSpacecraft = function() {
		return spacecraft;
	}
	
	oldSolarSystem.addSpacecraft = function(craft) {
		spacecraft.push(craft);
	}

	return oldSolarSystem

}(SolarSystem));
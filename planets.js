var SolarSystem = (function() {
	let planets = [];
	let dwarfPlanets = [];
	let planetsLandedOn = 0;


	planets.push("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune");



	let setPlanetsLandedOn = function(count) {
		if (count < 0 || count > planets.length) {
			throw `I don't think so, bud. There are only ${planets.length} planets`
		} else {
			planetLandedOn = count;
		}
	}



	let lowercasePlanets = function() {
		// TODO loop through the planets and use .toLowercase()
		
	}



	let addDwarfPlanet = function(planetoid) {
		dwarfPlanets.push(planetoid);
	}
}());
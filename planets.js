var SolarSystem = (function(oldSolarSystem) {
	let planets = [];
	let dwarfPlanets = [];
	let planetsLandedOn = 0;

	planets.push("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune");

	oldSolarSystem.setPlanetsLandedOn = function(count) {
		if (count < 0 || count > planets.length) {
			throw `I don't think so, bud. There are only ${planets.length} planets`
		} else {
			planetLandedOn = count;
		}
	}

	oldSolarSystem.lowercasePlanets = function() {
		// TODO loop through the planets and use .toLowercase()
		
	}

	oldSolarSystem.addDwarfPlanet = function(planetoid) {
		dwarfPlanets.push(planetoid);
	}

	return oldSolarSystem

}(SolarSystem));

{
	let planetsArr = [];
	let dwarfPlanets = [];
	let planetsLandedOn = 0;

	planetsArr.push("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune");
	
	let planets = Object.create(null);

	plantes.setPlanetsLandedOn = function(count) {
		if (count < 0 || count > planets.length) {
			throw `I don't think so, bud. There are only ${planets.length} planets`
		} else {
			planetsLandedOn = count;
		}
	}

	planets.lowercasePlanets = function() {
		planetsArr = planetsArr.map( function(planet) {
			return planet.toLowerCase();
		});
		
	}

	planets.addDwarfPlanet = function(planetoid) {
		dwarfPlanets.push(planetoid);
	}

	planets.getPlanets = function() {
		return planetsArr;
	}

	window.SolarSystem = window.SolarSystem || {};
	SolarSystem.Planets = planets;

}
















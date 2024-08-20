// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilotInput = document.querySelector("input[name=pilotName]").value;
    let copilotInput = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoInput = document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems");

    formSubmission(
      document,
      list,
      pilotInput,
      copilotInput,
      fuelLevel,
      cargoInput
    );
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });
});

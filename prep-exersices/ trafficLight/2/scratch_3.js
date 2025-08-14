
const trafficLight = {
    state: ["green", "orange", "red"],
    stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
    const currentState = trafficLight.state[trafficLight.stateIndex];
    console.log("The traffic light is on", currentState);


     trafficLight.stateIndex++;
        if (trafficLight.stateIndex === trafficLight.state.length) {
        trafficLight.stateIndex = 0;
    }


        if (currentState === "red") {
          cycle++;
    }
}


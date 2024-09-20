// Implement the launch sequence function here and export it as the default export.
import { getNewRocket } from "./core/rocket.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload} from "./core/deploy.js";
import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";

export default function launch() {
// Initialisiere die Rakete
window.rocket = getNewRocket();

// DIe Satelliten zum payload hinzufügen:
// window.rocket.payload.push(NFSAT);
// console.log(window.rocket);

// Payload laden
    // let payload = window.rocket.payload[0].cost;
    // loadPayload(payload);
   
    loadPayload(NFSAT);
    loadPayload(FISHSAT);

    fuel();

    const countdownLength = 5;
    for (let i = 0; i < countdownLength; i++) {
        countdown();
    };

    liftoff();
    deployPayload();

};





// Implement the launch sequence function here and export it as the default export.
import { rocket, getNewRocket, getRocket } from "./core/rocket.js";
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

// Schritt 1: Payload laden
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




// Die Unterprogramm-Module müssen in die launchSequence.js-Datei im Body der launch() Funktion aufgenommen werden. Die launch() Funktion muss der Standard-Export des Moduls sein.

// Schritt 1: Payload laden
// core/load.js stellt die loadPayload(payload) Funktion zur Verfügung. Sie kann verwendet werden, um die erforderliche Missions-Payload zu laden. Siehe das Mission Briefing für die zu ladende Payload.

// Schritt 2: Betankung
// core/fuel.js stellt die fuel() Funktion zur Verfügung. Die Betankung sollte vor dem Start des Countdowns erfolgen.

// Schritt 3: Countdown
// core/countdown.js stellt die countdown() Funktion zur Verfügung. Jede Mission definiert ihre eigene Countdown-Dauer. Die Funktion muss so oft aufgerufen werden, wie es die Countdown-Dauer erfordert.

// Schritt 4: Start
// core/liftoff.js stellt die liftoff() Funktion zur Verfügung. Sie muss nach einem angemessenen Countdown aufgerufen werden. Sie bringt SpaceRocket™️ in die richtige Umlaufbahn.

// Schritt 5: Payload bereitstellen
// core/deploy.js stellt die deployPayload() Funktion zur Verfügung. Sobald die richtige Umlaufbahn erreicht ist, muss die Funktion aufgerufen werden, um die Payload bereitzustellen.
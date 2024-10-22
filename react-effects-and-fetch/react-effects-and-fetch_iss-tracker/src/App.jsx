import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    const response = await fetch(URL);

    // wir brauchen hier nicht das ganze Objekt...
    // const data = await response.json();
    // setCoords({longitude: data.longitude, latitude: data.latitude });
    // console.log(data);

    // es reicht wenn man nur die longitude and latitude fetcht 
    const {latitude, longitude } = await response.json();
    setCoords({latitude, longitude});
    console.log(latitude, longitude);
    
  }


  useEffect(() => {
    getISSCoords();
  
    // Intervall einrichten, um die Koordinaten alle 5 Sekunden zu aktualisieren
    const interval = setInterval(() => {
      getISSCoords();
    }, 5000); // 5000 Millisekunden = 5 Sekunden
  
    // Cleanup-Funktion, um das Intervall zu löschen
    return () => clearInterval(interval);
  }, []);


  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}

// import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";


async function fetcher(url) {
	const response = await fetch(url);

	if (!response.ok){
	throw new Error("An error occured while fetching data")
	}

	const data = await response.json();
	return data;
  
}

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const {data: coords, isLoading, error, mutate} = useSWR(URL, fetcher, { refreshInterval: 5000})

  // das hier ist der Aufbau fürs Destructuring:
  // const {longitude, latitude } = coords;


  function handleRefresh() {
    mutate();
  }


  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  if(error){
    return <h1>{error.message}</h1>
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => handleRefresh()}
      />
    </main>
  );
}

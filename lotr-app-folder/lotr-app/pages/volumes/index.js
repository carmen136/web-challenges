import { introduction, volumes } from "@/resources/lib/data";
import Link from "next/link";
import Head from "next/head";
// import { useRouter } from "next/router";

// man könnte die Funktion auch innerhalb der VolumesOverview Komponente aufrufen
// function getRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

export default function VolumesOverwiew() {
  // const router = useRouter();                         // Initialisierung des Routers

  // function handleRandomVolume() {
  //   const randomVolume = getRandomElement(volumes);
  //   router.push(`/volumes/${randomVolume.slug}`);
  // };

  return (
    <>
      <Head>
        <title>Volumes</title>
      </Head>
      <Link href="/">Back to Home Page</Link> 
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
        })}   
      </ul>
      {/* <button onClick={handleRandomVolume}
      type = "button">
        Surprise me!
      </button> */}
      </>
  );
}


// wenn man zwischen zwei Clicks bzw. beim switchen zu verschiedenen Seiten eine
// Funktion einbauen möchte, dann: router.push



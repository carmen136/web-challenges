import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
    const {data: character, error} = useSWR("/api/random-character/", fetcher);

    if(error) {
        return <h1>Error loading Character</h1>
    }

    return (
        <>
        {character ? (
          <div>
            <h1>{character.firstName} {character.lastName}  </h1>
            <p>Age: {character.age}</p>
            <p>Profession: {character.profession}</p>
            <p>Twitter: {character.twitterName}</p>
            <p>geohash: {character.geohash}</p>
          </div>
        ) : (
            <p>Loading...</p> 
        )}
    </>
    )
};


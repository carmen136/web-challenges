import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("An error occured while fetching data");
  }

  const data = await response.json();
  console.log(data);
  return data;

}

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const URL = `https://swapi.py4e.com/api/people/${id}/`;

  const {data, error, isLoading } = useSWR(URL, fetcher)

  // das Destructuring hat hier leider nicht funktioniert -> Fehlermeldung
  // const {height, eye_color, birth_year} = data;

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error.message}</h1>
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}

import Link from "next/link";
import Head from "next/head";


export default function HomePage() {
  return (
    <>
      <Head>
          <title>HomePage</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <h2>Home Page</h2>
      <Link href="/volumes"><h3>Go to the volumes overview</h3></Link>
    </>
  );
}




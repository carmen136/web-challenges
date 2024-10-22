import Image from "next/image"
import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";


export default function VolumeDetail() {
    const router = useRouter();
    console.log("Router: ", router.query.slug);
    const { slug: querySlug } = router.query;                      // wir müssen slug umbenennen, damit es in der find method keine namenskonflike gibt

    const currentVolume = volumes.find(
        ({slug }) => slug === querySlug                            // wir übergeben hier den Wert, der in die url eingegeben wurde -> querySlug
    )

    const currentIndex = volumes.findIndex(
        ({slug }) => slug === querySlug
    )

    // console.log("Current Volume: ", currentVolume);
    console.log("Current Index: ", currentIndex);
    console.log("Volumes: ", volumes);


    if(!currentVolume) {
        return null
    }

    const{ title, description, books, cover } = currentVolume      // hier destructuren wir currentVolume

    return ( 
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <h1>{title}</h1>
         
        <Link href="/volumes">Back to all volumes</Link>
        
        <p>{description}</p>
        <ul>
            {books.map((book) => {
            return <li key={book.ordinal}>{book.ordinal} : {book.title}</li>
            })}  
        </ul> 
        <Image
            src={cover}
            height={230}
            width={140}
            alt={`image of ${title}`}
        ></Image>

            {currentIndex > 0 && (
                    <div>
                        <Link href={`/volumes/${volumes[currentIndex - 1].slug}`}>{`Previous volume: ${volumes[currentIndex - 1].title}`}</Link>
                    </div>
                )
            } 


            {currentIndex < volumes.length - 1 && (
                    <div>
                        <Link href={`/volumes/${volumes[currentIndex + 1].slug}`}>{`Next volume: ${volumes[currentIndex + 1].title}`}</Link>
                    </div>
                )
            } 
    </>
    );
}
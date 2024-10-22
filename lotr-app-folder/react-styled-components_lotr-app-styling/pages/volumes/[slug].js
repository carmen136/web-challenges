import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import { arrowLeft } from "../../design-resources/icons/arrow-left.svg";
import { arrowRight } from "../../design-resources/icons/arrow-right.svg";
import { chevronLeft} from "../../design-resources/icons/chevron-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  const Background = styled.div`
  background-color: ${color};
`;

  return (
    <Background>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            {arrowLeft} Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} {arrowRight}
          </Link>
        </div>
      ) : null}
    </Background>
  );
}



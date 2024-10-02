import "./Tag.css";

export default function Tag({ tag }) {
  // überprüfen ob der Tag "admin" ist:
  const classHighlight = tag === "admin" ? "tag--highlight" : "";

  return <li className={`tag ${classHighlight}`}>{tag}</li>;
}

import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
import { USERS } from "../db";

export default function Card() {
  return (
    <>
    {USERS.map((user) => {
      return (
      <article key={user.id} className="card">
        <h2>{user.name}</h2>
        <ul className="card__taglist">
        {user.roles.map((role, index) => {
          return (
          <Tag key={index} tag={role} />
        )})
        }
        </ul>
        <p>{user.about}</p>
        <Button>edit</Button>
        <Button buttonType="danger">invoice</Button>
      </article>
      )
    })}
  </>
  );
}
  


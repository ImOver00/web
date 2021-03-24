import Admonition from "../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>El ${name} Hadhi tebda be lower-case lettre</p>
    </Admonition>
  );
}

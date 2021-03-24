import Admonition from "../../Admonition";

export default function WarningVersion({
  version,
  name = "function",
}: {
  version: string;
  name: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        El {name} hadhi zadouha fel version {version} mta3 samp w mahach bach te5dem fi ay
        version a9dam men haki.
      </p>
    </Admonition>
  );
}

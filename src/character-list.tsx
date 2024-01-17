import { useState } from "react";
import { Character, defaultCharacter, updateOldCharacter } from "./character";
import { TextareaControl } from "./components";

type CharacterListProps = {
  characters: Character[];
  selectCharacter: (index: number) => void;
  addCharacter: (char: Character) => void;
};

export const CharacterList = ({
  characters,
  selectCharacter,
  addCharacter,
}: CharacterListProps) => {
  const [importedChar, setImportedChar] = useState("");
  return (
    <div>
      <ul>
        {characters.map((char, index) => (
          <li key={index}>
            <button onClick={() => selectCharacter(index)}>
              {char.characterInformationList.characterName || "Unnamed"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => addCharacter(defaultCharacter())}>
        Add new character
      </button>
      <div>
        <TextareaControl
          label="Paste the json of the character you want to import here"
          value={importedChar}
          setValue={setImportedChar}
        />
        <button
          onClick={() => {
            addCharacter(updateOldCharacter(JSON.parse(importedChar)));
            setImportedChar("");
          }}
        >
          Import character
        </button>
      </div>
    </div>
  );
};

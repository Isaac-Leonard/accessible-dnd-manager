import * as React from "react";

import { Character, updateOldCharacter } from "./character";
import { CharacterViewer } from "./character-viewer";
import { CharacterList } from "./character-list";

export default function App() {
  const [characters, setCharacters] = React.useState(getStoredCharacters());
  const [currentCharacter, setCurrentCharacter] = React.useState<number | null>(
    null
  );

  return (
    <div>
      <div>
        <h1>Dnd character manager (Beta)</h1>
      </div>
      {currentCharacter !== null ? (
        <CharacterViewer
          character={characters[currentCharacter]}
          setCharacter={(char) => {
            characters[currentCharacter] = char;
            localStorage.setItem(storage_key, JSON.stringify(characters));
            setCharacters([...characters]);
          }}
          back={() => setCurrentCharacter(null)}
        />
      ) : (
        <CharacterList
          characters={characters}
          selectCharacter={setCurrentCharacter}
          addCharacter={(char) => {
            characters.push(char);
            localStorage.setItem(storage_key, JSON.stringify(characters));
            setCharacters([...characters]);
            setCurrentCharacter(characters.length - 1);
          }}
        />
      )}
    </div>
  );
}

const storage_key = "character_sheets";

const getStoredCharacters = (): Character[] => {
  const json = localStorage.getItem(storage_key) ?? "[]";
  localStorage.setItem(storage_key + "v1", json);
  return JSON.parse(json).map(updateOldCharacter);
};

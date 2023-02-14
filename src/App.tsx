import { useState } from "react";
import words from "./wordsList.json";
import { HangmanBody } from "./HangmanBody";
import { Word } from "./Word";
import { Input } from "./Input";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guestLetters, setGuestLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Win Lose</div>
      <HangmanBody />
      <Word />
      <Input />
    </div>
  );

  return <h3>Hello</h3>;
}

export default App;

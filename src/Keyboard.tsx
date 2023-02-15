import styles from "./KeyboardStyles.module.css";

const KEYBOARD_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem ",
      }}
    >
      {KEYBOARD_LETTERS.map((key) => {
        const isInactive = activeLetters.includes(key);
        const isActive = activeLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}${
              isInactive ? styles.active : ""
            }`}
            disabled={isInactive || isActive}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

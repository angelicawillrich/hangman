import { useCallback, useEffect, useState } from "react";
import words from "./assets/data/wordList.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import "./index.css";
import { Modal } from "./components/modal";

export function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const testWord = searchParams.get("testWord");

  const [wordToGuess, setWordToGuess] = useState(testWord || getWord());

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  const reset = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord());
  };

  return (
    <div className="flex flex-col max-w-[800px] gap-8 my-0 mx-2 items-center justify-center">
      <h1 data-testid="title" className="text-6xl">
        Hangman
      </h1>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className="w-full items-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessLetter={addGuessedLetter}
        />
      </div>
      <Modal isOpen={isWinner || isLoser} onClose={reset}>
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-semibold">
            {isWinner && "Winner!"}
            {isLoser && "Nice try!"}
          </h1>
          <p>
            {isWinner && "Play again."}
            {isLoser && "Try again."}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;

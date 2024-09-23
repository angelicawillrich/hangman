type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex w-full gap-1 text-7xl font-bold font-mono uppercase justify-center">
      {wordToGuess.split("").map((letter, index) => (
        <span
          className="min-w-16 h-20 text-center border-b-[.5rem] border-solid border-black"
          key={index}
        >
          <span
            className={`
              ${guessedLetters.includes(letter) || reveal ? "visible" : "hidden"}
              ${!guessedLetters.includes(letter) && reveal ? "text-red-800" : "text-black"}
            `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

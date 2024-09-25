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
    <div
      data-testid="hangman_word"
      className="flex md:max-w-[800px] max-w-[400px] gap-1 md:text-7xl text-4xl font-bold font-mono uppercase justify-center"
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          className="md:min-w-16 min-w-8 md:h-20 h-11 text-center border-b-[.5rem] border-solid border-black"
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

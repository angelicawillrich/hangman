import keys from "../assets/data/lettersList.json";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean;
  addGuessLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  disabled = false,
  addGuessLetter,
}: KeyboardProps) {
  return (
    <div
      data-testid="keyboard"
      className="md:max-w-[800px] max-w-[400px] grid grid-cols-[repeat(auto-fit,minmax(55px,1fr))] gap-4"
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessLetter(key)}
            className={`
              w-full border-2 border-black rounded-lg bg-none aspect-square text-4xl uppercase p-2 cursor-pointer text-black
              ${isActive ? "bg-blue-300 text-white" : ""}
              ${isInactive ? "opacity-[.3]" : ""}
              ${!(isInactive || isActive || disabled) ? "hover:bg-blue-300" : ""}
              `}
            key={key}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

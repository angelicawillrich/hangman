import styles from "./Keyboard.module.css"
import keys from "../assets/data/lettersList.json"

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    disabled: boolean
    addGuessLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, disabled = false, addGuessLetter }: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
        <button
            onClick={() => addGuessLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
            key={key}
            disabled={isInactive || isActive || disabled}
        >
            {key}
        </button>
    )
      })}
    </div>
  )
}
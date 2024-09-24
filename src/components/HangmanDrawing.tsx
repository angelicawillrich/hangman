const HEAD = (
  <div
    data-testid="head"
    className="w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[50px] right-[-20px]"
  />
);

const BODY = (
  <div
    data-testid="body"
    className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0"
  />
);

const RIGHT_ARM = (
  <div
    data-testid="right_arm"
    className="w-[100px] h-[10px] bg-black absolute top-28 right-[-90px] rotate-[-30deg]"
  />
);

const LEFT_ARM = (
  <div
    data-testid="left_arm"
    className="w-[100px] h-[10px] bg-black absolute top-28 right-0 rotate-[30deg]"
  />
);

const RIGHT_LEG = (
  <div
    data-testid="right_leg"
    className="w-[100px] h-[10px] bg-black absolute top-[235px] right-[-70px] rotate-[60deg]"
  />
);

const LEFT_LEG = (
  <div
    data-testid="left_leg"
    className="w-[100px] h-[10px] bg-black absolute top-[235px] right-[-20px] rotate-[-60deg]"
  />
);

const HANG = (
  <div data-testid="hang">
    <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
    <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
    <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
    <div className="h-[10px] w-[250px] bg-black" />
  </div>
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div data-testid="hangman" className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {HANG}
    </div>
  );
}

import { Jedi } from "./types";

export const engageGrevious = () => {
  console.log("Hello there");
  console.log("'General Kenobi!'");
};

export const initializeJedi = ({
  firstName,
  lastName,
  lightsaberColour,
  ageArrived,
  isDarkSide,
}: Jedi) => {
  console.log(
    `My name is ${firstName} ${lastName}, I was brought to the temple at ${ageArrived} years old and I wield a ${lightsaberColour} lightsaber.`,
  );

  if (isDarkSide) {
    console.log("I am the Dark Lord Sidious Luminara.");
  } else {
    console.log("I am a Jedi Knight.");
  }
};

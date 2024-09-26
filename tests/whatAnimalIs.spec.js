//Sounds functions
import { whatAnimalIs } from "../src/functions/soundsFunctions.js";

//DATA

//To identify the names of sounds and names of animals
const sounds = [
  { animal: "frog", sounds: ["brr", "birip", "brrah", "croac"] },
  { animal: "dragonfly", sounds: ["fiu", "plop", "pep"] },
  { animal: "cricket", sounds: ["cric-cric", "trri-trri", "bri-bri"] },
];

test("whatAnimalIs should return the name of the animal that are making the given sound: ", () => {
  const expected = "frog";

  // Brr is the sound and "sounds" have all the sounds and animals
  const result = whatAnimalIs("brr", sounds);

  // Assert
  expect(result).toBe(expected);
});

test("whatAnimalIs should return the name of the animal that are making the given sound: ", () => {
  const expected = "dragonfly";

  // Brr is the sound and "sounds" have all the sounds and animals
  const result = whatAnimalIs("fiu", sounds);

  // Assert
  expect(result).toBe(expected);
});

test("whatAnimalIs should return the name of the animal that are making the given sound: ", () => {
  const expected = "cricket";

  // Brr is the sound and "sounds" have all the sounds and animals
  const result = whatAnimalIs("cric-cric", sounds);

  // Assert
  expect(result).toBe(expected);
});

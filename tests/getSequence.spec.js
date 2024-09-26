//Sounds functions
import { getSequence } from "../src/functions/soundsFunctions.js";

//DATA

//All the songs sequences
const songs = [
  ["brr", "fiu", "cric-cric", "brrah"],
  ["pep", "birip", "trri-trri", "croac"],
  ["bri-bri", "plop", "cric-cric", "brrah"],
];

test("getSequence should return the following sequence after the given sound: ", () => {
  const expected = ["cric-cric", "brrah"];

  const song = songs[0];

  // Brr is the sound and "sounds" have all the sounds and animals
  const result = getSequence("fiu", song);

  // Assert
  expect(result).toEqual(expected);
});

test("getSequence should return the following sequence after the given sound: ", () => {
  const expected = ["birip", "trri-trri", "croac"];

  const song = songs[1];

  // Brr is the sound and "sounds" have all the sounds and animals
  const result = getSequence("pep", song);

  // Assert
  expect(result).toEqual(expected);
});

test("getSequence should return the following sequence after the given sound: ", () => {
  const expected = ["plop", "cric-cric", "brrah"];

  const song = songs[2];

  // Brr is the sound and "sounds" have all the sounds and animals
  const result = getSequence("bri-bri", song);

  // Assert
  expect(result).toEqual(expected);
});

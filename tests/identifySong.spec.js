//Sounds functions
import {
    identifySong,
    getSequence,
    whatAnimalIs,
  } from "../src/functions/soundsFunctions.js";
  
  //DATA
  
  //All the songs sequences
  const songs = [
    ["brr", "fiu", "cric-cric", "brrah"],
    ["pep", "birip", "trri-trri", "croac"],
    ["bri-bri", "plop", "cric-cric", "brrah"],
  ];
  
  //To identify the names of sounds and names of animals
  const sounds = [
    { animal: "frog", sounds: ["brr", "birip", "brrah", "croac"] },
    { animal: "dragonfly", sounds: ["fiu", "plop", "pep"] },
    { animal: "cricket", sounds: ["cric-cric", "trri-trri", "bri-bri"] },
  ];
  
  test("identifySong should return the song of the given sound: ", () => {
    const expected = ["brr", "fiu", "cric-cric", "brrah"];
  
    // Brr is the sound and "sounds" have all the sounds and animals
    const result = identifySong("fiu", songs);
  
    // Assert
    expect(result).toEqual(expected);
  });

  test("identifySong should return the song of the given sound: ", () => {
    const expected = ["pep", "birip", "trri-trri", "croac"];
  
    // Brr is the sound and "sounds" have all the sounds and animals
    const result = identifySong("pep", songs);
  
    // Assert
    expect(result).toEqual(expected);
  });

  test("identifySong should return the song of the given sound: ", () => {
    const expected = ["bri-bri", "plop", "cric-cric", "brrah"];
  
    // Brr is the sound and "sounds" have all the sounds and animals
    const result = identifySong("bri-bri", songs);
  
    // Assert
    expect(result).toEqual(expected);
  });
  
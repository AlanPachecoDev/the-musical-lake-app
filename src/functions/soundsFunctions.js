function identifySong(soundToFind, songs) {
  //For example if the sound is in first or second song
  return songs.find((song) => {
    if (song.some((sound) => sound === soundToFind)) {
      return song;
    }
  });
}

function getSequence(soundToFind, song) {
  //After I get the following elements of the song (before the selected song)
  return song.slice(song.indexOf(soundToFind) + 1);
}

function whatAnimalIs(soundToCompare, sounds) {
  for (const animal of sounds) {
    if (animal.sounds.some((sound) => soundToCompare === sound)) {
      return animal.animal;
    }
  }
}

export { identifySong, getSequence, whatAnimalIs };

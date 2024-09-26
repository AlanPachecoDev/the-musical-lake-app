<template>
  <h1 class="titles">The Musical Lake</h1>
  <h3 class="titles">Select A First sound...</h3>
  <div class="sounds">
    <div class="animal" v-for="animal in sounds" :key="animal.animal">
      <soundComponent @click="predictSong(sound)" class="sound" :msg="sound" v-for="sound in animal.sounds" :key="sound"
        :ref="sound" />
    </div>
  </div>

  <div v-if="showResponse" class="response">
    <h1 class="titles">Following Sequence</h1>
    <div class="animal">
      <soundComponent class="sound" :msg="sound" v-for="sound in sequence" :key="sound"
        style="cursor: pointer; border-color: rgb(71, 181, 44);" />
    </div>
    <h2 class="titles">Sound Selected</h2>
    <soundComponent class="sound" :msg="soundSelected" style="cursor: pointer; border-color: rgb(40, 240, 250);" />
  </div>
</template>

<script>
import soundComponent from './components/soundComponent.vue'

//Sounds functions 
import { identifySong, getSequence, whatAnimalIs } from './functions/soundsFunctions.js';

export default {
  name: 'App',
  components: {
    soundComponent
  },
  data() {
    return {
      //To identify the names of sounds and names of animals
      sounds: [
        { animal: "frog", sounds: ["brr", "birip", "brrah", "croac"] },
        { animal: "dragonfly", sounds: ["fiu", "plop", "pep"] },
        { animal: "cricket", sounds: ["cric-cric", "trri-trri", "bri-bri"] },
      ],
      //Audio media
      audio: {
        frog: {},
        dragonfly: {},
        cricket: {},
      },
      //All the songs sequences
      songs: [
        ["brr", "fiu", "cric-cric", "brrah"],
        ["pep", "birip", "trri-trri", "croac"],
        ["bri-bri", "plop", "cric-cric", "brrah"],
      ],
      //To show or hide the result
      showResponse: false,
      //Sequence to show as result
      sequence: [],
      //Actual audio source to play with audio player
      audioSource: "",
      //It reproduces the audio
      audioPlayer: new Audio(),
      //Current selection
      soundSelected: "",
    }
  },
  mounted() {
    // base url of the project
    const baseUrl = process.env.BASE_URL || '/';

    // Folder of sounds
    const audioPath = baseUrl + 'sounds/';

    // FROG sounds
    this.audio.frog["brr"] = audioPath + 'brr.aac';
    this.audio.frog["birip"] = audioPath + 'birip.mp3';
    this.audio.frog["brrah"] = audioPath + 'brrah.aac';
    this.audio.frog["croac"] = audioPath + 'croac.aac';

    // Dragonfly sounds
    this.audio.dragonfly["fiu"] = audioPath + 'fiu.aac';
    this.audio.dragonfly["plop"] = audioPath + 'plop.aac';
    this.audio.dragonfly["pep"] = audioPath + 'pep.aac';

    // Cricket sounds
    this.audio.cricket["cric-cric"] = audioPath + 'cric-cric.aac';
    this.audio.cricket["trri-trri"] = audioPath + 'trri-trri.aac';
    this.audio.cricket["bri-bri"] = audioPath + 'bri-bri.aac';

  },
  methods: {
    predictSong(soundToFind) {
      //To show the selected sound
      this.soundSelected = soundToFind;
      //Allows me to show or hide the response sequence in the bottom
      this.showResponse = false;

      //What is the song of the selected sound
      const song = identifySong(soundToFind, this.songs);

      //Get the following sequence of the selected sound
      this.sequence = getSequence(soundToFind, song);

      //Set all the cards of sound with the original color

      // $refs is an attribute of the component that allows me to get the html components
      for (let ref in this.$refs) {
        //Retrieve the component using 
        let componentElement = this.$refs[ref];
        componentElement[0].$el.style.borderColor = "rgba(152, 238, 255, 0.352)";
      }

      //To make the color of following sequence cards more dark
      let colorTransp = 0.4;
      //To change the color of following sequence
      this.sequence.forEach((sound, index) => {
        //Delay between each sound reproduction
        const iterationDelay = index * 2000;

        // This promise will be resolved in "iterationDelay" time, so I can make
        // some simular thing than sleep function
        const pause = new Promise(resolve => setTimeout(resolve, iterationDelay));

        //This code starts whent the promise is resolved
        pause.then(() => {
          //Per each iteration I recieve a sound of the sequence
          //Whith this sound i can retrieve the html ref 
          let componentElement = this.$refs[sound];

          //With this ref I can chamge the color of the following cards of the given sequence
          componentElement[0].$el.style.borderColor = `rgba(255, 0, 0, ${colorTransp})`;

          //I use that to make more dark the color
          colorTransp += 0.3;

          //In this way I can know what animal is giving the sound
          let animal = whatAnimalIs(sound, this.sounds);

          //Here I retrieve the path of the sound giving the animal and the name of the sound
          this.audioSource = this.audio[animal][sound];

          //Here I change the src to the path
          this.audioPlayer.src = this.audioSource;
          
          //to start in time zero
          this.audioPlayer.currentTime = 0;

          //Play the sound
          this.audioPlayer.play();

        });
      });

      //show the response section
      this.showResponse = true;
    }
  }
}

</script>

<style>
.titles {
  color: white;
}

.response {
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sounds {
  /* Contiene todos los sonidos de todos los animales */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Cada div de cada animal es flexible en una cuadricula */
  flex-wrap: wrap;
  gap: 2%;

  /* Tamaño del contendor */
  width: 60%;

  height: 30vh;
}

.animal {
  /* Internamente cada animal también está en una cuadricula flexible */
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1 0 30%;

  flex-wrap: wrap;
  gap: 5%;
}

.sound {
  /* This is the width for each sound of each animal */
  flex: 1 0 100px;
  margin-bottom: 4%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* Centra el contenido horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1800px;
}

body {
  margin: 0px;
  background-color: black;
  display: flex;
  justify-content: center;
}
</style>

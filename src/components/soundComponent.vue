<template>
  <div class="card">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'soundsComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  width: 100px;

  height: 35px;
  
  
  background-color: rgb(44, 43, 43);
  border: 1px solid rgba(152, 238, 255, 0.352);
  color: rgb(152, 145, 145);
  font-size: 20px;

  border-radius: 5px;
}

.card:hover{
  cursor: pointer;
}

</style>

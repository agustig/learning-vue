<script setup>
import Parent from "./Components/Parent.vue";
</script>

<template>
  <main :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }">
    <Parent />
  </main>
</template>

<style scoped>
main {
  background-color: rgb(122, 50, 255);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>

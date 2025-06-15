<script setup>
import { useNumbers } from "../stores/numbers";
import GrandChild from "./GrandChild.vue";

const { numbers, addNumber } = useNumbers();
</script>

<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
    <button @click="addNumber">
      Add
    </button>
    <div class="line" />
    <GrandChild />
  </div>
</template>

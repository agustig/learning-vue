<script setup>
import { useNumbers } from "../stores/numbers";

const { filterNumber } = useNumbers();
</script>

<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ filterNumber(14) }}
  </div>
</template>

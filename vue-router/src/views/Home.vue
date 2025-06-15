<script setup>
import { RouterLink } from "vue-router";
import products from "../data/products.json";
</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="product">
      <RouterLink
        v-for="product in products"
        :key="product.id" :to="`/products/${product.id}`"
      >
        {{ product.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.product {display: flex;gap: 10px;padding: 10px;
}
</style>

<script setup>
import { RouterView, useRoute, useRouter } from "vue-router";
import products from "../data/products.json";

const route = useRoute();
const router = useRouter();
const productId = Number.parseInt(route.params.id);

const product = products.find(product => product.id === productId);

function showOwner() {
  router.push({ name: "owner", params: { id: productId },
  });
}
</script>

<template>
  <div v-if="product">
    <h1>Product</h1><div>
      <h2>{{ product.name }} - {{ product.price }}</h2>
      <p>Year: {{ product.year }}</p>
      <button @click="showOwner">
        Show Owner
      </button>
      <RouterView />
    </div>
  </div>
  <div v-else>
    <h1>Product not found</h1>
  </div>
</template>

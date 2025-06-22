<script setup>
import axios from "axios";
import { ref, watchEffect } from "vue";
import Pagination from "@/components/Pagination.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductForm from "@/components/ProductForm.vue";

const products = ref([]);
const page = ref(1);
const limit = ref(8);

async function fetchData() {
  const API_URL = `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`;
  try {
    const response = await axios.get(API_URL);
    products.value = response.data;
  }
  catch (error) {
    console.error(error);
  }
}

watchEffect(() => {
  fetchData();
});

function changePage(newPage) {
  if (newPage < 1)
    return;
  if (newPage > products.value.pages)
    return;
  page.value = newPage;
}

async function createProduct(product) {
  try {
    await axios.post("http://localhost:3000/products", product);
    fetchData();
  }
  catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <main>
    <ProductForm @create-product="createProduct" />
    <div class="product-grid">
      <!-- Product 1 -->
      <ProductCard
        v-for="product in products.data"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="pagination">
      <Pagination
        :page="page"
        :total-pages="products.pages"
        @change-page="changePage"
      />
    </div>
  </main>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
  margin: 0 auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>

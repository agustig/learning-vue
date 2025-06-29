<script setup>
import { computed, defineEmits, ref, watchEffect } from "vue";

const props = defineProps({
  product: Object,
});

const emit = defineEmits(["createProduct", "updateProduct"]);
const title = ref("");
const description = ref("");
const price = ref("");
const image = ref("");

watchEffect(() => {
  title.value = props.product?.title;
  description.value = props.product?.description;
  price.value = props.product?.price;
  image.value = props.product?.image;
});

const showForm = ref(false);
const isUpdate = computed(() => !!props.product);

function saveProduct() {
  const formData = {
    title: title.value,
    description: description.value,
    price: price.value,
    image: image.value,
  };

  if (isUpdate.value) {
    emit("updateProduct", formData);
  }
  else {
    emit("createProduct", formData);
  }
}
</script>

<template>
  <div class="form-container">
    <button @click="showForm = !showForm">
      {{ isUpdate ? "Edit" : "Add" }} Product
    </button>
    <div v-if="showForm" class="product-form">
      <form @submit.prevent="saveProduct">
        <label for="title">Title:</label>
        <input id="title" v-model="title" type="text" required>
        <label for="description">Description:</label>
        <input id="description" v-model="description" type="text" required>
        <label for="price">Price:</label>
        <input id="price" v-model="price" type="number" required>
        <label for="image">Image:</label>
        <input id="image" v-model="image" type="text" required>
        <button type="submit">
          Save
        </button>
        <button type="button" @click="showForm = false">
          Close
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.form-container button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.form-container button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.form-container button:focus {
  outline: none;
}

.form-container button:active {
  transform: translateY(1px);
  background-color: #1e7e34;
}

.product-form {
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}

.product-form label {
  display: block;
  margin-bottom: 5px;
}

.product-form input[type="text"],
.product-form input[type="number"] {
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product-form button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-form button:hover {
  background-color: #0056b3;
}

.product-form button[type="submit"] {
  background-color: #28a745;
}

.product-form button[type="submit"]:hover {
  background-color: #218838;
}

.product-form button[type="button"] {
  background-color: #dc3545;
}

.product-form button[type="button"]:hover {
  background-color: #c82333;
}
</style>

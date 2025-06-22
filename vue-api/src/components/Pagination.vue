<script setup>
const props = defineProps({
  page: Number,
  totalPages: Number,
});

const emit = defineEmits(["changePage"]);

function changePage(newPage) {
  emit("changePage", newPage);
}
</script>

<template>
  <button
    v-show="props.page > 1"
    id="prevPage"
    class="pagination-button"
    @click="changePage(props.page - 1)"
  >
    &lt;
  </button>
  <span>Page {{ props.page }} of {{ props.totalPages }}</span>
  <button
    v-show="props.page < props.totalPages"
    id="nextPage"
    class="pagination-button"
    @click="changePage(props.page + 1)"
  >
    &gt;
  </button>
</template>

<style scoped>
.pagination-button {
  background-color: #fff;
  color: #00b894;
  padding: 8px 12px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
}
</style>

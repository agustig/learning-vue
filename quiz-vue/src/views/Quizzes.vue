<script setup>
import { ref, watch } from "vue";
import QuizCard from "@/components/QuizCard.vue";
import srcQuiz from "@/data/quizzes.json";

const quizzes = ref(srcQuiz);
const search = ref("");

watch(search, () => {
  quizzes.value = srcQuiz.filter(quiz =>
    quiz.title.toLowerCase().includes(search.value.toLowerCase()),
  );
});
</script>

<template>
  <header>
    <h1 id="title">
      QuizVue
    </h1>
    <input
      id="search-input" v-model.trim="search" type="text"
      placeholder="Search"
    >
  </header>
  <section id="quiz-container">
    <QuizCard v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
  </section>
  <Quiz />
</template>

<style scoped>
header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color: #c9c9c9a9;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>

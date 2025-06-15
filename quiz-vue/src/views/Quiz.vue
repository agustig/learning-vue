<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizResult from "@/components/QuizResult.vue";
import quizzes from "../data/quizzes.json";

const route = useRoute();
const quizId = Number.parseInt(route.params.id);
const quiz = quizzes.find(q => q.id === quizId);
const numberOfCorrectAnswer = ref(0);
const currentQuestionIndex = ref(0);
const showResult = ref(false);

const questionCount = computed(() =>
  `${currentQuestionIndex.value + 1}/${quiz.questions.length}`,
);
const barPercentage = computed(() =>
  `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`,
);

function onSelectOption(option) {
  if (option.correct) {
    numberOfCorrectAnswer.value++;
  }

  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }

  currentQuestionIndex.value++;
}
</script>

<template>
  <QuizHeader :question-count="questionCount" :bar-percentage="barPercentage" />
  <QuizContent
    v-if="!showResult"
    :question="quiz.questions[currentQuestionIndex]"
    @select-option="onSelectOption"
  />
  <QuizResult
    v-else
    :question-length="quiz.questions.length"
    :number-of-correct-answer="numberOfCorrectAnswer"
  />
</template>

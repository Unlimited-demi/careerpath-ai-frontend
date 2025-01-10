<template>
  <div v-if="!dataLoaded" class="flex items-center justify-center min-h-screen">
    <span class="text-xl font-bold">
      Step {{ currentStage }} of 5:
      <template v-if="currentStage === 1">Parsing resume data...</template>
      <template v-else-if="currentStage === 2">Analyzing career goals...</template>
      <template v-else-if="currentStage === 3">Matching skills...</template>
      <template v-else-if="currentStage === 4">Preparing recommendations...</template>
      <template v-else>Finalizing results...</template>
    </span>
  </div>

  <div v-else class="bg-gray-100 min-h-screen py-8 px-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Results</h1>
    <div class="max-w-5xl mx-auto space-y-6">
      <SkillsAssessment></SkillsAssessment>
      <LearningRecommendations></LearningRecommendations>
      <FeedbackForm></FeedbackForm>
      <div class="mt-4">
        <router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const dataLoaded = ref(false);
const currentStage = ref(1);
import SkillsAssessment from '../components/SkillsAssessment.vue';
import LearningRecommendations from '../components/LearningRecommendations.vue';
import FeedbackForm from '../components/FeedbackForm.vue';

onMounted(() => {
  const stageInterval = setInterval(() => {
    if (currentStage.value < 5) {
      currentStage.value++;
    } else {
      clearInterval(stageInterval);
      dataLoaded.value = true;
    }
  }, 1000);
});
</script>
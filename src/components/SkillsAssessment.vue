<template>
  <div class="bg-white shadow-lg rounded-lg p-6 my-4">
    <h2 class="text-2xl font-bold mb-4">Skills Assessment</h2>
    <template v-if="loading">
      <div>Loading...</div>
    </template>
    <template v-else-if="error">
      <div class="text-red-500">Error: {{ error }}</div>
    </template>
    <template v-else>
      <div v-if="skills.length > 0">
        <p class="mb-2">Based on your resume:</p>
        <ul class="list-disc list-inside">
          <li v-for="(skill, index) in skills" :key="index">
            {{ skill }}
          </li>
        </ul>
        <template v-if="skillGaps.length > 0">
          <p class="mt-2">
            <span class="font-bold">Potential skill gaps:</span>
          </p>
          <ul class="list-disc list-inside">
            <li v-for="(gap, index) in skillGaps" :key="index">
              {{ gap }}
            </li>
          </ul>
        </template>
        <template v-else>
          <p class="mt-2">No skill gaps found.</p>
        </template>

        <div v-if="strengths.length > 0" class="mt-4">
          <h3 class="font-bold">Your Strengths:</h3>
          <ul class="list-disc list-inside">
            <li v-for="(str, index) in strengths" :key="index">
              {{ str }}
            </li>
          </ul>
        </div>

        <div v-if="developmentAreas.length > 0" class="mt-4">
          <h3 class="font-bold">Areas for Development:</h3>
          <ul class="list-disc list-inside">
            <li v-for="(dev, index) in developmentAreas" :key="index">
              {{ dev }}
            </li>
          </ul>
        </div>

        <div v-if="potentialPaths.length > 0" class="mt-4">
          <h3 class="font-bold">Potential Career Paths:</h3>
          <ul class="list-disc list-inside">
            <li v-for="(path, index) in potentialPaths" :key="index">
              {{ path }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="text-gray-700">No skills found yet</div>
    </template>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const skills = ref([]);
const skillGaps = ref([]);
const strengths = ref([]);
const developmentAreas = ref([]);
const potentialPaths = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchSkillsAssessment = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.get(`${API_BASE_URL}/assessment/skills`);
    const geminiSkills = response.data?.geminiSkills;

    skills.value = geminiSkills?.skills || [];
    skillGaps.value = geminiSkills?.skillGaps || [];
    strengths.value = geminiSkills?.strengths || [];
    developmentAreas.value = geminiSkills?.development_areas || [];
    potentialPaths.value = geminiSkills?.potential_paths || [];
  } catch (e) {
    error.value = e.response?.data?.message || 'Failed to fetch skills assessment';
    console.error('Error fetching skills assessment:', e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchSkillsAssessment();
});
</script>

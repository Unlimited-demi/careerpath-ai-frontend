<template>
    <div class="px"></div>
    <div class="bg-white shadow-lg rounded-lg p-6 my-4">
        <h2 class="text-2xl font-bold mb-4">Learning Recommendations</h2>
       <template v-if="loading">
           <div>Loading...</div>
        </template>
        <template v-else-if="error">
            <div class="text-red-500">Error: {{ error }}</div>
        </template>
         <template v-else>
            <div v-if="recommendations.length > 0">
               <ul class="list-disc list-inside">
                <li v-for="(rec, index) in recommendations" :key="index" class="mb-4">
                    <template v-if="rec.link">
                        <a :href="rec.link" target="_blank" class="font-bold text-blue-500 hover:underline">
                            {{ rec.title }}
                        </a>
                    </template>
                    <template v-else>
                        <span class="font-bold">{{ rec.title }}</span>
                    </template>
                    <p class="text-gray-700">{{ rec.description }}</p>
                    <!-- <a :href="rec.link" target="_blank" class="text-red-500 hover:underline">{{ rec.link }}</a> -->
                </li>
             </ul>
           </div>
             <div v-else class="text-gray-700">No learning recommendations available yet.</div>
          </template>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const recommendations = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchRecommendations = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get(`${API_BASE_URL}/assessment/recommendations`);
    const geminiRecommendations = response.data?.geminiRecommendations;
    recommendations.value = geminiRecommendations?.recommendations || [];
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to fetch learning recommendations';
    console.error('Error fetching learning recommendations:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchRecommendations();
});
</script>

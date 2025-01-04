<template>
   

        <div class=" h-full w-full bg-gray-100">
            
            <!-- <UserProfile></UserProfile> -->
            <SkillsAssessment></SkillsAssessment>
            <LearningRecommendations></LearningRecommendations>
            <FeedbackForm></FeedbackForm>
            <div class="mt-4">
                 <router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Home</router-link>
            </div>
        </div>
    
    
</template>

<script setup>
// import UserProfile from '../components/UserProfile.vue';
import SkillsAssessment from '../components/SkillsAssessment.vue';
import LearningRecommendations from '../components/LearningRecommendations.vue';
import FeedbackForm from '../components/FeedbackForm.vue';
</script>
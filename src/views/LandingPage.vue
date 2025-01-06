<template>
  <!-- Main container -->
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <!-- Navigation Bar -->
    

    <!-- Hero Section -->
    <section class="flex-grow flex flex-col items-center justify-center p-8">
      <div class="max-w-4xl text-center">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to CareerPath AI
        </h1>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Discover your strengths, identify skill gaps, and chart a personalized route
          to professional success. Explore custom recommendations for continuous
          learning, all in one place. 
        </p>
        <router-link
          to="/home"
          class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300"
        >
          Get Started
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Icon 1 -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Smart Analysis</h3>
            <p class="text-gray-600">
              Automated resume parsing to identify your current strengths and skill gaps.
            </p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Icon 2 -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"/>
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Career Roadmap</h3>
            <p class="text-gray-600">
              Personalized recommendations to guide your professional development.
            </p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Icon 3 -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536M3 6h.01M5.636 18.364L9.172 14.828" />
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Progress Tracking</h3>
            <p class="text-gray-600">
              Keep track of your learning steps and see how you improve over time.
            </p>
          </div>
        </div>
        <!-- Potential extra content for features -->
        <!-- <div class="text-center mt-6">
          <router-link to="/features" class="text-blue-600 hover:underline">
            Explore all features →
          </router-link>
        </div> -->
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Users Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <p class="text-gray-700 italic">
              "CareerPath AI helped me realize I needed to develop my DevOps skills
              further. Thanks to their suggestions, I landed a new role!"
            </p>
            <div class="mt-4 text-right">
              <span class="font-bold text-gray-900">- Alex P.</span>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <p class="text-gray-700 italic">
              "The skill gap analysis was spot on. I followed the recommended courses
              and saw immediate improvements in my backend development approach."
            </p>
            <div class="mt-4 text-right">
              <span class="font-bold text-gray-900">- Jordan K.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <!-- FAQ 1 -->
          <details class="bg-white shadow rounded-lg p-4">
            <summary class="font-bold text-gray-800 cursor-pointer">
              How does CareerPath AI analyze my resume?
            </summary>
            <p class="mt-2 text-gray-700 leading-relaxed">
              We use specialized NLP algorithms to extract key information from your resume, 
              which then guides our AI in identifying your strengths, skill gaps, and potential 
              career paths aligned to your goals.
            </p>
          </details>

          <!-- FAQ 2 -->
          <details class="bg-white shadow rounded-lg p-4">
            <summary class="font-bold text-gray-800 cursor-pointer">
              How accurate are the recommendations?
            </summary>
            <p class="mt-2 text-gray-700 leading-relaxed">
              Our AI models continuously improve based on user feedback and evolving 
              industry standards to ensure up-to-date and relevant suggestions.
            </p>
          </details>

          <!-- FAQ 3 -->
          <details class="bg-white shadow rounded-lg p-4">
            <summary class="font-bold text-gray-800 cursor-pointer">
              Is my data secure?
            </summary>
            <p class="mt-2 text-gray-700 leading-relaxed">
              We take data security very seriously. Your resume and personal details are not stored
               in our system and processed only as needed to provide personalized insight.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">
          Ready to Level Up Your Career?
        </h2>
        <p class="text-gray-600 mb-8">
          Upload your resume to get started. Find out exactly which skills you need to
          develop and how to get there.
        </p>
        <router-link
          to="/home"
          class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300"
        >
          Start Now
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white mt-auto py-6 shadow-inner">
      <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div class="text-sm text-gray-600">
          © 2024 CareerPath AI. All rights reserved.
        </div>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <!-- Potential social icons or footer nav -->
          <!-- <a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a> -->
          <!-- <a href="#" class="text-gray-600 hover:text-gray-900">Terms of Service</a> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// ...component logic can go here if needed...
// If you choose to add composables or reactive data, place them here

/*
  Additional placeholders or future expansions:
  1) Plan to add a store-based user login flow
  2) Could incorporate advanced animations or transitions
  3) Potentially integrate user-specific content in the hero if they're logged in
*/
</script>


<style scoped>
/* Main container styling */
.moving-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: move-dots 8s linear infinite, sparkle 4s infinite alternate;
  pointer-events: none;
}

@keyframes move-dots {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-30px, -30px);
  }
}

@keyframes sparkle {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

</style>





<template>
  <!-- Main container -->
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="flex-grow flex flex-col items-center justify-center p-8">
      <div class="max-w-4xl text-center">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-6">
          Your Personalized Career Roadmap
        </h1>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Whether you’re starting fresh, switching careers, or aiming higher, CareerPath AI helps you identify your strengths, uncover skill gaps, and create a step-by-step plan to achieve your career goals. Upload your resume or describe your experience, and we’ll guide you to success.
        </p>
        <router-link
          to="/home"
          class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300"
        >
          Get Started Now
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
          How CareerPath AI Works
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Tell Us About Yourself</h3>
            <p class="text-gray-600">
              Upload your resume or describe your skills, experience, and career goals. We’ll analyze your input to create a personalized roadmap.
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Identify Your Strengths and Gaps</h3>
            <p class="text-gray-600">
              We’ll highlight your strengths and pinpoint the exact skills you need to achieve your career goals.
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536M3 6h.01M5.636 18.364L9.172 14.828" />
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Get Actionable Recommendations</h3>
            <p class="text-gray-600">
              Receive a step-by-step plan with specific courses, projects, and resources tailored to your goals.
            </p>
          </div>
          <!-- Feature 4 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536M3 6h.01M5.636 18.364L9.172 14.828" />
            </svg>
            <h3 class="font-bold text-lg text-gray-800 mb-2">Track Your Progress</h3>
            <p class="text-gray-600">
              Stay on track with regular updates and tips to help you achieve your career goals faster.
            </p>
          </div>
        </div>
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
              "CareerPath AI helped me realize I needed to develop my DevOps skills further. Thanks to their suggestions, I landed a new role!"
            </p>
            <div class="mt-4 text-right">
              <span class="font-bold text-gray-900">- Alex P.</span>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <p class="text-gray-700 italic">
              "The skill gap analysis was spot on. I followed the recommended courses and saw immediate improvements in my backend development approach."
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
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <!-- FAQ 1 -->
          <details class="bg-white shadow rounded-lg p-4">
            <summary class="font-bold text-gray-800 cursor-pointer">
              Do I need a resume to use CareerPath AI?
            </summary>
            <p class="mt-2 text-gray-700 leading-relaxed">
              No! You can either upload your resume or describe your skills, experience, and career goals. We’ll analyze your input and provide personalized recommendations.
            </p>
          </details>
          <!-- FAQ 2 -->
          <details class="bg-white shadow rounded-lg p-4">
            <summary class="font-bold text-gray-800 cursor-pointer">
              How does CareerPath AI identify skill gaps?
            </summary>
            <p class="mt-2 text-gray-700 leading-relaxed">
              We compare your current skills and experience with the requirements of your career goal. This helps us pinpoint the exact skills you need to develop.
            </p>
          </details>
          <!-- FAQ 3 -->
          <details class="bg-white shadow rounded-lg p-4">
            <summary class="font-bold text-gray-800 cursor-pointer">
              What kind of recommendations will I receive?
            </summary>
            <p class="mt-2 text-gray-700 leading-relaxed">
              You’ll get a step-by-step plan with specific courses, projects, and resources tailored to your goals. We also provide tips and advice to help you stay on track.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">
          Ready to Take Control of Your Career?
        </h2>
        <p class="text-gray-600 mb-8">
          Stop feeling overwhelmed and start making progress. CareerPath AI is here to guide you every step of the way.
        </p>
        <router-link
          to="/home"
          class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300"
        >
          Get Started Now
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
          <!-- Social icons or footer nav can go here -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component logic can go here if needed
</script>

<style scoped>
/* Add any custom styles here */
</style>
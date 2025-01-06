<template>
  <div>
    <header class="bg-white shadow h-16 flex items-center justify-between px-6">
      <div class="flex items-center">
        <a href="/" class="flex items-center">
          <img src="/favicon.png" alt="CareerPath AI" class="h-8 w-8 mr-2" />
          <span class="text-2xl font-bold text-gray-800">
            CareerPath AI
          </span>
        </a>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-gray-600 hover:text-gray-900 font-medium">
              <img :src="homeIcon" alt="Home" class="h-6 w-6" />
            </router-link>
          </li>
          <!-- ...add more links if needed... -->
        </ul>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<script setup>
import homeIcon from '@/assets/icons8-home-24.png';
</script>


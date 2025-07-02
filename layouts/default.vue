<template>
  <header>
    <nav class="flex flex-col p-4">
      <h1 class="ml-auto text-4xl new-rocker-regular animate-old-school-wave">Daneyshalee Vargas Matojo Oquendo!</h1>
      <ul class="mt-4 flex gap-4 text-3xl m-auto new-rocker-regular">
        <li class="purple-shadow">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="purple-shadow">
          <NuxtLink to="messages">Pretty Messages</NuxtLink>
        </li>
        <li class="purple-shadow">
          <NuxtLink to="/">Stuff?</NuxtLink>
        </li>
        <li class="purple-shadow">
          <NuxtLink to="/">Other Stuff</NuxtLink>
        </li>
        <li class="purple-shadow">
          <NuxtLink to="/">Yet more Stuff</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <body class="bg-pink-300">
  <main>
    <div class="grid grid-cols-3">
      <section id="left-sidebar" class="text-center mt-9">
        <p>Test</p>
      </section>
      <section id="main-content" class="mt-9">
        <NuxtPage/>
      </section>
      <section id="right-sidebar" class="mt-9">
        <div @click="togglePastSelf">
          <audio ref="pastSelfPlayer" src="/past-self.opus" preload="auto" loop></audio>
          <div class="text-center pixelated-disc" v-bind:class="{'pixelated-spinning-disc' : pastSelfSpinning }">
          </div>
          <p class="text-center new-rocker-regular text-2xl">Past Self</p>
        </div>
        <div @click="toggleEmergence">
          <audio ref="emergencePlayer" src="/emergence.opus" preload="auto" loop></audio>
          <div class="text-center pixelated-disc" v-bind:class="{'pixelated-spinning-disc' : emergenceSpinning }">
          </div>
          <p class="text-center new-rocker-regular text-2xl">Emergence</p>
        </div>
        <div @click="toggleDamocles">
          <audio ref="damoclesPlayer" src="/damocles.opus" preload="auto" loop></audio>
          <div class="text-center pixelated-disc" v-bind:class="{'pixelated-spinning-disc' : damoclesSpinning }">
          </div>
          <p class="text-center new-rocker-regular text-2xl">Damocles</p>
        </div>
      </section>
    </div>
  </main>
  </body>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=New+Rocker&display=swap');

.new-rocker-regular {
  font-family: "New Rocker", system-ui;
  font-weight: 400;
  font-style: normal;
}

@keyframes oldSchoolWave {
  0%, 100% {
    transform: translateY(0px) skewX(0deg);
    text-shadow: 0 0 0 currentColor; /* No shadow */
  }
  25% {
    transform: translateY(-1px) skewX(0.5deg);
    text-shadow: 1px 1px 2px rgba(255, 0, 255, 0.7);
  }
  50% {
    transform: translateY(0px) skewX(-0.5deg);
    text-shadow: -1px -1px 2px rgba(0, 255, 255, 0.7);
  }
  75% {
    transform: translateY(1px) skewX(0.2deg);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  }
}

.purple-shadow {
  transition: text-shadow 0.4s ease, transform 0.2s ease-in-out;
}

.purple-shadow:hover {
  transform: translateY(-9px) rotate(6deg);
  text-shadow: 2px 2px 3px rgba(255, 0, 255, 0.7);
}

.animate-old-school-wave {
  animation: oldSchoolWave 3s infinite alternate ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.pixelated-spinning-disc {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: url('/assets/images/sleep-dics.png');
  background-size: cover;
  image-rendering: pixelated;
  margin: 20px auto;
  animation: spin 3s linear infinite;
}

.pixelated-disc {
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background-image: url('/assets/images/sleep-dics.png');
  background-size: cover;
  image-rendering: pixelated;
  margin: 20px auto;
}
</style>
<script setup lang="ts">
import {ref} from 'vue';

const pastSelfPlayer = ref<HTMLAudioElement | null>(null);
const emergencePlayer = ref<HTMLAudioElement | null>(null);
const damoclesPlayer = ref<HTMLAudioElement | null>(null);

const pastSelfSpinning = ref(false);
const emergenceSpinning = ref(false);
const damoclesSpinning = ref(false);

function togglePastSelf() {
  pastSelfSpinning.value = !pastSelfSpinning.value;

  if (pastSelfPlayer.value) {
    if (pastSelfSpinning.value) {
      pastSelfPlayer.value.play().catch(e => console.error("Error playing audio:", e));
    } else {
      pastSelfPlayer.value.pause();
    }
  }
}

function toggleEmergence() {
  emergenceSpinning.value = !emergenceSpinning.value;

  if (emergencePlayer.value) {
    if (emergenceSpinning.value) {
      emergencePlayer.value.play().catch(e => console.error("Error playing audio:", e));
    } else {
      emergencePlayer.value.pause();
    }
  }
}

function toggleDamocles() {
  damoclesSpinning.value = !damoclesSpinning.value;

  if (damoclesPlayer.value) {
    if (damoclesSpinning.value) {
      damoclesPlayer.value.play().catch(e => console.error("Error playing audio:", e));
    } else {
      damoclesPlayer.value.pause();
    }
  }
}
</script>
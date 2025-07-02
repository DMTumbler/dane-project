<template>
  <body>
  <main class="bg-pink-300">
    <header>
      <nav class="flex flex-col p-4">
        <h1 class="ml-auto text-4xl new-rocker-regular animate-old-school-wave">Daneyshalee Vargas Matojo Oquendo!</h1>
        <ul class="mt-4 flex gap-4 text-3xl m-auto new-rocker-regular">
          <li>
            <NuxtLink to="/">Pretty Messages</NuxtLink>
          </li>
          <li>Memories</li>
          <li>Stuff?</li>
          <li>Other Stuff</li>
          <li>Yet more Stuff</li>
        </ul>
      </nav>
    </header>
    <slot/>
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
    text-shadow: 0 0 0px currentColor; /* No shadow */
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
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.4);
  }
}

.animate-old-school-wave {
  animation: oldSchoolWave 3s infinite alternate ease-in-out;
}
</style>
<script setup lang="ts">
</script>
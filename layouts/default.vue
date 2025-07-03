<template>
  <header>
    <nav class="flex flex-col p-4">
      <h1 class="ml-auto text-3xl md:text-4xl lg:text-5xl new-rocker-regular animate-old-school-wave text-center"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Daneyshalee Vargas Matojo Oquendo!</a></h1>
      <div class="relative m-auto">
        <img
            src="~/assets/images/kirby.png"
            alt="A happy Kirby"
            class="hidden md:block absolute z-[-1] w-35 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-12 opacity-80"
        />

        <ul class="mt-4 flex flex-col md:flex-row gap-2 md:gap-4 text-2xl md:text-3xl lg:text-4xl m-auto new-rocker-regular text-center">
          <li class="purple-shadow">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="purple-shadow">
            <NuxtLink to="messages">Pretty Messages</NuxtLink>
          </li>
          <li class="purple-shadow">
            <NuxtLink to="spicy-gallery">Spicy Gallery</NuxtLink>
          </li>
          <li class="purple-shadow">
            <NuxtLink to="good-shit">Delicious</NuxtLink>
          </li>
          <li class="purple-shadow md:hidden lg:hidden">
            <NuxtLink to="mobile-snippets">Snippets</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <body class="from-pink-400 bg-gradient-to-l via-purple-700 to-black">
  <main>
    <div class="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-2">
      <!-- Left sidebar - hidden on mobile, shown on tablet as smaller column, full size on desktop -->
      <section id="left-sidebar" class="hidden md:block md:col-span-1 text-center mt-4 md:mt-9">
        <div class="relative">
          <a href="https://www.youtube.com/watch?v=TI4TJagzvEE"> <img
              src="~/assets/images/happy-birthday-gif-13.gif"
              alt="A happy Jigglypuff"
              class="mx-auto relative z-20"
          /></a>
          <img
              @click="playFly"
              src="~/assets/images/shedinja.png"
              alt="A happy birthday"
              class="absolute w-40 md:w-60 lg:w-80 scale-x-[-1] left-1/3 md:left-30 top-20 md:top-120 animate-old-school-wave cursor-pointer"
          />
          <audio ref="flyPlayer" src="/Fly.mp3" preload="auto"></audio>
          <a href="https://www.youtube.com/watch?v=pe5XD9Hyoj0">
          <img
              src="~/assets/images/gengar.png"
              alt="A happy birthday"
              class="z-10 relative -top-20 md:-top-161 w-32 md:w-48 lg:w-64 rotate-20 left-5 md:left-10 mx-auto scale-x-[-1] purple-shadow-opposite gengar-laughing"
          /></a>
          <img
              @click="playShadowClaw"
              src="~/assets/images/mimikyu.png"
              alt="A happy birthday"
              class="w-48 md:w-64 lg:w-96 mimikyu-marching"
          />
          <audio ref="shadowClawPlayer" src="/shadow-claw.mp3" preload="auto"></audio>
        </div>
      </section>

      <!-- Main content - full width on mobile, 2/3 on tablet, 2/4 on desktop -->
      <section id="main-content"
               class="col-span-1 md:col-span-2 lg:col-span-2 mt-4 md:mt-9 border-white border-4 md:border-8 border-double shadow-2xl bg-white/40 bg-[url('/assets/images/sleep-token-logo-4.png')] bg-no-repeat bg-contain bg-center text-base md:text-xl rounded-xl">
          <NuxtPage />
      </section>

      <!-- Right sidebar - hidden on mobile and tablet, shown on desktop -->
      <section id="right-sidebar" class="hidden lg:block lg:col-span-1 mt-9">
        <div @click="togglePastSelf" class="z-0 relative">
          <audio ref="pastSelfPlayer" src="/past-self.opus" preload="auto" loop></audio>
          <div class="text-center pixelated-disc relative"
               v-bind:class="{'pixelated-spinning-disc' : pastSelfSpinning }">
            <img
                src="~/assets/images/snorlax.png"
                alt="A happy snorlax"
                class="z-[-1] absolute w-48 lg:w-96 -top-1/7 left-3.5 rotate-370 purple-shadow-opposite"
            />
          </div>
        </div>
        <div @click="toggleEmergence">
          <audio ref="emergencePlayer" src="/emergence.opus" preload="auto" loop></audio>
          <div class="text-center pixelated-disc" v-bind:class="{'pixelated-spinning-disc' : emergenceSpinning }">
          </div>
        </div>
        <div @click="toggleDamocles" class="z-0 relative">
          <audio ref="damoclesPlayer" src="/damocles.opus" preload="auto" loop></audio>
          <div class="text-center pixelated-disc relative"
               v-bind:class="{'pixelated-spinning-disc' : damoclesSpinning }">
            <img
                src="~/assets/images/charmander.png"
                alt="A happy Kirby"
                class="z-[-1] absolute w-32 lg:w-50 -top-2/4 left-3.5 rotate-350 purple-shadow"
            />
          </div>
          <img
              src="~/assets/images/jigglypuff.png"
              alt="A happy Jigglypuff"
              class="absolute w-32 lg:w-52 top-4/4 right-0 -translate-x-1/2 purple-shadow-right gentle-dance"
          />
          <img
              src="~/assets/images/geodude.png"
              alt="A happy birthday"
              class="relative w-40 lg:w-80 right-1/4 lg:right-50 top-20 lg:top-60 scale-x-[-1]"
          />
        </div>
      </section>
    </div>
  </main>
  </body>
  <footer class="absolute -bottom-40 md:-bottom-70 left-0 w-full h-16 md:h-32 pointer-events-none overflow-hidden z-50">
    <img
        src="~/assets/images/running.gif"
        alt="Cute running creature"
        class="absolute bottom-0 w-16 h-16 md:w-32 md:h-32 running-creature"
    />
  </footer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=New+Rocker&display=swap');

.new-rocker-regular {
  font-family: "New Rocker", system-ui;
  font-weight: 400;
  font-style: normal;
}
@keyframes gentle-dance {
  0%, 100% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(-8px) rotate(-2deg);
  }
  75% {
    transform: translateX(8px) rotate(2deg);
  }
}

.gentle-dance {
  animation: gentle-dance 3s ease-in-out infinite;
}
@keyframes mimikyuMarch {
  0%, 70% {
    transform: translateX(0px) rotate(0deg);
  }
  71% {
    transform: translateX(-5px) rotate(-2deg);
  }
  72% {
    transform: translateX(-10px) rotate(2deg);
  }
  73% {
    transform: translateX(-15px) rotate(-1deg);
  }
  74% {
    transform: translateX(-20px) rotate(1deg);
  }
  75% {
    transform: translateX(-25px) rotate(-2deg);
  }
  76% {
    transform: translateX(-30px) rotate(2deg);
  }
  77% {
    transform: translateX(-35px) rotate(-1deg);
  }
  78% {
    transform: translateX(-40px) rotate(1deg);
  }
  79% {
    transform: translateX(-45px) rotate(-2deg);
  }
  80% {
    transform: translateX(-50px) rotate(2deg);
  }
  81% {
    transform: translateX(-55px) rotate(-1deg);
  }
  82% {
    transform: translateX(-60px) rotate(1deg);
  }
  83% {
    transform: translateX(-65px) rotate(-2deg);
  }
  84% {
    transform: translateX(-70px) rotate(2deg);
  }
  85% {
    transform: translateX(-80px) rotate(-1deg);
  }
  86% {
    transform: translateX(-90px) rotate(1deg);
  }
  87% {
    transform: translateX(-300px) rotate(-2deg);
  }
  88% {
    transform: translateX(-300px) rotate(2deg);
  }
  89% {
    transform: translateX(-300px) rotate(-1deg);
  }
  90% {
    transform: translateX(-300px) rotate(1deg);
  }
  91% {
    transform: translateX(-300px) rotate(-1deg);
  }
  92% {
    transform: translateX(-300px) rotate(1deg);
  }
  93% {
    transform: translateX(-300px) rotate(-1deg);
  }
  94% {
    transform: translateX(-300px) rotate(1deg);
  }
  95% {
    transform: translateX(-300px) rotate(-1deg);
  }
  96% {
    transform: translateX(-300px) rotate(1deg);
  }
  97% {
    transform: translateX(-300px) rotate(-1deg);
  }
  98% {
    transform: translateX(-300px) rotate(1deg);
  }
  99% {
    transform: translateX(-300px) rotate(-1deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}

.mimikyu-marching {
  animation: mimikyuMarch 18s ease-in-out infinite;
}
@keyframes gengarLaugh {
  0%, 85% {
    transform: translateY(0px) rotate(20deg) scale(-1, 1);
  }
  86% {
    transform: translateY(-8px) rotate(18deg) scale(-1, 1);
  }
  87% {
    transform: translateY(-12px) rotate(22deg) scale(-1, 1);
  }
  88% {
    transform: translateY(-6px) rotate(19deg) scale(-1, 1);
  }
  89% {
    transform: translateY(-10px) rotate(21deg) scale(-1, 1);
  }
  90% {
    transform: translateY(-4px) rotate(20deg) scale(-1, 1);
  }
  91% {
    transform: translateY(-8px) rotate(18deg) scale(-1, 1);
  }
  92% {
    transform: translateY(-2px) rotate(22deg) scale(-1, 1);
  }
  93% {
    transform: translateY(-6px) rotate(19deg) scale(-1, 1);
  }
  94% {
    transform: translateY(-3px) rotate(21deg) scale(-1, 1);
  }
  95% {
    transform: translateY(-5px) rotate(20deg) scale(-1, 1);
  }
  96% {
    transform: translateY(-1px) rotate(19deg) scale(-1, 1);
  }
  97% {
    transform: translateY(-3px) rotate(21deg) scale(-1, 1);
  }
  98% {
    transform: translateY(-1px) rotate(20deg) scale(-1, 1);
  }
  99% {
    transform: translateY(-2px) rotate(20deg) scale(-1, 1);
  }
  100% {
    transform: translateY(0px) rotate(20deg) scale(-1, 1);
  }
}

.gengar-laughing {
  animation: gengarLaugh 12s ease-in-out infinite;
}

@keyframes oldSchoolWave {
  0%, 100% {
    transform: translateY(0px) skewX(0deg);
    text-shadow: 0 0 0 currentColor; /* No shadow */
  }
  25% {
    transform: translateY(-3px) skewX(0.5deg);
    text-shadow: 1px 1px 2px rgba(255, 0, 255, 0.7);
  }
  50% {
    transform: translateY(0px) skewX(-0.5deg);
    text-shadow: -1px -1px 2px rgba(0, 255, 255, 0.7);
  }
  75% {
    transform: translateY(3px) skewX(0.2deg);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  }
}

@keyframes runAcrossScreen {
  0% {
    right: -100px; /* Start off-screen on the right */
  }
  100% {
    right: 100vw; /* End off-screen on the left */
  }
}

.running-creature {
  animation: runAcrossScreen 15s linear infinite;
}

.purple-shadow {
  transition: text-shadow 0.4s ease, transform 0.2s ease-in-out;
}

.purple-shadow-opposite {
  transition: text-shadow 0.4s ease, transform 0.2s ease-in-out;
}

.purple-shadow-opposite:hover {
  transform: translateY(9px) rotate(6deg);
  text-shadow: 2px 2px 3px rgba(255, 0, 255, 0.7);
}

.purple-shadow-right {
  transition: text-shadow 0.4s ease, transform 0.2s ease-in-out;
}

.purple-shadow-right:hover {
  transform: translateX(9px) rotate(6deg);
  text-shadow: 2px 2px 3px rgba(255, 0, 255, 0.7);
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('/assets/images/sleep-dics.png');
  background-size: cover;
  image-rendering: pixelated;
  margin: 20px auto;
  animation: spin 3s linear infinite;
}

@media (min-width: 768px) {
  .pixelated-spinning-disc {
    width: 300px;
    height: 300px;
  }
}

@media (min-width: 1024px) {
  .pixelated-spinning-disc {
    width: 400px;
    height: 400px;
  }
}

.pixelated-disc {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-image: url('/assets/images/sleep-dics.png');
  background-size: cover;
  image-rendering: pixelated;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .pixelated-disc {
    width: 10rem;
    height: 10rem;
  }
}

@media (min-width: 1024px) {
  .pixelated-disc {
    width: 14rem;
    height: 14rem;
  }
}
</style>
<script setup lang="ts">
import {ref} from 'vue';

const pastSelfPlayer = ref<HTMLAudioElement | null>(null);
const emergencePlayer = ref<HTMLAudioElement | null>(null);
const damoclesPlayer = ref<HTMLAudioElement | null>(null);
const flyPlayer = ref<HTMLAudioElement | null>(null);
const shadowClawPlayer = ref<HTMLAudioElement | null>(null);

const pastSelfSpinning = ref(false);
const emergenceSpinning = ref(false);
const damoclesSpinning = ref(false);

function playFly() {
  if (flyPlayer.value) {
    flyPlayer.value.currentTime = 0;
    flyPlayer.value.play().catch(e => console.error("Error playing Fly.mp3:", e));
  }
}

function playShadowClaw() {
  if (shadowClawPlayer.value) {
    shadowClawPlayer.value.currentTime = 0;
    shadowClawPlayer.value.play().catch(e => console.error("Error playing shadow-claw.mp3:", e));
  }
}

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

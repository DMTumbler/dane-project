<script setup lang="ts">
import { ref } from 'vue';

// Audio players
const pastSelfPlayer = ref<HTMLAudioElement | null>(null);
const emergencePlayer = ref<HTMLAudioElement | null>(null);
const damoclesPlayer = ref<HTMLAudioElement | null>(null);
const flyPlayer = ref<HTMLAudioElement | null>(null);
const shadowClawPlayer = ref<HTMLAudioElement | null>(null);

// Disc spinning states
const pastSelfSpinning = ref(false);
const emergenceSpinning = ref(false);
const damoclesSpinning = ref(false);

// Sound effect functions
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

// Music disc toggle functions
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

<template>
  <div class="mobile-snippets md:hidden lg:hidden">
    <h1 class="text-3xl new-rocker-regular text-center mb-6 animate-old-school-wave">Snippets</h1>
    
    <!-- Left sidebar content -->
    <section class="text-center mb-8">
      <div class="relative">
        <a href="https://www.youtube.com/watch?v=TI4TJagzvEE">
          <img
            src="~/assets/images/happy-birthday-gif-13.gif"
            alt="A happy Jigglypuff"
            class="mx-auto relative z-20 w-full max-w-[200px]"
          />
        </a>
        <h2 class="mt-8 text-2xl new-rocker-regular mb-4">Pokemon Friends</h2>
        <img
          @click="playFly"
          src="~/assets/images/shedinja.png"
          alt="A happy birthday"
          class="w-40 scale-x-[-1] mx-auto my-4 animate-old-school-wave cursor-pointer"
        />
        <audio ref="flyPlayer" src="/Fly.mp3" preload="auto"></audio>
        
        <a href="https://www.youtube.com/watch?v=pe5XD9Hyoj0">
          <img
            src="~/assets/images/gengar.png"
            alt="A happy birthday"
            class="z-10 w-32 rotate-20 mx-auto my-4 scale-x-[-1] purple-shadow-opposite gengar-laughing"
          />
        </a>
        
        <img
          @click="playShadowClaw"
          src="~/assets/images/mimikyu.png"
          alt="A happy birthday"
          class="w-48 mx-auto my-4 mimikyu-marching"
        />
        <audio ref="shadowClawPlayer" src="/shadow-claw.mp3" preload="auto"></audio>
      </div>
    </section>
    
    <!-- Right sidebar content -->
    <section class="text-center mb-8">
      <h2 class="text-2xl new-rocker-regular mb-4">Music Discs</h2>
      
      <div @click="togglePastSelf" class="z-0 relative mb-6">
        <audio ref="pastSelfPlayer" src="/past-self.opus" preload="auto" loop></audio>
        <div class="text-center pixelated-disc relative mx-auto"
             v-bind:class="{'pixelated-spinning-disc' : pastSelfSpinning }">
          <img
            src="~/assets/images/snorlax.png"
            alt="A happy snorlax"
            class="z-[-1] absolute w-48 -top-1/7 left-3.5 rotate-370 purple-shadow-opposite"
          />
        </div>
        <p class="mt-2 text-white">Past Self</p>
      </div>
      
      <div @click="toggleEmergence" class="mb-6">
        <audio ref="emergencePlayer" src="/emergence.opus" preload="auto" loop></audio>
        <div class="text-center pixelated-disc mx-auto" v-bind:class="{'pixelated-spinning-disc' : emergenceSpinning }">
        </div>
        <p class="mt-2 text-white">Emergence</p>
      </div>
      
      <div @click="toggleDamocles" class="z-0 relative mb-6">
        <audio ref="damoclesPlayer" src="/damocles.opus" preload="auto" loop></audio>
        <div class="text-center pixelated-disc relative mx-auto"
             v-bind:class="{'pixelated-spinning-disc' : damoclesSpinning }">
          <img
            src="~/assets/images/charmander.png"
            alt="A happy Kirby"
            class="z-[-1] absolute w-32 -top-2/4 left-3.5 rotate-350 purple-shadow"
          />
        </div>
        <p class="mt-2 text-white">Damocles</p>
      </div>
      
      <div class="relative mt-8">
        <img
          src="~/assets/images/jigglypuff.png"
          alt="A happy Jigglypuff"
          class="w-32 mx-auto my-4 purple-shadow-right gentle-dance"
        />
        
        <img
          src="~/assets/images/geodude.png"
          alt="A happy birthday"
          class="w-40 mx-auto my-4 scale-x-[-1]"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.mobile-snippets {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  margin: 1rem;
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

.pixelated-disc {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-image: url('/assets/images/sleep-dics.png');
  background-size: cover;
  image-rendering: pixelated;
  margin: 20px auto;
  cursor: pointer;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.purple-shadow {
  transition: text-shadow 0.4s ease, transform 0.2s ease-in-out;
}

.purple-shadow:hover {
  transform: translateY(-9px) rotate(6deg);
  text-shadow: 2px 2px 3px rgba(255, 0, 255, 0.7);
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

.animate-old-school-wave {
  animation: oldSchoolWave 3s infinite alternate ease-in-out;
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
</style>
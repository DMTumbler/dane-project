<script lang="ts">
import {defineComponent, ref, computed} from 'vue'

interface Message {
  id: number
  content: string
  author: string
  subject?: string
  date?: string
  language?: string
}

export default defineComponent({
  name: "messages",
  setup() {
    const currentMessageIndex = ref(0)

    // Collection of heartfelt messages/letters from friends
    const messages = ref<Message[]>([
      {
        id: 1,
        subject: "Happy Birthday to my day-one soulmate 💛",
        content: `From the moment you walked up to me in fourth grade, you changed my entire world without even knowing it. I was scared, quiet, and carrying more than most kids my age should, and you offered me something no one else did: kindness without question. That one simple act of friendship became the beginning of everything good in my life.

We've grown together in ways only true soul friends do: through laughter, growing pains, shared secrets, and even a few shared crushes (and even a friendship moon pact 😂🌙) No matter how much time or space passed between us, we've always found our way back. That kind of connection is rare, and I'll never take it for granted.

Thank you for choosing me, time and time again. Watching you grow into the person you are today has been a gift. You deserve the universe and everything after.

Love you forever.
(And yes, this is your annual reminder to please read ACOTAR 😭)`,
        author: "Your Day-One Friend",
        date: "July 3, 2025"
      },
      {
        id: 2,
        subject: "한국어로 내 욕망",
        content: `내가 나가기 직전, 김 서린 유리창에 너의 이름을 따라 쓰고
잘 벌어진 너의 입술을 본다.
조용한 기도가 나를 무릎 꿇게 하고,따뜻한 성수로 내 갈증을 적셔달라고 기도한다.
우리의 가장 빛나는 순간들 속에서 태양은 천천히 떠오르고,
그 순간은 똑같이 느껴질 거야
왜냐하면 너는 밤을 태워버렸고,
그 따뜻함을 남겨 감히 드러내기 때문이다.

네가 신음할 때마다, 그것은 성스러운 찬가이고,
애원하는 눈빛 하나하나가 나를 다시 무릎 꿇게 한다.
나는 너를 바다의 공기처럼 들이마셔,
충분함을 넘어선 달콤한 갈망으로.

너를 갖는 건 축복이고,
너를 먹는 건 선물이며,
너와 섹스하는 건 걸작이고,
매 순간 나 자신을 억제하는 건
네 맛의 대가다.`,
        author: "A Poetic Soul",
        date: "July 3, 2025",
      },
      {
        id: 3,
        subject: "Bebesiiiita",
        content: `Mi bestie, mi wifey, my besties wifey, my sexy milf. I'm so happy to be by your side. I feel proud to call you my friend. I love your free spirit, your crazy fun personality, and that pure and noble heart you have. Thank you for giving me unconditional love, accepting me for my traumatized self and never giving up on me.

You are my lighthouse, my weedy bestie, my emo-bangs-on-the-side-blue-dress-for-prom-bestie. May we continue sharing funny, fun, deep (if you know what I mean 👀) moments and experiences and continue creating memorable stories in these long chapters we call life.

May our inner theater kid continue dancing to the beat of life.`,
        author: "La bebesota",
        date: "July 3, 2025"
      },
      {
        id: 4,
        subject: "Dane!! 😤",
        content: "Sabes que lo que necesites siempre estaremos aquí para ayudaro acompañar. Very appreciative of your friendship and all the work you've put into getting me to open up 🫶 sorry que soy medio pendejo jeje",
        author: "Dune Lover",
        date: "July 3, 2025"
      },
      {
        id: 6,
        subject: "💘💘",
        content: "Felicidades Dane!! Que este nuevo año este lleno de bendiciones y mucho amor ❤",
        author: "Pink n' Slim",
        date: "July 3, 2025"
      },
      {
        id: 7,
        subject: "Za Warudo",
        content: `Friendship is hard, yo. Call me cranky, old or whatever. Meeting people, growing your social circle; that sounds like a long hike through muddy trenches for me. That's why, when I met Vlad, was like "This is good. I have enough people. No more people". That was until I met you.

        Initially it was like "Shit. Vlad has a girlfriend. I should TRY to get along with her". That was until time went on and my thoughts began to shift.

         "Hey... she's kinda cool... I think I could get along with her".

         Years went by and I realized, somehow, I had made another friend.

        You made being your friend easy. You're open and understanding of my "People allergy" and, stupid as it may be, I appreciate that.

        Thank you.

        Now, leave me the fuck alone... I'm tired.`,
        author: "Baldy",
        date: "July 3, 2025"
      }
    ])

    const goToPreviousMessage = () => {
      if (currentMessageIndex.value > 0) {
        currentMessageIndex.value--
      }
    }

    const goToNextMessage = () => {
      if (currentMessageIndex.value < messages.value.length - 1) {
        currentMessageIndex.value++
      }
    }

    const currentMessage = computed(() => {
      return messages.value[currentMessageIndex.value]
    })

    const isFirstMessage = computed(() => {
      return currentMessageIndex.value === 0
    })

    const isLastMessage = computed(() => {
      return currentMessageIndex.value === messages.value.length - 1
    })

    return {
      messages,
      currentMessage,
      currentMessageIndex,
      goToPreviousMessage,
      goToNextMessage,
      isFirstMessage,
      isLastMessage
    }
  }
})
</script>

<template>
  <div class="messages-container">
    <div class="message-display">
      <!-- Navigation arrows -->
      <button
          @click="goToPreviousMessage"
          :disabled="isFirstMessage"
          class="nav-arrow left-arrow"
          :class="{ 'disabled': isFirstMessage }"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Message content -->
      <div class="message-content">
        <!-- Message header -->
        <div class="message-header">
          <div class="header-info">
            <h2 class="message-subject" v-if="currentMessage.subject">{{ currentMessage.subject }}</h2>
            <div class="message-meta">
              <span class="author-name">From: {{ currentMessage.author }}</span>
              <span class="message-date" v-if="currentMessage.date">{{ currentMessage.date }}</span>
              <span class="language-tag" v-if="currentMessage.language">{{ currentMessage.language }}</span>
            </div>
          </div>
        </div>

        <!-- Message body -->
        <div class="message-body">
          <div class="message-text">{{ currentMessage.content }}</div>
        </div>

        <!-- Message counter -->
        <div class="message-counter">
          {{ currentMessageIndex + 1 }} of {{ messages.length }}
        </div>
      </div>

      <button
          @click="goToNextMessage"
          :disabled="isLastMessage"
          class="nav-arrow right-arrow"
          :class="{ 'disabled': isLastMessage }"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Message indicators -->
    <div class="message-indicators">
      <button
          v-for="(message, index) in messages"
          :key="message.id"
          @click="currentMessageIndex = index"
          class="indicator"
          :class="{ 'active': index === currentMessageIndex }"
          :title="message.subject || `Message ${index + 1}`"
      >
      </button>
    </div>
  </div>
</template>

<style scoped>
.messages-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.message-display {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  min-height: 300px;
}

.nav-arrow {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
  flex-shrink: 0;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .messages-container {
    padding: 2rem;
  }

  .message-display {
    padding: 2rem;
    margin-bottom: 2rem;
    min-height: 400px;
  }

  .nav-arrow {
    width: 48px;
    height: 48px;
    margin-top: 2rem;
  }
}

@media (min-width: 1024px) {
  .message-display {
    min-height: 500px;
  }

  .nav-arrow {
    width: 56px;
    height: 56px;
  }
}

.nav-arrow:hover:not(.disabled) {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: scale(1.05);
  color: #475569;
}

.nav-arrow.disabled {
  background: #f8fafc;
  border-color: #f1f5f9;
  color: #cbd5e1;
  cursor: not-allowed;
}

.message-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.message-header {
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.message-subject {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.message-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  color: #475569;
}

.message-date {
  font-size: 0.875rem;
  color: #64748b;
  font-style: italic;
}

.language-tag {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.message-body {
  flex: 1;
  margin-bottom: 2rem;
}

.message-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #334155;
  white-space: pre-line;
  font-family: 'Georgia', serif;
  text-align: left;
}

.message-counter {
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: #f8fafc;
  border-radius: 20px;
  align-self: center;
}

.message-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3b82f6;
  transform: scale(1.3);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.indicator:hover:not(.active) {
  background: #94a3b8;
  transform: scale(1.1);
}

/* Additional responsive styles for small screens */
@media (max-width: 767px) {
  .message-display {
    flex-direction: column;
    align-items: center;
  }

  .nav-arrow {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .message-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .message-text {
    font-size: 1rem;
  }

  .message-subject {
    font-size: 1.25rem;
  }

  .message-header {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .message-body {
    margin-bottom: 1rem;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
}
</style>

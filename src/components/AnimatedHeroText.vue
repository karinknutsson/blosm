<template>
  <div ref="wordsContainer" class="flex-center words-container">
    <div class="flex column words-content">
      <span
        class="hero"
        v-for="(word, index) in currentSentence.words"
        :key="index"
        :id="`word${index}`"
      >
        {{ word.text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { heroTextDataStart, heroTextDataEnd } from "../data/hero-text";
import type { HeroSentence } from "@/types/hero-sentence.interface";

/**
 * Component properties
 */
// refs
const wordsContainer = ref<HTMLElement | null>(null);
const currentSentence = ref<HeroSentence>(heroTextDataStart);

/**
 * Lifecycle hooks
 */
onMounted(() => {
  hideText();
  moveWords();
  fadeInWords(heroTextDataStart);
});

/**
 * Component functions
 */
function hideText() {
  for (let i = 0; i < heroTextDataStart.words.length; i++) {
    gsap.set(`#word${i}`, {
      opacity: 0,
    });
  }
}

function moveWords() {
  if (wordsContainer.value) {
    for (let i = 0; i < currentSentence.value.words.length; i++) {
      gsap.set(`#word${i}`, {
        x: currentSentence.value.words[i]!.moveX,
        y: currentSentence.value.words[i]!.moveY,
      });
    }
  }
}

function fadeInWords(sentence: HeroSentence) {
  const initialDelay = 1.2;
  const duration = 0.6;

  for (let i = 0; i < sentence.words.length; i++) {
    gsap.to(`#word${i}`, {
      opacity: 1,
      duration: duration,
      delay: initialDelay + duration * i - duration / 2,
      ease: "circ.in",
      onComplete: () => {
        if (sentence.words[i] === heroTextDataStart.words[heroTextDataStart.words.length - 1]) {
          fadeOutWords();
        }
      },
    });
  }
}

function fadeOutWords() {
  const delay = 2;
  const duration = 0.6;

  for (let i = 0; i < heroTextDataStart.words.length; i++) {
    gsap.to(`#word${i}`, {
      opacity: 0,
      duration: duration,
      delay: delay,
      ease: "circ.out",
      onComplete: () => {
        if (i === heroTextDataStart.words.length - 1) {
          currentSentence.value = heroTextDataEnd;
          moveWords();
          fadeInWords(heroTextDataEnd);
        }
      },
    });
  }
}
</script>

<style scoped lang="scss">
.words-container {
  position: relative;
}

.words-content {
  gap: 32px;
  z-index: 100;
}

.hero {
  font-family: "AbrilFatface", serif;
  font-size: 120px;
  line-height: 80%;
  display: inline-block;
  white-space: nowrap;
  flex: 0 0 auto;
  margin-left: 16px;
  margin-right: 16px;
}

.hidden {
  opacity: 0;
}

@media (max-width: 768px) {
  .hero {
    font-size: 88px;
  }

  .words-content {
    gap: 16px;
  }
}

@media (max-width: 576px) {
  .hero {
    font-size: 64px;
  }

  .words-content {
    gap: 16px;
  }
}
</style>

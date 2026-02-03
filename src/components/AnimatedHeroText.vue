<template>
  <div ref="wordsContainer" class="flex column words-container">
    <div class="flex column words-content">
      <span
        class="hero"
        v-for="(word, index) in heroTextDataStart.words"
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

/**
 * Component properties
 */
// refs
const wordsContainer = ref<HTMLElement | null>(null);

/**
 * Lifecycle hooks
 */
onMounted(() => {
  hideText();
  moveWords();
  fadeInWords();
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
  if (wordsContainer.value && heroTextDataStart.words) {
    for (let i = 0; i < heroTextDataStart.words.length; i++) {
      // gsap.set(`#word${i}`, {
      //   x: `${heroTextDataStart.words[i]!.moveX}px`,
      //   y: `${heroTextDataStart.words[i]!.moveY}px`,
      // });
      gsap.set(`#word${i}`, {
        x: heroTextDataStart.words[i]!.moveX,
        y: heroTextDataStart.words[i]!.moveY,
      });
    }
  }
}

function fadeInWords() {
  const initialDelay = 1.2;
  const duration = 0.6;

  if (heroTextDataStart.words) {
    for (let i = 0; i < heroTextDataStart.words.length; i++) {
      gsap.to(`#word${i}`, {
        opacity: 1,
        duration: duration,
        delay: initialDelay + duration * i - duration / 2,
        ease: "circ.in",
      });
    }
  }
}
</script>

<style scoped lang="scss">
.words-container {
  align-items: center;
  justify-content: center;
  //   width: 640px;
  //   height: 640px;
  position: relative;
  // border: 1px dotted red;
}

.words-content {
  gap: 32px;
  //   width: 640px;
  //   height: 640px;
  z-index: 100;
  // border: 1px dotted magenta;
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

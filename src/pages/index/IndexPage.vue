<template>
  <div class="container">
    <div class="row">
      <div class="col-0 col-sm-1 col-md-2 col-lg-3"></div>
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <div class="hero-container flex-center">
          <AnimatedHeroText />
        </div>
      </div>
      <div class="col-0 col-sm-1 col-md-2 col-lg-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedHeroText from "@/components/AnimatedHeroText.vue";
</script>

<style scoped>
.hero-container {
  height: 100vh;
  padding-bottom: 4vh;
}
</style>

<template>
  <button @click="() => toggleDark()"><i class="pi pi-sun"></i></button>
  <router-view />
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>

<template>
  <!-- <Button
    @click="() => toggleDark()"
    icon="pi pi-sun"
    variant="outlined"
    aria-label="Toggle dark mode"
  /> -->
  <router-view />
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { Button } from "primevue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>

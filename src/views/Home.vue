<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CountryList /> <!-- Use the shared component -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { CountryList } from '../dist/my-library.es.js'; // Import the shared component
</script>

<style scoped>
/* Add any scoped styles here */
</style>

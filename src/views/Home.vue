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

<script>
import { defineComponent } from 'vue';
import { CountryList } from '../dist/my-library.es.js'; // Import the shared component

export default defineComponent({
  name: 'Home',
  components: {
    CountryList
  }
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>

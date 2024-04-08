<script setup>
 import TvShowCards from './components/TvShowCards.vue'
 import Header from './components/Header.vue'
</script>

<template>
  <main>
    <Header/>
    <Suspense>
      <template #default>
        <TvShowCards />
      </template>
      <template #fallback>
        <div class="cards spinner">
          <NSpin size="large"></NSpin>
        </div>
      </template>
    </Suspense>

  </main>
</template>

<style scoped>
   .cards {
     height: 700px;
     background-color: rgb(27, 26, 26);
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>


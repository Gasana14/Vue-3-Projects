<script setup>
import q from '../data/quizes.json'
import { ref,computed } from 'vue'
import Card from '../components/Card.vue';

const quizes = ref(q)
const search = ref("");
// create an on computed property to filter the quizes
const filteredQuizes = computed(() => {
  return quizes.value.filter(quiz => {
    return quiz.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

</script>

<template>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
     <transition-group name="card" appear>
        <Card 
        v-for="quiz in filteredQuizes" 
        :key="quiz.id" 
        :quiz="quiz"
        />
     </transition-group>
    </div>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .card-enter-from{
    transform: translateY(-50px);
    opacity: 0;
  }

  .card-enter-to{
    transform: translateY(0);
    opacity: 1;
  }

  .card-enter-active{
    transition: all 0.5s ease;
  }

  
</style>
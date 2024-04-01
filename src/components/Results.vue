<script setup>
    import { defineProps } from 'vue';
    import {RouterLink} from 'vue-router';

    const {quizQuestionLength,numberOfCorrectAnswers} = defineProps(["quizQuestionLength","numberOfCorrectAnswers"]);
</script>

<template>
    <div class="result">
        
        <p>Your results...</p>
        <h1>
         {{ numberOfCorrectAnswers }} / {{ quizQuestionLength }}
        </h1>
        <router-link to="/">Go Back</router-link>
   </div>
</template>

<style scoped>
.result {
    text-align: center;
    padding: 100px 0;
  }
  
  .result h1 {
    font-size: 80px;
    font-weight: bold;
  }
  
  .result p {
    font-size: 25px;
  }
</style>
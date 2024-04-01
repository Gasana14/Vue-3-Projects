<script setup>
  import Question from '../components/Question.vue'
  import QuestionHeader from '../components/QuestionHeader.vue'
  import {useRoute} from 'vue-router'
  import { ref,computed } from 'vue';
  import quizes from '../data/quizes.json'
  import Result from '../components/Results.vue'

  const route = useRoute();

  const quizId = parseInt(route.params.id);

  const currentQuestionIndex = ref( 0 );

  const quiz = quizes.find(quiz => quiz.id === quizId);

  const numberOfCorrectAnswers = ref( 0 );

  const showResults = ref(false);



  // use a computed property to get the question status
  const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`;
  });

  const barPercentage = computed(() => {
    return `${currentQuestionIndex.value / quiz.questions.length * 100}%`;
  });

  const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
      numberOfCorrectAnswers.value++;
    }

    if(quiz.questions.length - 1 === currentQuestionIndex.value) {
      showResults.value = true;
    }

    currentQuestionIndex.value++;
  }

</script>

<template>
    <div>
        <QuestionHeader 
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
        /> 
        <div>
            <Question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"
            />

            <Result 
            v-else
            :quizQuestionLength="quiz.questions.length"
            :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
        
    </div>
    
     
   
</template>
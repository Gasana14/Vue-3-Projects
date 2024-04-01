<script setup>
    import { defineProps,defineEmits } from 'vue';

    const emit = defineEmits(["selectOption"]);

    const {question} = defineProps({
        question: {
            type: Object,
            required: true
        }
    });

    const emitSelectOption = (isCorrect) => {
        emit('selectOption', isCorrect);
    }

</script>

<template>
    <div class="questions-container">
        <div>
            <h1 class="question">
                {{ question.text }}
            </h1>
        
            <div class="options-container">
                <div 
                v-for="option in question.options" 
                :key="option.id" 
                class="option"
                @click="emitSelectOption(option.isCorrect)"
                >
                    <p class="option-label">{{ option.label }}</p>
                    <div class="option-value">
                        <p>{{ option.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    

</template>

<style scoped>
.questions-container {
    margin-top: 20px;
  }
  .question{
    font-size: 40px;
    margin-bottom: 20px;
  }

  .option{
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .option-label{
    background-color: bisque;
    height: 50px;
    width: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .option-value{
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
   
  }

</style>
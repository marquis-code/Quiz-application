<template>
  <div v-if="currentQuestion">
    <div class="space-y-2 flex justify-center items-center flex-col">
      <p class="font-sans font-medium text-sm text-gray-500">
        Question ({{ currentQuestionIndex + 1 }} / {{questions.length}})
      </p>
      <h1 class="font-sans text-xs font-semibold select-none py-3 border w-full text-center rounded">{{ currentQuestion.question }} ?</h1>
      
      <div class="grid grid-cols-2 gap-x-40 gap-y-5"> 
        <div
            class="text-center px-10 rounded border py-2 cursor-pointer hover:bg-gray-300 border-gray-300 font-sans font-medium text-xs"
            v-for="(answer, index) in answers"
            :key="answer"
            @click.prevent="handleAnswerClick(index)"
            :class="answeredClass(index)"
        >
        {{ answer }}
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-10 justify-center pt-6">
      <button
        class="text-white bg-green-600 font-sans text-xs rounded shadow-sm px-5 py-1"
        @click="handlePreviousQuestion"
      >
        Previous Question
      </button>
      <button
        class="text-white bg-green-600 font-sans text-xs rounded shadow-sm px-5 py-1"
        @click="handleNextQuestion"
      >
        Next Question
      </button>
      <button
        :disabled="selectedIndex === null || answered"
        @click="handleSubmit"
        class="text-white bg-green-600 font-sans text-xs rounded shadow-sm px-5 py-1"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "QuestionBox",
  props: {
    currentQuestion: Object,
    currentQuestionIndex: Number,
    handleNextQuestion: Function,
    handlePreviousQuestion: Function,
    increament: Function,
    questions : Array
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
    };
  },
  computed: {
    answers() {
      return [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
    },
  },
  methods: {
    handleAnswerClick(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    handleSubmit() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increament(isCorrect);
    },

    answeredClass(index){
       let answeredClass = ''

       if(!this.answered && this.selectedIndex === null){
           answeredClass = 'bg-gray-100'
       }else if(!this.answered && this.selectedIndex !== '' && this.selectedIndex === index){
           answeredClass = 'border-green-600'
       }
        else if(this.answered && this.correctIndex === index){
           answeredClass = 'bg-green-500 border-green-500 text-white'
       } else if(this.answered && this.selectedIndex === index && this.correctIndex !== index){
           answeredClass = 'bg-red-500 border-red-500 text-white'
       } 
           return answeredClass
          
    }
  },
  watch: {
    currentQuestion() {
      this.selectedIndex = null;
      this.answered = false;
      this.shuffleAnswers();
    },
  },
  //   mounted(){
  //     this.selectedIndex = null  /* Implement this feature to shuffle questions on component mount */
  //     this.shuffleAnswers();
  //   }
};
</script>

<template>
    <div class="border mt-16 shadow-sm rounded bg-white space-y-3 p-5 max-w-7xl w-6/12 mx-auto">
       <div>
           <HeaderSection 
              :numberOfCorrect='numberOfCorrect' 
              :numberOfTotal='numberOfTotal' 
            />
        </div>
       <div>
            <QuestionBox 
                :handlePreviousQuestion='handlePreviousQuestion' 
                :handleNextQuestion='handleNextQuestion' 
                :currentQuestionIndex='currentQuestionIndex' 
                :currentQuestion='questions[currentQuestionIndex]'
                :increament="increament"
                :questions='questions'
            />
       </div>
    </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import QuestionBox from './components/QuestionBox.vue'
export default {
    name : 'App',
    components : {HeaderSection, QuestionBox},
    data(){
        return {
          questions : [],
          currentQuestionIndex : 0,
          numberOfCorrect : 0,
          numberOfTotal : 0,
          dbQuestions : [
              {   id : 1,
                  question : 'Who is the founder of NIMELSSA Tech space',
                  correct_answer : 'Marquis',
                  incorrect_answers : ['Ernest', 'Susan', 'Ann']
              },
                {
                  id : 2,
                  question : 'Which of this is not used during phlebotomy',
                  correct_answer : 'Fridge',
                  incorrect_answers : ['Syringe', 'Tourniquet', 'Needle']
              }
          ]
        }
    },
    mounted(){
       this.questions = this.dbQuestions
    },
    methods : {
        handleNextQuestion(){
            this.currentQuestionIndex ++
        },

        handlePreviousQuestion(){
            this.currentQuestionIndex --
        },

        increament(isCorrect) {
          if(isCorrect){
             this.numberOfCorrect ++
          }
          this.numberOfTotal ++
        }
    }
}
</script>
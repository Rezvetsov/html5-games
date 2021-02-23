<template>
  <div id="app">
    <b-progress :min='min' :max='max' :value='countDown'/>
    <h1 style="color: tomato">{{message}}</h1>
    <div>
      <h1>{{countDown}}</h1>
    </div>
    <div v-if="interval">
      <div>
        {{result}}
      </div>
      <button @click="checkAnswer(rightAnswer)">{{rightAnswer}}</button>
      <button @click="checkAnswer(badAnswer)">{{badAnswer}}</button>
    </div>
    <div v-if="!interval">
      <button @click="startGame">Начать</button>
    </div>
  </div>
</template>

<script>
import randomInteger from './utils'
export default {
  name: 'App',
  data(){
    let countDownValue = 3
    return {
      message: "",
      min: 0,
      max: countDownValue,
      countDownDefValue: countDownValue,
      countDown: countDownValue,
      interval: null,

      result: '',
      rightAnswer: -1,
      badAnswer: -1,

      isGameOver: false,
    }
  },
  methods:{
    startGame(){
      this.isGameOver = false
      this.message = ""
      this.countDown = this.countDownDefValue
      this.clearIntervalFull()
      this.getAnswers()
      this.startCountDown()
    },
    getAnswers(){
      const first = randomInteger(0, 100)
      const second = randomInteger(0, 100)
      this.result = `${first} + ${second}`
      this.rightAnswer = first + second
      this.badAnswer = first + randomInteger(0, 100)
    },
    checkAnswer(val){
      if(val == this.rightAnswer){
        this.startGame()
      } else{
        this.gameOver()
      }
    },
    clearIntervalFull(){
      clearInterval(this.interval)
      this.interval = null
    },
    gameOver(){
      this.message = "Вы ошиблись"
      this.clearIntervalFull()
    },
    startCountDown(){
      if(!this.interval){
        this.interval = setInterval(() => {
          if(this.countDown > 0 && (this.countDown -1 > 0)){
            this.countDown -= 1
          }
          else{
            this.countDown -= 1
            this.clearIntervalFull()
            this.message = 'Время истекло'
          }
      }, 1000)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

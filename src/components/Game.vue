<template>
<transition name="fade" appear>
  <div class="special-vtb-guess__container l-island-a" ref="vtbStart">
    <div :class="[
      'special-vtb-guess-main']">
       <div class="special-vtb-guess-main__inner">
            <div class="special-vtb-guess-main__wrapper">
                <div class="special-vtb-guess-main__content">
                    <div class="special-vtb-guess-main__counter"><span>{{questionIndex + 1}}</span> / {{data.questions.length}}</div>
                    <div class="special-vtb-guess-main__title">Сколько стоит эта машина?</div>
                     <div v-if="$screen.width < 520" class="special-vtb-guess-main__image">
                      <img :src="this.data.questions[this.questionIndex].image" alt="">
                    </div>
                    <Question
                        v-for="(question, index) in data.questions"
                        :key="index"
                        :data="question"
                        v-show="index === questionIndex"
                        @drag-end="nextQuestion"
                        :disabled="disabled"/>
                  </div>
                  <div v-if="$screen.width > 521" class="special-vtb-guess-main__image">
                    <img :src="this.data.questions[this.questionIndex].image" alt="">
                  </div>
            </div>
          </div>

        <Result v-if="!isResult" :result="this.data.questions[this.questionIndex].desc" :isResult="isResult"/>
        <Result v-if="isResult" :result="this.result" :isResult="isResult"/>

        <div v-if="isResult" class="special-vtb-guess-main__button" @click="skip">Дальше</div>
    </div>
  </div>
</transition>
</template>

<script>
import Question from './Question.vue';
import Result from './Result.vue';
import data from '../data/data';

export default {
  name: 'Game',
  components: {
    Question,
    Result,
  },
  data() {
    return {
      data,
      questionIndex: 0,
      answerValue: 0,
      result: '',
      isResult: false,
      isShowPromo: false,
      disabled: false,
      score: 0,
      isStartTimer: false,
    };
  },
  mounted() {
    setTimeout(() => {
      const scrollTo = (to, duration) => {
        const start = window.pageYOffset;
        const change = to - start;
        let currentTime = 0;
        const increment = 20;

        const animateScroll = () => {
          currentTime += increment;
          const val = Math.easeInOutQuad(currentTime, start, change, duration);
          window.scroll(0, val);
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      };

      Math.easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t -= 1;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const scrollToElement = (ref) => {
        scrollTo(ref.getBoundingClientRect().top + window.scrollY - 100, 500);
      };

      scrollToElement(this.$refs.vtbStart);
    });
  },
  watch: {
    result(newVal) { // watch it
      this.result = newVal;
    },
  },
  methods: {
    skip() {
      if (this.questionIndex === 6) {
        clearTimeout(this.timeout);
        this.$emit('show-promo', this.score);
      } else {
        clearTimeout(this.timeout);
        this.questionIndex += 1;
        this.isResult = false;
        this.disabled = false;
      }
    },
    nextQuestion(value) {
      this.checkAnswer(value);
      this.isResult = true;
      this.disabled = true;
      this.timeout = setTimeout(() => {
        if (this.questionIndex === 6) {
          this.$emit('show-promo', this.score);
        } else {
          this.questionIndex += 1;
          this.isResult = false;
          this.disabled = false;
        }
      }, 6000);
    },
    checkAnswer(value) {
      if (value >= data.questions[this.questionIndex].correctRange.min && value <= data.questions[this.questionIndex].correctRange.max) {
        this.result = data.questions[this.questionIndex].result.true;
        this.score += 1;
      } else { this.result = data.questions[this.questionIndex].result.false; }
    },
  },
};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s;
.fade-enter, .fade-leave-to
  opacity: 0;
.special-vtb-guess-main
  &__inner
      display: flex;
      align-items: center;
      @media (max-width: 640px)
        justify-content: center;
  &__wrapper
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      @media (max-width: 640px)
        flex-direction: column;
  &__button
    width: 100%;
    max-width:107px;

    position: relative;
    display: inline-block;
    flex-shrink: 0;
    margin: 0;
    padding: 11px 25px;
    color: #fff;
    font-family: inherit;
    font-size 15px
    font-weight: 500;
    background: #009FDF;
    border-radius: 5px;
    border: none;

    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    cursor: pointer;

    -webkit-transition: all 0.2s;
    transition: all 0.2s;

    &:after
      content: "";
      border-radius: 5px;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      opacity: 0;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    &:hover
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    &:hover::after
      opacity: 1;
    @media (max-width: 640px)
      max-width: 170px;
      padding: 13px 25px;
      font-size 16px
      text-align: center;
      &:hover
        box-shadow none;
  &__counter
      font-size: 16px;
      line-height: 22px;
      & > span
        color: #0af;
        font-weight: 700
  &__title
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;

      margin-top: 5px;
      margin-bottom: 20px;
      @media (max-width: 640px)
        margin-top: 10px;
        margin-bottom 18px;
  &__content
    flex-shrink: 0;
    flex-grow: 1;
  &__image
    max-width 238px
    width: 100%
    margin-left 42px
    & > img
      display block
      width: 100%
    @media (max-width: 640px)
      max-width none;
      margin 0;

</style>

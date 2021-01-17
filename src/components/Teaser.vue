<template>
  <div class="special-vtb-guess-teaser">
    <div class="special-vtb-guess-teaser__title">
        Погрузчики, мусоровозы, плиткоукладчики. Угадаете, сколько стоит этот транспорт?
    </div>

    <div class="special-vtb-guess-teaser__wrapper">

      <div class="special-vtb-guess-teaser__image">
        <img src="https://leonardo.osnova.io/5418fb88-6266-56f0-9b60-3a7a0aa424b8/" alt="">
        <div class="special-vtb-guess-teaser__animated" >
          <div class="special-vtb-guess-teaser__price">{{ price }}</div>
        </div>
      </div>
    <button class="special-vtb-guess-teaser__button" @click='startGame'>Начать</button>

    </div>
  </div>
</template>

<script>
import * as Analytics from '../lib/analytics';

export default {
  name: 'Teaser',
  mounted() {
    this.updatePrice();
    setInterval(this.updatePrice, 2000);
  },
  data() {
    return {
      price: '',
      prices: ['5 000 000₽', '14 000 000₽', '60 000 000₽'],
      index: 0,
    };
  },
  methods: {
    startGame() {
      this.$emit('start-game');
      Analytics.sendEvent('Start');
    },
    updatePrice() {
      if (this.index < this.prices.length - 1) {
        this.price = this.prices[this.index];
        this.index += 1;
      } else {
        this.price = this.prices[this.index];
        this.index = 0;
      }
    },
  },
};
</script>

<style lang="stylus">
@keyframes vtb-typing-erase
  0% { width: 0 }
  80% { width: 100% }
  99% { width: 100% }
  100% { width: 0 }
@keyframes vtb-blink-caret
  from, to { border-color: transparent }
  50% { border-color: gray }
.special-vtb-guess-teaser
  padding: 14px 20px;
  display flex
  align-items center
  flex-flow row wrap
  justify-content: space-between;
  background: #99A9CD;
  @media (max-width: 420px)
    flex-flow column wrap
    align-items: flex-start;
  &__title
    max-width: 270px;
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff
    @media (max-width: 590px)
      width: 100%;
      margin-bottom: 18px;
  &__button
    cursor pointer
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    padding: 7px 25px;
    background: #fff;
    -webkit-box-shadow: inset 0 0 0 1px #667EB4;
    box-shadow: inset 0 0 0 1px #667EB4;

    border: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 5px;
    -webkit-transition: background .1s ease-out,color .1s ease-out;
    transition: background .1s ease-out,color .1s ease-out;
    &:hover
      box-shadow: inset 0 0 0 1px #99A9CD, 0 1px 2px rgba(0,0,0,0.1);
    &:focus
      outline none
  &__wrapper
    display flex
    flex-direction row
    align-items: center;
    justify-content: flex-end;
    width: 50%;

    @media (max-width: 590px)
      width: 100%;
      justify-content: flex-start;
  &__image
    position: relative;
    max-width 217px
    flex-shrink 0;
    margin: 0 7px;
    & > img
      display block
      width 100%
    @media (max-width: 590px)
      margin-right: 38px;
      -webkit-box-ordinal-group: 2;
      order: 1;
      margin: 0 auto;
  &__animated
    position: absolute;
    bottom: 2px;
    right: 84px;
    padding: 0 8px;
    background: #4b4b4b;
    width: 73px;
  &__price
    color: #fff;
    text-align: center;
    font-size: 10px;
    line-height: 12px;
    color: gold;

    width: 0;
    max-width: max-content;
    overflow: hidden;
    border-right: .05em solid #000;
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0; /* Gives that scrolling effect as the typing happens */
    animation: vtb-typing-erase 2s steps(50, end) infinite,  vtb-blink-caret .5s step-end infinite;
    &::after
      content ''
      padding: 10px
</style>

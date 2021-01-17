<template>
  <div class="special-vtb-guess__container l-island-a" ref="vtbResult">
    <div class="special-vtb-guess-promo">
        <div class="special-vtb-guess-promo__main">{{score}} правильных ответа из 7</div>
        <div class="special-vtb-guess-promo__wrapper">
            <div class="special-vtb-guess-promo__result" v-html="data[this.score].text"></div>
            <div v-if="$screen.width > 520" class="special-vtb-guess-promo__image">
              <img :src="data[this.score].image" alt="">
            </div>
        </div>
        <div class="special-vtb-guess-promo__buttons" >
                <div class="likely" ref='share'></div>
                <div class="special-vtb-guess-promo__restart" @click="restart">
                    <icon-base
                        icon-name='icon-restart'
                        width="17"
                        height="17"
                        viewBox="0 0 17 17">
                        <icon-restart></icon-restart>
                    </icon-base>
                    Пройти ещё раз
                </div>
        </div>

        <div class="special-vtb-guess-promo__content">
            <div class="special-vtb-guess-promo__title">Дорогую спецтехнику обычно берут в&nbsp;лизинг&nbsp;&mdash; так гораздо выгоднее.</div>
            <TechnicsBlock />
            <HighlightBlock />
            <Terms />
        </div>

        <div class="special-vtb-guess-promo__footer">
            <div class="special-vtb-guess-promo__wrapper">
              <a class="special-vtb-guess-promo__button"
                  href="https://bit.ly/39rSf1i"
                  target="_blank"
                  @click="sendAnalytics()">
                  Подробности
              </a>
            </div>
            <a class="special-vtb-guess-promo__logo" href="#">
                <img src="https://leonardo.osnova.io/be8cd781-4d2c-5a71-8668-7d123e8b30ef/" alt="vtb logo">
            </a>
        </div>
        <div class="special-vtb-guess-promo__oferta">
          АО ВТБ Лизинг (ИНН 7709378229). Данное предложение не является офертой (в соответствии со ст. 435, ст. 437. ГК РФ) и не влечет за собой обязательств по заключению договора на условиях настоящего предложения.
        </div>
    </div>
  </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconRestart from './Icons/IconRestart.vue';
import TechnicsBlock from './TechnicsBlock.vue';
import HighlightBlock from './HighlightBlock.vue';
import Terms from './Terms.vue';

import * as Analytics from '../lib/analytics';
import * as Share from '../lib/share';

import data from '../data/data';

export default {
  name: 'Promo',
  components: {
    IconBase,
    IconRestart,
    TechnicsBlock,
    HighlightBlock,
    Terms,
  },
  data() {
    return {
      data: data.score,
    };
  },
  props: {
    score: {
      type: Number,
    },
  },
  mounted() {
    Analytics.sendEvent('Result', 'Show');
    this.share();

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

      scrollToElement(this.$refs.vtbResult);
    });
  },
  methods: {
    declineWord(number, words) {
      let result = '';

      if (number % 10 === 1 && number % 100 !== 11) {
        result += words[0];
      } else if ([2, 3, 4].indexOf(number % 10) > -1 && [12, 13, 14].indexOf(number % 100) < 0) {
        result += words[1];
      } else {
        result += words[2];
      }

      return result;
    },
    sendAnalytics() {
      Analytics.sendEvent('Promo');
    },
    share() {
      const socials = this.$refs.share;
      Share.make(socials, {
        title: `Я ответил на  — ${this.score} ${this.declineWord(this.clicks, ['вопрос', 'вопроса', 'вопросов'])} из 7.`,
        url: `https://vc.ru/special/vtb-test/share/${this.score}`,
      });
    },
    restart() {
      Analytics.sendEvent('Restart');
      this.$emit('restart');
    },
  },
};
</script>

<style lang="stylus">
.special-vtb-guess-promo
  position relative
  &__main
    font-size: 22px;
    line-height: 22px;
    margin-bottom 16px
    font-weight: bold;
  &__title
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    margin: 20px 0;
  &__result
    line-height 24px
    max-width: 430px;
  &__image
    max-width: 170px;
    width: 100%;
    position: absolute;
    right: 0px;
  &__buttons
    display flex
    flex-direction row
    align-items center
    margin 0 -3px
    margin-top: 20px;
    @media (max-width: 425px)
      flex-direction column
      align-items flex-start
  &__content
    &:before
      content ''
      width: 640px;
      height: 1px;
      background: #5e5e5e;
      opacity: 0.2;
      margin-top: 20px;
      display: block;
      margin-left: -20px;
  &__restart
    display flex
    flex-direction row
    align-items center

    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    & > svg
      margin-right 10px
      transition: transform 0.4s ease-in;
    &:hover
      & > svg
        transform: rotate(360deg);
    @media (max-width: 425px)
      margin-top: 16px;
      margin-left: 4px;


  &__footer
    display flex
    flex-flow row nowrap
    align-items center
    margin-top: 25px;
  &__wrapper
    display flex
    flex-flow row nowrap
    align-items center
    margin-right: 20px;
  &__button
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    font-weight: 500;
    color: #ffffff;
    background: #009FDF;
    padding: 11px 30px;
    text-align center
    border: none
    border-radius: 5px;
    cursor pointer
    transition box-shadow .5s
    display block
    &:hover
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  &__logo
      width 100%
      max-width 149px
  &__oferta
    color: #99A9CD;
    font-size: 11px;
    line-height: 18px;
    margin-top: 18px;
.likely--custom
  display flex
  flex-direction row
  align-items center
  width: 286px;
  & .likely__widget
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 5px;


    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    background: #fff;
    text-decoration none
    color #009FDF

    border: none
    border-radius: 5px;
    cursor pointer
    transition background .2s, color .2s
    height: 38px;
    width: 100%;
    max-width 45px
    & .likely__icon
      fill: currentColor;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & > svg
          width: 23px;
          height: 18px;
    &:hover
      background #009FDF
      color: #fff
      @media (max-width: 425px)
        background #fff
        color: #009FDF
    @media (max-width: 375px)
      height: 38px;
      max-width 38px
      margin: 0 3px;
      font-size: 14px;
      line-height: 16px;
      &:hover
          box-shadow: none
  & .likely__widget--facebook
    max-width: 150px;
    @media (max-width: 375px)
        max-width: 140px;
</style>

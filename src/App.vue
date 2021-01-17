<template>
  <div :class="[
          'special-vtb-guess',
          `special-vtb-guess--${$store.state.params.location}`,
          {'l-mb-28': !isFullPage },
          {'l-island-round': !isFullPage && $screen.width > 520},
       ]"
       ref="container"
       v-observe-visibility="{
           callback: visibilityChanged,
           once: true,
       }">
        <Teaser v-if="!isFullPage && isShowTiser"  @start-game="startQuiz" />
        <Game v-if="!isShowTiser && !isShowPromo" @show-promo="showPromo"/>
        <Promo v-if="isShowPromo" :score="score" @restart="restartQuiz"/>
  </div>
</template>

<script>
import * as Analytics from './lib/analytics';
import { preloadImages } from './lib/helper';
import Teaser from './components/Teaser.vue';
import Game from './components/Game.vue';
import Promo from './components/Promo.vue';

export default {
  name: 'App',
  components: {
    Teaser,
    Game,
    Promo,
  },
  data() {
    return {
      isShowTiser: true,
      isShowQuiz: false,
      isShowPromo: false,
      isFullPage: false,
      score: 0,
    };
  },
  mounted() {
    if (this.$store.state.params.location === 'page') {
      this.isFullPage = true;
      this.isShowTiser = false;
    }
    preloadImages([
      'https://leonardo.osnova.io/e3639d9c-be99-5e72-a03e-a2f3c85687e1/',
      'https://leonardo.osnova.io/746a41d1-4629-5a08-bb68-7c222e20283c/',
      'https://leonardo.osnova.io/bddffb8b-9dd5-5108-8c79-2e5c62c32232/',
      'https://leonardo.osnova.io/ac1bd98b-c744-5c7e-af9c-06c0695dcc1c/',
      'https://leonardo.osnova.io/604dba22-ca4a-5f4b-94ec-79fbd31fb1f2/',
      'https://leonardo.osnova.io/5f2a385f-2826-5b8b-8502-0ca1731a508c/',
      'https://leonardo.osnova.io/c8663cb5-d6b2-5c90-8f4c-5f097c696201/',
      'https://leonardo.osnova.io/3c00ce1f-a26a-5b41-8035-63fd90ccc150/',
      'https://leonardo.osnova.io/10c4cbda-5693-5df4-94b7-f976b4e6b6cc/',
      'https://leonardo.osnova.io/12eb2fdf-8d94-5090-991a-637a6a95c5bd/',
      'https://leonardo.osnova.io/8d49e1f5-34b0-548a-9757-e6438ad4fa25/',
      'https://leonardo.osnova.io/08560e16-a943-52a8-adf5-e0bec3cb9a2d/',
      'https://leonardo.osnova.io/aac96737-81ca-5652-8e15-4be68bbc8676/',
    ]);
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        Analytics.sendEvent('Project', 'in-viewport');
      }
    },
    startQuiz() {
      this.isShowQuiz = true;
      this.isShowTiser = false;
      Analytics.sendEvent('Start');
    },
    showPromo(score) {
      this.isShowPromo = !this.isShowPromo;
      this.isShowQuiz = !this.isShowQuiz;
      this.score = score;
    },
    restartQuiz() {
      this.isShowQuiz = true;
      this.isShowPromo = false;
    },
  },
};
</script>

<style lang="stylus">
body.is-blured-vtb-guess-price .layout__content>:not(#page_wrapper),
body.is-blured-vtb-guess-price .main>:not(.layout__content),
body.is-blured-vtb-guess-price .page--index>:not(.special-vtb-guess),
body.is-blured-vtb-guess-price>:not(.main)
  filter: blur(2px);
  pointer-events: none;

.special-vtb-guess
  position relative
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative
  z-index: 1
  max-width: 100%
  font-family: 'Roboto', sans-serif
  font-size: 16px
  line-height: normal
  text-size-adjust: 100%
  background-color: transparent
  color: #333333;
  overflow: hidden
  background: #E5F6FF;
  & img
    width 100%
    display block

  & *
  & *:before
  & *:after
    box-sizing: border-box

  & b
    font-weight: 700

  &__container
    width: 640px
    max-width: 100%
    border-radius: 8px;
    margin-bottom: 20px;
    margin-top: 20px;

    @media (max-width: 466px)
      margin: 20px auto;

  &--page .special-vtb-guess__container
    padding: 0 20px;
</style>

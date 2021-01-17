<template>
    <div class="special-vtb-guess-highlight">
        <div class="special-vtb-guess-highlight__desc">В&nbsp;ВТБ Лизинг можно взять не&nbsp;только редкие экземпляры техники, но&nbsp;и&nbsp;самые обычные легковые и&nbsp;грузовые автомобили.</div>
        <a class="special-vtb-guess-highlight__button"
          target="_blank" href="https://bit.ly/3mmBg45"
          @click="sendAnalytics()">
            Есть сомнения
          </a>
    </div>
</template>

<script>
import * as Analytics from '../lib/analytics';

export default {
  name: 'HighlightBlock',
  methods: {
    sendAnalytics() {
      Analytics.sendEvent('Doubts');
    },
  },
};
</script>

<style lang="stylus">
.special-vtb-guess-highlight
    display flex
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: #CCEEFF;

    margin: 30px -20px;
    padding: 20px;
    @media (max-width: 640px)
        flex-direction: column;
        align-items: flex-start;
    &__desc
        max-width 368px;
        font-size: 16px;
        line-height: 24px;

        @media (max-width: 640px)
            margin-bottom 16px
    & a
        display block
        text-decoration: none;
        color: #ffffff
    &__button
        background: #009FDF;
        border-radius: 5px;
        flex-shrink: 0;
        padding: 11px 30px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        &:hover
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.2s;


</style>

<template>
    <div class="special-vtb-guess-technics">
        <div v-if="$screen.width > 520" class="special-vtb-guess-technics__item">
            <div class="special-vtb-guess-technics__image">
                <img src="https://leonardo.osnova.io/ac04c4cb-53ab-5b00-9b63-5e8c443ba0e8/" alt="">
            </div>
            <div class="special-vtb-guess-technics__text">от 14 600 ₽/месяц</div>
        </div>

        <div v-if="$screen.width > 520" class="special-vtb-guess-technics__item">
            <div class="special-vtb-guess-technics__image">
                <img src="https://leonardo.osnova.io/2d6dcfac-7502-5049-ab17-b98a309df127/" alt="">
            </div>
            <div class="special-vtb-guess-technics__text">от 47 900 ₽/месяц</div>
        </div>

        <div v-if="$screen.width > 520" class="special-vtb-guess-technics__item">
            <div class="special-vtb-guess-technics__image">
                <img src="https://leonardo.osnova.io/0e258064-e14d-55f7-b745-da3d4a1587c6/" alt="">
            </div>
            <div class="special-vtb-guess-technics__text">от 178 300 ₽/месяц</div>
        </div>

        <carousel v-if="$screen.width < 520" :perPageCustom="[[320, 1]]"
            navigationEnabled
            paginationActiveColor="#00AAFF"
            paginationColor="#9BDDFC"
            :paginationPadding='2'
            navigationNextLabel='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4879 10.813L7.93808 0.492909C7.78062 0.337039 7.59176 0.213045 7.38283 0.12835C7.17389 0.0436544 6.94916 0 6.7221 0C6.49504 0 6.27032 0.0436544 6.06138 0.12835C5.85244 0.213045 5.66359 0.337039 5.50613 0.492909C5.18291 0.812158 5.00229 1.23843 5.00229 1.68201C5.00229 2.12558 5.18291 2.55186 5.50613 2.87111L14.8423 12.0021L5.50384 21.1309C5.18062 21.4501 5 21.8764 5 22.32C5 22.7636 5.18062 23.1898 5.50384 23.5091C6.17709 24.1636 7.26712 24.1636 7.93579 23.5091L18.4902 13.189C18.8169 12.8724 19 12.4461 19 12.0021C19 11.5581 18.8169 11.1318 18.4902 10.8152V10.813H18.4879Z" fill="#9BDDFC"/></svg>'
            navigationPrevLabel='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.51206 13.187L16.0619 23.5071C16.2194 23.663 16.4082 23.787 16.6172 23.8717C16.8261 23.9563 17.0508 24 17.2779 24C17.505 24 17.7297 23.9563 17.9386 23.8717C18.1476 23.787 18.3364 23.663 18.4939 23.5071C18.8171 23.1878 18.9977 22.7616 18.9977 22.318C18.9977 21.8744 18.8171 21.4481 18.4939 21.1289L9.15768 11.9979L18.4962 2.86912C18.8194 2.54987 19 2.12359 19 1.68002C19 1.23644 18.8194 0.810163 18.4962 0.490915C17.8229 -0.163635 16.7329 -0.163635 16.0642 0.490915L5.50977 10.811C5.18307 11.1276 5 11.5539 5 11.9979C5 12.4419 5.18307 12.8682 5.50977 13.1848V13.187H5.51206Z" fill="#9BDDFC"/></svg>'
            >
            <slide>
                 <div class="special-vtb-guess-technics__item">
                    <div class="special-vtb-guess-technics__image">
                        <img src="https://leonardo.osnova.io/10c4cbda-5693-5df4-94b7-f976b4e6b6cc/" alt="">
                    </div>
                    <div class="special-vtb-guess-technics__text">от 14 600 ₽/месяц</div>
                </div>
            </slide>
            <slide>
                <div class="special-vtb-guess-technics__item">
                    <div class="special-vtb-guess-technics__image">
                        <img src="https://leonardo.osnova.io/3c00ce1f-a26a-5b41-8035-63fd90ccc150/" alt="">
                    </div>
                    <div class="special-vtb-guess-technics__text">от 47 900 ₽/месяц</div>
                </div>
            </slide>
            <slide>
                <div class="special-vtb-guess-technics__item">
                    <div class="special-vtb-guess-technics__image">
                        <img src="https://leonardo.osnova.io/12eb2fdf-8d94-5090-991a-637a6a95c5bd/" alt="">
                    </div>
                    <div class="special-vtb-guess-technics__text">от 178 300 ₽/месяц</div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'TechnicsBlock',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus">
.special-vtb-guess-technics
    display flex
    flex-direction row
    justify-content: space-between
    &__item
        display flex
        flex-direction column
        align-items center

        max-width: 184px;
        @media (max-width: 640px)
            max-width none;
        @media (max-width: 425px)
            max-width none;
    &__image
        @media (max-width: 640px)
            max-width: 320px;
    &__text
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
    & button[aria-label="Next page"]
        right 20px;
        &:focus
            outline none;
    & button[aria-label="Previous page"]
        left 20px;
        &:focus
            outline none;
</style>

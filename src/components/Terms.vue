<template>
    <div class="special-vtb-guess-terms">
        Вот условия
        <div class="special-vtb-guess-terms__items">
            <div class="special-vtb-guess-terms__item">
                <div class="special-vtb-guess-terms__title">от <span>7%</span></div>
                <div class="special-vtb-guess-terms__desc">первоначальный взнос по договору</div>
            </div>

            <div class="special-vtb-guess-terms__item">
                <div class="special-vtb-guess-terms__title">до <span>20%</span></div>
                <div class="special-vtb-guess-terms__desc">возврат НДС</div>
            </div>

            <div class="special-vtb-guess-terms__item">
                <div class="special-vtb-guess-terms__title">до <span>5 лет</span></div>
                <div class="special-vtb-guess-terms__desc">разбивка платежей</div>
            </div>

            <div class="special-vtb-guess-terms__item">
                <div class="special-vtb-guess-terms__title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 26">
                        <path fill="#009FDF" d="M21.9597 14.4132c-.0818-.2025-.2727-.3346-.4845-.3346H13.96V.541502C13.96.242602 13.7251 0 13.4357 0H8.56434C8.27491 0 8.04.242602 8.04.541502V14.0786H.524334c-.21181 0-.40268.1322-.4844738.3336-.080762.2025-.03671909.4354.1132538.5902L10.6133 25.8408c.0986.1018.2318.1592.3713.1592.1394 0 .2726-.0574.3712-.1581l10.4906-10.8384c.15-.1549.1951-.3877.1133-.5903z"/>
                    </svg>
                </div>
                <div class="special-vtb-guess-terms__desc">снижение налога на прибыль</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Terms',
};
</script>

<style lang="stylus">
.special-vtb-guess-terms
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    &__items
        display flex
        flex-direction row
        justify-content space-between
        flex-wrap: wrap;

        margin-top: 16px;
        margin-bottom: 24px;
    &__item
        max-width: 136px;
        width 100%
        @media (max-width: 640px)
            &:nth-child(1),
            &:nth-child(2)
                margin-bottom 37px;
        @media (max-width: 320px)
            max-width: 124px;

    &__title
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;

        color: #009FDF;
        & > span
            font-size: 28px
            font-weight: bold
            line-height: 30px
        & > svg
            width: 22px
            height 26px;
    &__desc
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #333333;

</style>

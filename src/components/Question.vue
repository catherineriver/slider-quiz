<template>
    <div class="special-vtb-guess-slider">
        <div class="special-vtb-guess-slider__wrapper">
            <div class="special-vtb-guess-slider__grade min"
                v-html="this.data.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')">
            </div>
            <vue-slider
                :min="this.data.min"
                :max="this.data.max"
                v-model="value"
                contained="true"
                :interval="this.interval"
                :dragOnClick='true'
                :disabled="this.disabled"
                @drag-end="getNextQuestion(value)">

                <template v-slot:dot>
                    <div :class="['custom-dot']" />
                </template>

                <template v-slot:tooltip="{ value }">
                    <div :class="['custom-tooltip']">{{ value }} ₽</div>
                </template>
            </vue-slider>
            <div class="special-vtb-guess-slider__grade max"
                v-html="this.data.max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')">
            </div>
        </div>

        <div class="special-vtb-guess-slider__price">Ваша цена: {{this.formatValue(this.value)}} ₽</div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'Question',
  components: {
    VueSlider,
  },
  props: {
    questionIndex: {
      type: Number,
    },
    questionsLength: {
      type: Number,
    },
    data: {
      type: Object,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      formattedValue: '',
      value: this.data.min,
      interval: 100000,
    };
  },
  mounted() {

  },
  methods: {
    getValue() {
      this.value = this.$refs.slider.getValue();
    },
    formatValue(value) {
      this.formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return this.formattedValue;
    },
    getNextQuestion(value) {
      this.$emit('drag-end', value);
    },
  },

};
</script>

<style lang="stylus">
.special-vtb-guess-slider
    font-size: 16px;
    line-height: 22px;

    @media (max-width: 640px)
      margin-top: 10px;
    &__wrapper
      max-width: 320px;
      position relative
      height 70px

      & .vue-slider-process
          background: linear-gradient(90deg, #9BDDFC 0%, #00AAFF 100%, #00AAFF 100%);
      & .vue-slider-rail
          height 6px;
          background: #C4C4C4;

      & .custom-tooltip
          display none
      & .custom-dot
          position: absolute;
          top: -5px;
          border-radius: 50%;
          width: 24px;
          height 24px;
          background: #00AAFF;
          border: 2px solid rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
          box-shadow: 0px 0px 6px rgba(102, 126, 180, 0.6);
          cursor: grab
          &:active
            cursor: grabbing
      @media (max-width: 640px)
        max-width: none;
    &__grade
      position absolute
      top: 28px;
      font-weight: 500;
      &.max
          right 0
      &.min
          left 0
    &__price
      font-weight: bold;
</style>

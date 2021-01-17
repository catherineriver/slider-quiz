<template>
    <div :class="[
      'special-vtb-guess-result',
      {'active': isResult }]">
      <span v-html="this.result"></span>
    </div>
</template>

<script>

export default {
  name: 'Result',
  props: {
    result: {
      type: String,
    },
    isResult: {
      type: Boolean,
    },
  },
};
</script>

<style lang="stylus">
@keyframes vtb-progress
  0%
    width: 100%;
  100%
    width: 0%;
.special-vtb-guess-result
  position relative
  display: flex;
  flex-direction: column;
  margin-top 36px;
  font-size: 16px;
  line-height: 24px;
  & .correct
    color: #00AA11;
    font-weight: bold;
  & .error
    font-weight: bold;
    color: #FB4F4F
  &:before
    content ''
    width: 640px;
    height: 1px;
    background: #5e5e5e;
    opacity: 0.2;
    margin: 20px -20px;
    left: 0;
    position: absolute;
    top: -40px;

    @media (max-width: 640px)
      top: -40px;

  &.active
    margin-bottom 16px
    &:after
      content ''
      width: 640px;
      height: 3px;
      background: #00AAFF;
      opacity: 1;
      margin: 19px -20px;
      right: 0;
      position: absolute;
      top: -40px;
      animation: vtb-progress 6s linear;
</style>

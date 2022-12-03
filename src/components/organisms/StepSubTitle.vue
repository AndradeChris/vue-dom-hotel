<template>
  <div class="wrapper-step">
    <MiniTitle :text="step" />
    <SubTitle :text="subTitle" />
  </div>
</template>

<script>
import SubTitle from '@/components/atoms/SubTitle.vue';
import MiniTitle from '@/components/atoms/MiniTitle.vue';

export default {
  name: "StepSubTitle",
  props: {
    step: String,
    subTitle: String,
    size: String
  },
  components: {
    SubTitle,
    MiniTitle
  }
};
</script>

<style scoped>
.wrapper-step {
  display: flex;
}

.wrapper-step h2,
.wrapper-step h4 {
  font-size: v-bind(size);
}
</style>

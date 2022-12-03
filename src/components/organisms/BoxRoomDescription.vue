<template>
  <div class="wrapper">
    <div class="wrapper-image">
      <DefaultImage :src="image" />
    </div>
    <div class="wrapper-description">
      <div class="wrapper-title">
        <MiniTitle :text="title" />
        <DescriptionParagraph :text="description" />
      </div>
      <div class="wrapper-price">
        <div class="input-container">
          <GenericInput type="radio" name="price" id="price" />
        </div>
        <StepSubTitle step="R$:" :subTitle="value" />
      </div>
    </div>
  </div>
</template>

<script>
import MiniTitle from '../atoms/MiniTitle.vue';
import DescriptionParagraph from '../atoms/DescriptionParagraph.vue';
import StepSubTitle from './StepSubTitle.vue';
import GenericInput from '../atoms/GenericInput.vue';
import DefaultImage from '../atoms/DefaultImage.vue';

export default {
  name: 'BoxRoomDescrition',
  components: {
    MiniTitle,
    DescriptionParagraph,
    StepSubTitle,
    GenericInput,
    DefaultImage
  },
  props: {
    image: String,
    title: String,
    description: String,
    value: String
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-image {
  margin-right: 30px;
  width: 30%;
}

.wrapper-description {
  display: flex;
  flex-direction: column;
}

.wrapper-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.wrapper-title h4,
.wrapper-title p {
  margin-bottom: 10px;
}

.wrapper-price {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.wrapper-price input {
  margin-right: 10px;
}

input-container {
  width: fit-content;
}
</style>

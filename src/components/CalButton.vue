<template>
  <div class="CalButton" @click="clickButton()">
    {{ buttonContent }}
  </div>
</template>

<script>
export default {
  name: 'CalButton',
  props: {
    buttonContent: {
      type: String,
      default() { return 'cal'; },
    },
    buttonId: {
      type: Number,
      default() { return 0; },
    },
  },
  methods: {
    clickButton() {
      this.$emit('click-button', { buttonId: this.buttonId, buttonContent: this.buttonContent });
    },
  },
};
</script>

<style scoped>
.CalButton {
  background-color: gray;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
}
.CalButton:hover {
  background-color: black;
}
</style>

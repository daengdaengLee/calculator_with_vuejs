<template>
  <div class="CalButton">
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
}
.CalButton:hover {
  background-color: black;
}
</style>

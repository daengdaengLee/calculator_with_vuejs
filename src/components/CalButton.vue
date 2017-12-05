<template>
  <div class="CalButton">
    {{ testmsg }}
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
  data() {
    return { testmsg: 'CalButton component' };
  },
};
</script>

<style>
</style>

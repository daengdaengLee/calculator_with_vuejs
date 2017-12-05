<template>
  <div id="cal-button">
    {{ testmsg }}
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

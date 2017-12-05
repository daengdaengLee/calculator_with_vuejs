<template>
  <div id="cal-buttons">
    {{ testmsg }}
    <cal-button></cal-button>
  </div>
</template>

<script>
import CalButton from './CalButton';

export default {
  name: 'CalButtons',
  data() {
    return {
      testmsg: 'CalButtons component',
      buttonContents: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '×', '÷', '=', 'C'],
    };
  },
  components: {
    CalButton,
  },
};
</script>

<style>
</style>

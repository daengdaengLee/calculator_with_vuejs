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
    };
  },
  components: {
    CalButton,
  },
};
</script>

<style>
</style>

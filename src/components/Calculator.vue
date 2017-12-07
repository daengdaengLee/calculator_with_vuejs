<template>
  <div class="Calculator">
    <cal-display></cal-display>
    <cal-buttons></cal-buttons>
  </div>
</template>

<script>
import CalDisplay from './CalDisplay';
import CalButtons from './CalButtons';

export default {
  name: 'Calculator',
  components: {
    CalDisplay,
    CalButtons,
  },
};
</script>

<style>
</style>

<template>
  <div id="app">
    <cal-display></cal-display>
    <cal-buttons></cal-buttons>
  </div>
</template>

<script>
import CalDisplay from './components/CalDisplay';
import CalButtons from './components/CalButtons';

export default {
  name: 'app',
  components: {
    CalDisplay,
    CalButtons,
  },
};
</script>

<style>
</style>

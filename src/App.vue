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

<style scoped>
#app {
  padding: 5px;
  border: 1px solid black;
  background-color: darkgray;
  box-sizing: border-box;
  width: 214px;
  position: relative;
  left: 50%;
  margin-left: -107px;
  top: 200px;
}
</style>

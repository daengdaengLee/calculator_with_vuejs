<template>
  <div id="cal-buttons">
    {{ testmsg }}
    <cal-button :button-content="buttonContents[0].content"></cal-button>
  </div>
</template>

<script>
import CalButton from './CalButton';

export default {
  name: 'CalButtons',
  data() {
    return {
      testmsg: 'CalButtons component',
      buttonContents: [
        { id: 0, content: '0' },
        { id: 1, content: '1' },
        { id: 2, content: '2' },
        { id: 3, content: '3' },
        { id: 4, content: '4' },
        { id: 5, content: '5' },
        { id: 6, content: '6' },
        { id: 7, content: '7' },
        { id: 8, content: '8' },
        { id: 9, content: '9' },
        { id: 10, content: '+' },
        { id: 11, content: '-' },
        { id: 12, content: '×' },
        { id: 13, content: '÷' },
        { id: 14, content: '=' },
        { id: 15, content: 'C' },
      ],
    };
  },
  components: {
    CalButton,
  },
};
</script>

<style>
</style>

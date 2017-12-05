<template>
  <div class="CalButtons">
    <cal-button
      v-for="buttonContent in buttonContents"
      :key="buttonContent.id"
      :id="buttonContent.id"
      :button-content="buttonContent.content"
    >
    </cal-button>
  </div>
</template>

<script>
import CalButton from './CalButton';

export default {
  name: 'CalButtons',
  data() {
    return {
      buttonContents: [
        { id: 7, content: '7' },
        { id: 8, content: '8' },
        { id: 9, content: '9' },
        { id: 13, content: '÷' },
        { id: 4, content: '4' },
        { id: 5, content: '5' },
        { id: 6, content: '6' },
        { id: 12, content: '×' },
        { id: 1, content: '1' },
        { id: 2, content: '2' },
        { id: 3, content: '3' },
        { id: 11, content: '-' },
        { id: 15, content: 'C' },
        { id: 0, content: '0' },
        { id: 14, content: '=' },
        { id: 10, content: '+' },
      ],
    };
  },
  components: {
    CalButton,
  },
};
</script>

<style scoped>
.CalButtons {
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
}
</style>

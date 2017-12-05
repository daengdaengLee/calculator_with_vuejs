<template>
  <div class="CalButtons">
    <cal-button
      v-for="buttonContent in buttonContents"
      :key="buttonContent.id"
      :id="buttonContent.id"
      :button-content="buttonContent.content"
      @click-button="clickCalButton"
    >
    </cal-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CalButton from './CalButton';

export default {
  name: 'CalButtons',
  computed: mapState(['buttonContents']),
  components: {
    CalButton,
  },
  methods: {
    clickCalButton(content) {
      alert(content);
    },
  },
};
</script>

<style scoped>
.CalButtons {
  border: 1px solid black;
  width: 202px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>

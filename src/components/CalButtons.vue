<template>
  <div class="CalButtons">
    <cal-button
      v-for="buttonContent in buttonContents"
      :key="buttonContent.id"
      :id="buttonContent.id"
      :button-content="buttonContent.content"
      :button-id="buttonContent.id"
      @click-button="clickCalButton"
    >
    </cal-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CalButton from './CalButton';
import Constant from '../Constant';

export default {
  name: 'CalButtons',
  computed: mapState(['buttonContents']),
  components: {
    CalButton,
  },
  methods: mapActions([Constant.CLICK_CAL_BUTTON]),
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

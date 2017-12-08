<template>
  <div class="CalDisplay">
    <p v-if="error" class="MainDisplay">ERROR</p>
    <p v-if="equalButton" class="MainDisplay">{{ calResult }}</p>
    <p v-if="!error && !equalButton" class="MainDisplay">{{ calDisplayNum }}</p>
    <p class="SubDisplay">{{ calDisplayExpression }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'CalDisplay',
  computed: _.extend(
    mapState(['equalButton', 'error']),
    mapGetters(['calDisplayExpression', 'calDisplayNum', 'calResult']),
  ),
};
</script>

<style scoped>
.CalDisplay {
  box-sizing: border-box;
  border: 1px solid black;
  width: 230px;
  padding: 10px;
}
.CalDisplay .MainDisplay {
  font-size: 1.2rem;
  text-align: right;
}
.CalDisplay .SubDisplay {
  font-size: 0.8rem;
  color: gray;
  text-align: right;
  margin: 3px 0 0 0;
}
</style>

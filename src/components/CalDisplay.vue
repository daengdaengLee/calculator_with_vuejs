<template>
  <div class="CalDisplay">
    <p v-if="error">ERROR</p>
    <p v-if="equalButton">{{ calResult }}</p>
    <p v-if="!error && !equalButton">{{ calDisplayNum }}</p>
    <p>{{ calDisplayExpression }}</p>
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
</style>

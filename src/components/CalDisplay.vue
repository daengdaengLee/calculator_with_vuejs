<template>
  <div class="CalDisplay">
    {{ calDisplayNum }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CalDisplay',
  computed: mapGetters(['calDisplayNum']),
};
</script>

<style>
</style>

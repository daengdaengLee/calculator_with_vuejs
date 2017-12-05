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

<style scoped>
.CalDisplay {
  width: 202px;
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}
</style>

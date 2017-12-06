<template>
  <div id="app">
    <calculator></calculator>
    <app-footer :user-url="userUrl" :code-repo-url="codeRepoUrl"></app-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Calculator from './components/Calculator';
import AppFooter from './components/AppFooter';

export default {
  name: 'app',
  computed: mapState(['userUrl', 'codeRepoUrl']),
  components: {
    Calculator,
    AppFooter,
  },
};
</script>

<style>
</style>

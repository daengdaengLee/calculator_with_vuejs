<template>
  <footer>
    <p>Coded by <a :href="userUrl" target="_blank">KunhoLee</a></p>
    <p>You can see the code from <a :href="codeRepoUrl" target="_blank">here</a>!</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    userUrl: {
      type: String,
      default() { return '#'; },
    },
    codeRepoUrl: {
      type: String,
      default() { return '#'; },
    },
  },
};
</script>

<style>
</style>

<template>
  <div id="app">
    <h1 class="CalHeading">Web Calculator</h1>
    <calculator class="Cal"></calculator>
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
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html, body, #app {
  height: 100%;
}
</style>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#app .CalHeading {
  margin-bottom: 20px;
  font-size: 2rem;
  width: 250px;
  text-align: center;
}
#app .Cal {
  margin-bottom: 20px;
}
</style>

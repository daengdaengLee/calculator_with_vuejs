<template>
  <div class="CalButtons">
    <div class="CalRow">
      <cal-button
        :button-id="buttonContents.id17.id"
        :button-content="buttonContents.id17.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id18.id"
        :button-content="buttonContents.id18.content"
        @click-button="clickCalButton"
      >
      </cal-button>
    </div>
    <div class="CalRow">
      <cal-button
        :button-id="buttonContents.id8.id"
        :button-content="buttonContents.id8.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id9.id"
        :button-content="buttonContents.id9.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id10.id"
        :button-content="buttonContents.id10.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id15.id"
        :button-content="buttonContents.id15.content"
        @click-button="clickCalButton"
      >
      </cal-button>
    </div>
    <div class="CalRow">
      <cal-button
        :button-id="buttonContents.id5.id"
        :button-content="buttonContents.id5.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id6.id"
        :button-content="buttonContents.id6.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id7.id"
        :button-content="buttonContents.id7.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id14.id"
        :button-content="buttonContents.id14.content"
        @click-button="clickCalButton"
      >
      </cal-button>
    </div>
    <div class="CalRow">
      <cal-button
        :button-id="buttonContents.id2.id"
        :button-content="buttonContents.id2.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id3.id"
        :button-content="buttonContents.id3.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id4.id"
        :button-content="buttonContents.id4.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id13.id"
        :button-content="buttonContents.id13.content"
        @click-button="clickCalButton"
      >
      </cal-button>
    </div>
    <div class="CalRow">
      <cal-button
        :button-id="buttonContents.id11.id"
        :button-content="buttonContents.id11.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id1.id"
        :button-content="buttonContents.id1.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id16.id"
        :button-content="buttonContents.id16.content"
        @click-button="clickCalButton"
      >
      </cal-button>
      <cal-button
        :button-id="buttonContents.id12.id"
        :button-content="buttonContents.id12.content"
        @click-button="clickCalButton"
      >
      </cal-button>
    </div>
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
  methods: mapActions({
    clickCalButton: Constant('CLICK_CAL_BUTTON'),
  }),
};
</script>

<style scoped>
.CalRow {
  display: flex;
}
</style>

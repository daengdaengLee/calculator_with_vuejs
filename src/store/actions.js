import Constant from '../Constant';

export default {
  [Constant.CLICK_CAL_BUTTON]: (store, payload) => {
    store.commit(Constant.CLICK_CAL_BUTTON, payload);
  },
};

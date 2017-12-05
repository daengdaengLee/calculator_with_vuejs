import Constant from '../Constant';

export default {
  [Constant.CLICK_CAL_BUTTON]: (state, payload) => {
    const storeState = state;
    storeState.testmsg = payload.buttonContent;
  },
};

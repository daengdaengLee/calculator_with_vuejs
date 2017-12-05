import Constant from '../Constant';

export default {
  [Constant.CLICK_NUM_BUTTON]: (state, payload) => {
    const storeState = state;
    switch (storeState.currentInputType) {
      case 'init':
        storeState.calArray.push(payload.content);
        break;
      case 'number': {
        let temp = storeState.calArray[storeState.calArray.length - 1];
        temp += payload.content;
        storeState.calArray.splice(storeState.calArray.length - 1, 1, temp);
        break;
      }
      case 'operator':
        storeState.calArray.push(payload.content);
        break;
      default:
    }
    storeState.currentInputType = 'number';
  },
  [Constant.CLICK_OPERATOR_BUTTON]: (state, payload) => {
    const storeState = state;
    storeState.calArray.push(payload.content);
    storeState.currentInputType = 'operator';
  },
  [Constant.CLICK_EQUAL_BUTTON]: (state) => {
    const storeState = state;
    storeState.currentInputType = 'equal';
  },
  [Constant.CLICK_CLEAR_BUTTON]: (state) => {
    const storeState = state;
    storeState.calArray.splice(0);
    storeState.currentInputType = 'init';
  },
};

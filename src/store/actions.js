import Constant from '../Constant';

export default {
  [Constant('CLICK_CAL_BUTTON')]: (store, payload) => {
    // payload = { buttonId: Number, buttonContent: String }
    let type;
    switch (payload.buttonId) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
        type = 'number';
        break;
      case 10:
        type = 'plus';
        break;
      case 11:
        type = 'minus';
        break;
      case 12:
        type = 'multiplication';
        break;
      case 13:
        type = 'division';
        break;
      case 14:
        type = 'equal';
        break;
      case 15:
        type = 'clear';
        break;
      default:
    }
    switch (type) {
      case 'number':
        store.commit(Constant('CLICK_NUM_BUTTON'), { content: payload.buttonContent });
        break;
      case 'plus': case 'minus': case 'multiplication': case 'division':
        store.commit(Constant('CLICK_OPERATOR_BUTTON'), { type, content: payload.buttonContent });
        break;
      case 'equal':
        store.commit(Constant('CLICK_EQUAL_BUTTON'));
        break;
      case 'clear':
        store.commit(Constant('CLICK_CLEAR_BUTTON'));
        break;
      default:
    }
  },
};

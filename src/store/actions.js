/* eslint-disable */
import Constant from '../Constant';

export default {
  [Constant('CLICK_CAL_BUTTON')]: (store, payload) => {
    // payload = { buttonId: Number, buttonContent: String }
    let type;
    switch (payload.buttonId) {
      case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
        type = 'number';
        break;
      case 11:
        type = 'dot';
        break;
      case 12:
        type = 'plus';
        break;
      case 13:
        type = 'minus';
        break;
      case 14:
        type = 'multiplication';
        break;
      case 15:
        type = 'division';
        break;
      case 16:
        type = 'equal';
        break;
      case 17:
        type = 'all clear';
        break;
      case 18:
        type = 'clear error';
        break;
      default:
    }
    switch (type) {
      case 'number':
        // currentInputType: init, number, plus, minus, multiplication, division, dot 가능
        switch (store.state.currentInputType) {
          case 'init': case 'plus': case 'minus': case 'multiplication': case 'division':
            store.commit(Constant('ADD_BUTTON'), { type, content: payload.buttonContent });
            break;
          default:
            store.commit(Constant('MERGE_BUTTON'), { type, content: payload.buttonContent });
        }
        break;
      case 'dot':
        // currentInputType: number 가능 / init, plus, minus, multiplication, division, dot 불가능
        switch (store.state.currentInputType) {
          case 'number':
            store.commit(Constant('MERGE_BUTTON'), { type, content: payload.buttonContent });
            break;
          default:
            store.commit(Constant('ERROR'));
        }
        break;
      case 'plus': case 'minus': case 'multiplication': case 'division':
        // currentInputType: number 가능 / init, plus, minus, multiplication, division, dot 불가능
        switch (store.state.currentInputType) {
          case 'number':
            store.commit(Constant('ADD_BUTTON'), { type, content: payload.buttonContent });
            break;
          default:
            store.commit(Constant('ERROR'));
        }
        break;
      case 'equal':
        // currentInputType: number, init 가능 / operator, dot 불가능
        switch (store.state.currentInputType) {
          case 'init':
            break;
          case 'number':
            store.commit(Constant('EQUAL'));
            break;
          default:
            store.commit(Constant('ERROR'));
        }
        break;
      case 'all clear':
        // currentInputType: init, number, plus, minus, multiplication, division, dot 가능
        store.commit(Constant('AC_BUTTON'));
        break;
      case 'clear error':
        // currentInputType: init, number, plus, minus, multiplication, division, dot 가능
        switch (store.state.currentInputType) {
          case 'init':
            break;
          default:
            store.commit(Constant('CE_BUTTON'));
        }
      default:
    }
  },
};

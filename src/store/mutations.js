import Constant from '../Constant';

export default {
  [Constant('ADD_BUTTON')]: (state, payload) => {
    // payload = { type: String, content: String }
    const storeState = state;
    storeState.error = false;
    storeState.equalButton = false;
    storeState.currentInputType = payload.type;
    storeState.calArray.push(payload);
  },
  [Constant('MERGE_BUTTON')]: (state, payload) => {
    // payload = { type: String, content: String }
    const storeState = state;
    storeState.error = false;
    storeState.equalButton = false;
    storeState.currentInputType = payload.type;
    const temp = storeState.calArray.pop();
    temp.content += payload.content;
    storeState.calArray.push(temp);
  },
  [Constant('ERROR')]: (state) => {
    const storeState = state;
    storeState.error = true;
  },
  [Constant('EQUAL')]: (state) => {
    const storeState = state;
    storeState.error = false;
    storeState.equalButton = true;
  },
  [Constant('AC_BUTTON')]: (state) => {
    const storeState = state;
    storeState.currentInputType = 'init';
    storeState.calArray.splice(0);
    storeState.equalButton = false;
    storeState.error = false;
  },
};

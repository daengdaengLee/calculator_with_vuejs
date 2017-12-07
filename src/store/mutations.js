import Constant from '../Constant';

export default {
  [Constant('CLICK_NUM_BUTTON')]: (state, payload) => {
    // payload = { content: String }
    const storeState = state;
    switch (storeState.currentInputType) {
      case 'init':
        // currentInputType, calArray, displayNum, calNum 변경필요

        // calArray 변경
        storeState.calArray.push({ type: 'number', content: payload.content });

        // displayNum 변경
        storeState.displayNum = payload.content;

        // calNum 변경
        storeState.calNum = Number(payload.content);

        // currentInputType 변경
        storeState.currentInputType = 'number';

        break;
      case 'number': case 'dot':
        // calArray, displayNum 변경필요

        // displayNum 변경
        storeState.displayNum += payload.content;

        // calArray 변경
        storeState.calArray.pop();
        storeState.calArray.push({ type: 'number', content: storeState.displayNum });

        break;
      case 'operator':
        // currentInputType, calArray, displayNum 변경필요

        // currentInputType 변경
        storeState.currentInputType = 'number';

        // calArray 변경
        storeState.calArray.push({ type: 'number', content: payload.content });

        // displayNum 변경
        storeState.displayNum = payload.content;

        break;
      default:
    }
  },
  [Constant('CLICK_DOT_BUTTON')]: (state) => {
    const storeState = state;
    // currentInputType, calArray, displayNum 변경필요

    // currentInputType 변경
    storeState.currentInputType = 'dot';

    // displayNum 변경
    storeState.displayNum += '.';

    // calArray 변경
    storeState.calArray.pop();
    storeState.calArray.push({ type: 'numben', content: storeState.displayNum });
  },
  [Constant('CLICK_OPERATOR_BUTTON')]: (state, payload) => {
    // payload = { type: String, content: String }
    const storeState = state;
    // currentInputType, calArray, calNum, currentOperator 변경필요

    // currentInputType 변경
    storeState.currentInputType = 'operator';

    // calArray 변경
    storeState.calArray.push({ type: payload.type, content: payload.content });

    // calNum 변경
    switch (storeState.currentOperator) {
      case 'none':
        // 처음 operator를 입력하는 경우, 계산할 것이 없다
        break;
      default:
    }

    // currentOperator 변경
    storeState.currentOperator = payload.type;
  },
  // [Constant('CLICK_EQUAL_BUTTON')]: (state) => {
  //   const storeState = state;
  //   storeState.currentInputType = 'equal';
  // },
  // [Constant('CLICK_AC_BUTTON')]: (state) => {
  //   const storeState = state;
  //   storeState.calArray.splice(0);
  //   storeState.currentInputType = 'init';
  // },
};

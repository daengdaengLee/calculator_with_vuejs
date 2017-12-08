export default {
  calDisplayExpression(state) {
    if (state.calArray.length === 0) {
      return '0';
    }
    return state.calArray.reduce((accumulator, currentValue) => accumulator + currentValue.content, '');
  },
  calDisplayNum(state) {
    switch (state.calArray.length) {
      case 0:
        return '0';
      case 1:
        return state.calArray[0].content;
      default:
        switch (state.calArray[state.calArray.length - 1].type) {
          case 'number':
            return state.calArray[state.calArray.length - 1].content;
          default:
            return state.calArray[state.calArray.length - 2].content;
        }
    }
  },
  calResult(state) {
    return state.equalButton;
  },
};

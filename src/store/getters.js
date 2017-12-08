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
    if (state.equalButton) {
      let result = Number(state.calArray[0].content);
      for (let i = 0, len = state.calArray.length; i < len; i += 1) {
        switch (state.calArray[i].type) {
          case 'plus':
            result += Number(state.calArray[i + 1].content);
            break;
          case 'minus':
            result -= Number(state.calArray[i + 1].content);
            break;
          case 'multiplication':
            result *= Number(state.calArray[i + 1].content);
            break;
          case 'division':
            result /= Number(state.calArray[i + 1].content);
            break;
          default:
        }
      }
      return result;
    }
    return '0';
  },
};

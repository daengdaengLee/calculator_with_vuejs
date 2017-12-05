export default {
  calDisplayNum(state) {
    let result;
    switch (state.currentInputType) {
      case 'init':
        result = 0;
        break;
      case 'number': case 'operator':
        result = state.calArray[state.calArray.length - 1].content;
        break;
      default:
        for (let i = 0, len = state.calArray.length; i < len; i += 1) {
          if (i === 0) {
            result = Number(state.calArray[i].content);
          } else if (state.calArray[i].type === 'plus') {
            result += Number(state.calArray[i + 1].content);
          } else if (state.calArray[i].type === 'minus') {
            result -= Number(state.calArray[i + 1].content);
          } else if (state.calArray[i].type === 'multiplication') {
            result *= Number(state.calArray[i + 1].content);
          } else if (state.calArray[i].type === 'division') {
            result /= Number(state.calArray[i + 1].content);
          }
        }
    }
    return result;
  },
};

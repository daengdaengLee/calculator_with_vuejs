export default function (type) {
  let result;
  switch (type) {
    case 'CLICK_CAL_BUTTON':
      result = 'clickCalButton';
      break;
    case 'CLICK_NUM_BUTTON':
      result = 'clickNumButton';
      break;
    case 'CLICK_OPERATOR_BUTTON':
      result = 'clickOperatorButton';
      break;
    case 'CLICK_EQUAL_BUTTON':
      result = 'clickEqualButton';
      break;
    case 'CLICK_CLEAR_BUTTON':
      result = 'clickClearButton';
      break;
    default:
      result = 'No Constant';
  }
  return result;
}

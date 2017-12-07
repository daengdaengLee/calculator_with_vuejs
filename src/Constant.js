export default function (type) {
  let result;
  switch (type) {
    case 'CLICK_CAL_BUTTON':
      result = 'clickCalButton';
      break;
    case 'CLICK_NUM_BUTTON':
      result = 'clickNumButton';
      break;
    case 'CLICK_DOT_BUTTON':
      result = 'clickDotButton';
      break;
    case 'CLICK_OPERATOR_BUTTON':
      result = 'clickOperatorButton';
      break;
    case 'CLICK_EQUAL_BUTTON':
      result = 'clickEqualButton';
      break;
    case 'CLICK_AC_BUTTON':
      result = 'clickACButton';
      break;
    case 'CLICK_CE_BUTTON':
      result = 'clickCEButton';
      break;
    default:
      result = 'No Constant';
  }
  return result;
}

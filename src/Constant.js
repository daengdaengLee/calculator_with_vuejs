export default function (type) {
  let result;
  switch (type) {
    case 'CLICK_CAL_BUTTON':
      result = 'clickCalButton';
      break;
    case 'AC_BUTTON':
      result = 'clickACButton';
      break;
    case 'CE_BUTTON':
      result = 'clickCEButton';
      break;
    case 'ADD_BUTTON':
      result = 'addButton';
      break;
    case 'MERGE_BUTTON':
      result = 'mergeButton';
      break;
    case 'ERROR':
      result = 'error';
      break;
    case 'EQUAL':
      result = 'equal';
      break;
    default:
      result = 'No Constant';
  }
  return result;
}

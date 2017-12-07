export default {
  buttonContents: {
    id1: { id: 1, content: '0' },
    id2: { id: 2, content: '1' },
    id3: { id: 3, content: '2' },
    id4: { id: 4, content: '3' },
    id5: { id: 5, content: '4' },
    id6: { id: 6, content: '5' },
    id7: { id: 7, content: '6' },
    id8: { id: 8, content: '7' },
    id9: { id: 9, content: '8' },
    id10: { id: 10, content: '9' },
    id11: { id: 11, content: '.' },
    id12: { id: 12, content: '+' },
    id13: { id: 13, content: '-' },
    id14: { id: 14, content: '×' },
    id15: { id: 15, content: '÷' },
    id16: { id: 16, content: '=' },
    id17: { id: 17, content: 'AC' },
    id18: { id: 18, content: 'CE' },
  },
  currentInputType: 'init', // init, number, operator, dot 중 하나
  calArray: [], // { type: String, content: String }
  displayNum: '0', // String 상태 유지
  calNum: 0, // Number 상태 유지
  currentOperator: 'none', // none, plus, minus, multiplication, division 중 하나
  userUrl: 'https://daengdaenglee.github.io/',
  codeRepoUrl: 'https://github.com/daengdaengLee/calculator_with_vuejs',
};

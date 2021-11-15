const redux = require('redux');

function increment() {
  return {
    type: 'INCREMENT_STATE',
  };
}

function decrement() {
  return {
    type: 'DECREMENT_STATE',
  };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT_STATE':
      return {
        count: state.count + 1,
      };

    case 'DECREMENT_STATE':
      return {
        count: state.count - 1,
      };
      default:
          return state
  }

  // **estilo if/ else para facilitar compreensão
  // if (action.type === 'INCREMENT_STATE') {
  //     return {
      //count: state.count + 1
//}
  // } else if (action.type === 'DECREMENT_STATE') {
  //     return {
//      count: state.count - 1
//}
  // }
  //**/
}

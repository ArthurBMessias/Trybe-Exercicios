const redux = require('redux');

function changeState(amount) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount,
  };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        state: state.count + action.payload,
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(getState());
});

store.dispatch(changeState(1));

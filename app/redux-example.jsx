var redux = require('redux');

let reducer = (state = {name: 'Anonymous'}, action) => {
    return state;
}
let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);
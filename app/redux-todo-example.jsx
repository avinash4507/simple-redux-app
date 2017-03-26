var redux = require('redux');

let stateDefault = {
    todos: [],
    searchText: '',
    showCompleted: false
}
let reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            }    
        default:
            return state;
    }
}

let store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let unsubscribe = store.subscribe(() => {
    let state = store.getState();
}) 

let currentState = store.getState();

store.dispatch({
    type: 'UPDATE_SEARCH_TEXT',
    searchText: 'Avinash'
});

store.dispatch({
    type: 'UPDATE_SEARCH_TEXT',
    searchText: 'Singh'
})


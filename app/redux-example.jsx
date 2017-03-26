var redux = require('redux');

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}
let hobbieId = 1;
let movieId = 1;
let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state, 
        {
          id: hobbieId++,
          hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  }
}

let moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: movieId++,
          movie: action.movie,
          genre: action.genre
        }
      ]  
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
}

let reducer = redux.combineReducers({name: nameReducer, hobbies: hobbiesReducer, movies: moviesReducer});

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log(state)
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({type: 'CHANGE_NAME', name: 'Andrew'});

store.dispatch({type: 'ADD_HOBBY', hobby: 'swimming'});

store.dispatch({type: 'CHANGE_NAME', name: 'Emily'});

store.dispatch({type: 'ADD_HOBBY', hobby: 'running'});

store.dispatch({type: 'REMOVE_HOBBY', id: 2});

store.dispatch({type: 'ADD_MOVIE', movie: 'madagascar', genre: 'anime'});

store.dispatch({type: 'ADD_MOVIE', movie: 'inception', genre: 'thriller'})

store.dispatch({type: 'REMOVE_MOVIE', id: 1});

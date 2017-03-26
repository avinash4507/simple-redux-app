var redux = require('redux');

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}
let hobbieId = 1;
let movieId = 1;
var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: hobbieId++,
            hobby: action.hobby
          }
        ]
      }
    case 'ADD_MOVIE': 
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: movieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      }
    default:
      return state;
  }
};
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

store.dispatch({type: 'ADD_MOVIE', movie: 'madagascar', genre: 'anime'});

store.dispatch({type: 'ADD_MOVIE', movie: 'inception', genre: 'thriller'})

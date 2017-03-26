var redux = require('redux');

// Name reducer and action generators
// ---------------
let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

let changeName = name => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// Hobbies reducer and action generators
// ---------------
let nextHobbieId = 1;
let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state, 
        {
          id: nextHobbieId++,
          hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  }
}

let addHobby = hobby => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

let removeHobby = id => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

// Movies reducer and action generators
// ----------------
let nextMovieId = 1;
let moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
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

let addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
}

let removeMovie = id => {
  return {
    type: 'REMOVE_MOVIE',
    id
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

store.dispatch(changeName('Andrew'));
store.dispatch(addHobby('swimming'));
store.dispatch(addHobby('running'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));
store.dispatch(addMovie('madagascar', 'anime'));
store.dispatch(addMovie('inception', 'thriller'));
store.dispatch(removeMovie(1));

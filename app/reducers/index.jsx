export let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

let nextHobbieId = 1;
export let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state, {
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

let nextMovieId = 1;
export let moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state, {
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

export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {isFetching: true, url: undefined}
    case 'COMPLETE_LOCATION_FETCH':
      return {isFetching: false, url: action.url}
    default:
      return state;
  }
}

var redux = require('redux');
var store = require('./store/configureStore').configure();
var actions = require('./actions/index');

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log(state);
  if (state.map.isFetching) {
    document
      .getElementById('app')
      .innerHTML = 'loading ...'
  } else if (state.map.url) {
    document
      .getElementById('app')
      .innerHTML = `<a target="'_blank'" href='${state.map.url}'>goto location</a>`;
  }
});
// unsubscribe();
store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.addHobby('swimming'));
store.dispatch(actions.addHobby('running'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));
store.dispatch(actions.addMovie('madagascar', 'anime'));
store.dispatch(actions.addMovie('inception', 'thriller'));
store.dispatch(actions.removeMovie(1));

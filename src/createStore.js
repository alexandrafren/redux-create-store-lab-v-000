export default function createStore(reducer) {
  let state;

  function dispatch(action = {type: '@@INIT'}){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return { dispatch, getState }
}

function render() {
  const container = document.getElementById('container');
}

let store = createStore(reducer)
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' });
});

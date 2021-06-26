import React from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {decrement, increment} from './actions/index3'

function App() {

  const counter = useSelector(state => state.myCount);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(4))}>+</button>
      <button onClick={()=>dispatch(decrement(4))}>-</button>
      {isLogged ?
        <h3>Valuable Information</h3> :
        " "
      }
    </div>
  );
}

export default App;

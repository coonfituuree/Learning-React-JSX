import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer";

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrementByAmount = () => {
    dispatch({type: 'incrementByAmount', payload: +inputValue})
    setInputValue(0)
  }

  const handleIDecrementByAmount = () => {
    dispatch({type: 'decrementByAmount', payload: +inputValue})
    setInputValue(0)
  }
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleIDecrementByAmount}>Minus</button>
      </div>
    </div>
  );
};

export default CounterReducer;

import { useReducer, useState } from "react";

const initalState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "userinput":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

const UseReducerInput = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() && !isNaN(Number(inputValue))) {
      dispatch({ type: "userinput", payload: Number(inputValue) });
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button style={{ marginRight: "10px" }} onClick={() => dispatch({ type: "increment" })}>+</button>
      <button style={{ marginRight: "10px" }} onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button style={{ marginRight: "10px" }} onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <form style={{ paddingTop: "10px" }} onSubmit={handleSubmit}>
        <input
          style={{ marginRight: "5px" }}
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Enter the Number</button>
      </form>
    </div>
  );
};

export default UseReducerInput;

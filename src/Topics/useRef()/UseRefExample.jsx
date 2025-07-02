import { useRef } from "react";

const UseRefExample = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Gala";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Click</button>
    </div>
  );
};

export default UseRefExample;

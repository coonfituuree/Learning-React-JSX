import { useState, useEffect } from "react";

const ExampleUseEffect = () => {
  const [value, setValue] = useState(0);
  const [smth, setSmth] = useState(0);

    useEffect(() =>{
        if (value > 0) {
            console.log("call useEffect");
            document.title = `Increment ${value}`;
        }
    }, [value])

  return (
    <div>
      <h2>{value}</h2>
      <h2>{smth}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setSmth(smth + 1)}>Increment by Something</button>
    </div>
  );
};

export default ExampleUseEffect;

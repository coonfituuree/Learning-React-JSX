import { useContext } from "react";
import { Data } from "../../App";

const ComponentC = () => {
    const userName = useContext(Data)
  return (
    <h1>My name is: {userName} </h1>
    
  );
};

export default ComponentC;

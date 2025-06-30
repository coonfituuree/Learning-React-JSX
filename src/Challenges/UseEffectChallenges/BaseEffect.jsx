import { useEffect } from "react";

const BaseEffect = () => {
  useEffect(() => {
    console.log("BasicEffect");
  }, []);
 
  return (
    <div>
      <h1>Check consol to see the message</h1>
    </div>
  );
};

export default BaseEffect;

import { createContext } from "react";
import BaseEffect from "./Challenges/UseEffectChallenges/BaseEffect";
import CounterEffect from "./Challenges/UseEffectChallenges/CounterEffect";
import FetchDatatEffect from "./Challenges/UseEffectChallenges/FetchDatatEffect";
import Counter from "./Challenges/UseStateChallenges/Counter";
import Profile from "./Challenges/UseStateChallenges/Profile";
import ShoppingList from "./Challenges/UseStateChallenges/ShoppingList";
import ToDoList from "./Challenges/UseStateChallenges/ToDoList";
import Switcher from "./Topics/AdvanceKeys/Switcher";
import CopyInput from "./Topics/Portal/CopyInput";
import ExampleUseEffect from "./Topics/useEffect()/ExampleUseEffect";
import FetchingData from "./Topics/useEffect()/FetchingData";
import ComponentA from "./Topics/PropDrilling/ComponentA";
import UserProfile from "./Challenges/UseContextChallenges/UserProfile";
import { UserProvider } from "./Challenges/UseContextChallenges/UserContext";
import UpdateUser from "./Challenges/UseContextChallenges/UpdateUser";
import UseReducerInput from "./Topics/useReducer()/UseReducerInput";
import CounterReducer from "./Challenges/UserReducerChallenges/Counter";
import UseRefExample from "./Topics/useRef()/UseRefExample";
import FocusInput from "./Challenges/UseRefChallenges/FocusInput";
import Timer from "./Challenges/UseRefChallenges/Timer";
import UseFetchExample from "./Topics/CustomHooks/UseFetchExample";
import UniqueId from "./Topics/useId/UniqueId";

export const Data = createContext();

const App = () => {
  const name = "Galym";
  return (
    <div>
       {/* <Counter /> */}
       {/* <ToDoList /> */}
       {/* <Profile /> */}
       {/* <ShoppingList /> */}
       {/* <CopyInput /> */}
       {/* <Switcher /> */}
       {/* <ExampleUseEffect /> */}
       {/* <FetchingData /> */}
       {/* <BaseEffect /> */}
       {/* <CounterEffect /> */}
       {/* <FetchDatatEffect /> */}
      {/* /* Prop Dirlling */}
      {/* <Data.Provider value={name}>
         <ComponentA /> 
      </Data.Provider> */}
      {/* <UserProvider>
         <UserProfile /> 
         <UpdateUser /> 
      </UserProvider> */}
      {/* UseReducer */}
      {/* <UseReducerInput />  */}
       {/* <CounterReducer /> */}
      {/* <UseRefExample />  */}
       {/* <FocusInput /> */}
       {/* <Timer /> */}
      {/* Custom Hook */}
      {/* <UseFetchExample />  */}
      {/*  UseID Hook */}
      {/* <UniqueId />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta, deleniti quasi quidem totam quia! Facilis ipsa voluptate, illo nam velit eos, temporibus itaque est id eveniet amet ex ratione.</p>
      <UniqueId /> */}
    </div>
  );
};

export default App;

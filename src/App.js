import logo from "./logo.svg";
import "./App.css";
import UseStateOneFile from "./components/UseStateOne/UseStateOneFile";
import UsereduceOne from "./components/UseReducerOne/UsereduceOne";
import { ObjectUseState } from "./components/ImmutableState/ObjectUseState";
import { ArrayUseState } from "./components/ImmutableState/ArrayUseState";
import Parent from "./components/ParentChild/Parent";
import ParentOne from "./components/Optimization/ParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import ParentTwo from "./components/Optimization/ParentTwo";
import ParentThree from "./components/InCorrectOptimization/ParentThree";

function App() {
  return (
    <div className="App">
      <ParentThree />
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UsereduceOne /> */}
      {/* <UseStateOneFile /> */}
    </div>
  );
}

export default App;

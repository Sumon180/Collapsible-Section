import Collapsible from "./components/Collapsible";

function App() {
  return (
    <>
      <div className="App">
        <Collapsible title="Introduction">
          <li>
            <input type="checkbox" name="" id="" />1
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            12
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            123
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            1234
          </li>
        </Collapsible>
        <hr />
        <Collapsible title="Prerequisite">
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <hr />
        <Collapsible title="Goals ">
          <p>
            This article will teach you more about the useState hook, useRef
            hook, and animation in React; we will make simple React collapsible
            components, useful for all kinds of apps. This collapsible element
            can be shown or hidden by clicking a button.
          </p>
        </Collapsible>
      </div>
    </>
  );
}

export default App;

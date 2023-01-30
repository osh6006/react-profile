import { useState } from "react";
import "./App.css";
import AppMentorsImmer from "./AppMentorsImmer";
import AppMentor from "./components/AppMentor";
import AppMentors from "./components/AppMentors";
import Counter from "./components/Counter";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [xy, setXY] = useState({ x: 0, y: 0 });
  const handleMouseMove = e => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="App" onMouseMove={e => handleMouseMove(e)}>
      {/* <Profile
        name="James Kim"
        jobs="Front End"
        isNew={true}
        src="https://images.unsplash.com/photo-1674833482535-e1fcef823bfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Profile
        name="Julia"
        jobs="Back end"
        src="https://images.unsplash.com/photo-1674833482535-e1fcef823bfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Profile
        name=""
        jobs=""
        src="https://images.unsplash.com/photo-1674833482535-e1fcef823bfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Profile
        name=""
        jobs=""
        src="https://images.unsplash.com/photo-1674833482535-e1fcef823bfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      /> */}

      {/* <div
        style={{
          position: "absolute",
          transform: `translate(${xy.x}px, ${xy.y}px)`,
          zIndex: 0,
        }}
      >
        마우스
      </div>
      <div>{`Total count : ${count1 + count2}`} </div>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} /> */}

      {/* <AppMentor /> */}
      {/* <AppMentors /> */}
      <AppMentorsImmer />
    </div>
  );
}

export default App;

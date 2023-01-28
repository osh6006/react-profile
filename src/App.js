import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile
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
      />
    </div>
  );
}

export default App;

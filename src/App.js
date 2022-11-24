// import logo from "./logo.svg";
import "./App.css";
// import Demo from "components/Demo";
import Todo from "components/DucAnh/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Demo /> */}
        <div className="duc-anh-page">
          <Todo />
        </div>
      </header>
    </div>
  );
}

export default App;

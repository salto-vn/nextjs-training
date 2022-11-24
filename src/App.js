import logo from "./logo.svg";
import "./App.css";
import Demo from "components/Demo";
import Welcome from "components/DucAnh/Welcome";
import Comment from "components/DucAnh/Comments";
import Clock from "components/DucAnh/Clock";
import { useState, useEffect } from "react";

const comment = {
  date: new Date(),
  text: "I like ReactJS",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function App() {
  useEffect(() => {
    document.title = "Edit post";
  }, []);

  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo />

        <div className="duc-anh-page">
          <Welcome name="Sara" />
          <Welcome name="Steven" />
          <Welcome name="Join" />
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
          <Clock date={date} />
          Count: {count}
          <br></br>
          <button onClick={() => setCount(1)}>Reset</button>
          <button onClick={() => setCount((prevCount) => prevCount - 1)}>
            -
          </button>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            +
          </button>
          <h1 id="Number">{count}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;

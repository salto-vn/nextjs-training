import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import TrungComponent from "components/Trung";
import Login from "pages/trung/login/Login";
import UseEffect from "pages/trung/use-effect/UseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Trung">
          <nav>
            <ul>
              <li>Trung Nav</li>
              <li>
                <Link to="/trung/">Home</Link>
              </li>
              <li>
                <Link to="/trung/news">News</Link>
              </li>
              <li>
                <Link to="/trung/use-effect">Use Effect</Link>
              </li>
              <li>
                <Link to="/trung/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/trung/" />
            <Route path="/trung/use-effect" element={<UseEffect />} />
            <Route path="/trung/news" element={<TrungComponent />} />
            <Route path="/trung/login" element={<Login />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Demo from "components/Demo";
import Todo from "components/DucAnh/Todo";
import Home from "./pages/DucAnh/Home";
import News from "./pages/DucAnh/News";
import Contact from "./pages/DucAnh/Contact";
import Heading from "components/DucAnh/Heading";
import Paragraph from "components/DucAnh/Paragraph";
import GlobalStyle from "components/DucAnh/GlobalStyle";
import Button from "components/DucAnh/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Demo /> */}
        <div className="duc-anh-page">
          {/* <Todo /> */}

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <GlobalStyle>
            <Heading />
            <Paragraph />

            <div className="d-flex">
              <div>Item 1</div>
              <div>Item 2</div>
            </div>
          </GlobalStyle>

          <Button />
          <Button primary />
        </div>
      </header>
    </div>
  );
}

export default App;

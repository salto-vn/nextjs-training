import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Create from "components/TrungDay3CRUD/PageOnline/create";
import Update from "components/TrungDay3CRUD/PageOnline/update";
import Read from "components/TrungDay3CRUD/PageOnline/read";
import ReadLocal from "components/TrungDay3CRUD/PageLocal/localread";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <ul>
          <li>
            <Link to="/read-local">Local CRUD</Link>
          </li>
          <li>
            <Link to="/read">Online CRUD</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/read-local" element={<ReadLocal />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

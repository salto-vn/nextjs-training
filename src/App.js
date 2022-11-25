import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Create from "components/TrungDay3CRUD/PageOnline/create";
import Update from "components/TrungDay3CRUD/PageOnline/update";
import Index from "components/TrungDay3CRUD/PageOnline";
import IndexLocal from "components/TrungDay3CRUD/PageLocal/IndexLocal";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <ul>
          <li>
            <Link to="/index-local">Local CRUD</Link>
          </li>
          <li>
            <Link to="/index">Online CRUD</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/index" element={<Index />} />
          <Route path="/index-local" element={<IndexLocal />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

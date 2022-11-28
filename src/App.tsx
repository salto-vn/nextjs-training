import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

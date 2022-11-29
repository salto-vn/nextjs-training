import { Routes, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard/Dashboard";
import Login from "pages/Login/Login";
import Users from "pages/Users/Users";
import { menuPath } from "constants/menu";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path={menuPath.login.path} element={<Login />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

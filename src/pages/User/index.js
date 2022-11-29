import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "./table/DataTable";

function User() {
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    //check token
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if (userToken) {
      const loginTime = userToken.timestamp;
      const token = userToken.user_token;
      const now = new Date().getTime().toString();
      const FIFTY_MINUTE = 15 * 60 * 1000;

      if (now - loginTime > FIFTY_MINUTE) {
        navigate("/login");
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get(`https://api.duypham.vn/api/v1/users`, config)
        .then((response) => {
          setDataTable(response.data.data);
        });

      //Load Data User from list
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <DataTable dataTable={dataTable} />
    </>
  );
}

export default User;

import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const URL = `https://api.duypham.vn/api/v1/login`;

function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    axios
      .post(URL, userLogin)
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          const token = response.data.token;
          var object = { user_token: token, timestamp: new Date().getTime() };
          localStorage.setItem("user-token", JSON.stringify(object));
          navigate("/");
        } else {
          localStorage.clear();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post(URL, userLogin)
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          const token = response.data.token;
          var object = { user_token: token, timestamp: new Date().getTime() };
          localStorage.setItem("user-token", JSON.stringify(object));
          navigate("/");
        } else {
          localStorage.clear();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <form className={cx("form-login")} onSubmit={onFormSubmit}>
          <ul className={cx("login-list")}>
            <li className={cx("login-item")}>
              <h1 className={cx("login-title")}>Login</h1>
            </li>
            <li className={cx("login-item")}>
              <label className={cx("item-label")} htmlFor="uname">
                <b>Email</b>
              </label>
              <input
                value={userLogin.email}
                onChange={(e) => {
                  setUserLogin({ ...userLogin, email: e.target.value });
                }}
                className={cx("item-input")}
                type="text"
                placeholder="Enter Email"
                name="uname"
                required
              />
            </li>

            <li className={cx("login-item")}>
              <label className={cx("item-label")} htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                value={userLogin.password}
                onChange={(e) => {
                  setUserLogin({ ...userLogin, password: e.target.value });
                }}
                className={cx("item-input")}
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </li>
            <li className={cx("login-item")}>
              <button
                type="submit"
                className={cx("btn-login")}
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Login;

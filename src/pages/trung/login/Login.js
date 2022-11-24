import { useRef, useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const nameRef = useRef();

  function handleSubmit() {
    setName("");
    setPassword("");
    nameRef.current.focus();
    setUser(() => {
      return {
        name: name,
        password: password,
      };
    });
  }

  return (
    <div className="trung-login">
      <h1>Login page</h1>
      <div>
        <label>Name:</label>
        <input
          ref={nameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Input name"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Input password"
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
      {user && (
        <>
          <h1>Login with user</h1>
          <h2>{user.name}</h2>
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Update() {
  const navigate = useNavigate();
  const [objEmployee, setObjEmployee] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
    id: null,
  });

  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    setObjEmployee(employee);
  }, []);

  const updateAPIData = () => {
    axios
      .put(
        `https://637ee225cfdbfd9a63b9007d.mockapi.io/api/employee/employee/${objEmployee.id}`,
        objEmployee
      )
      .then(() => navigate("/index"));
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            value={objEmployee.firstName}
            placeholder="First Name"
            onChange={(e) =>
              setObjEmployee({
                ...objEmployee,
                firstName: e.target.value,
              })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            value={objEmployee.lastName}
            placeholder="Last Name"
            onChange={(e) =>
              setObjEmployee({
                ...objEmployee,
                lastName: e.target.value,
              })
            }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={objEmployee.checkbox}
            onChange={() =>
              setObjEmployee({
                ...objEmployee,
                checkbox: !objEmployee.checkbox,
              })
            }
          />
        </Form.Field>
        <Button onClick={() => navigate("/index")} type="button">
          Back
        </Button>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}

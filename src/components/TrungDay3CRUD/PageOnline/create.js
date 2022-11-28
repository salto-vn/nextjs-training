import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [objEmployee, setObjEmployee] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
  });

  const postData = () => {
    axios
      .post(
        `https://637ee225cfdbfd9a63b9007d.mockapi.io/api/employee/employee`,
        objEmployee
      )
      .then(() => navigate("/index"));
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          onChange={(e) =>
            setObjEmployee({
              ...objEmployee,
              firstName: e.target.value,
            })
          }
          placeholder="First Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          onChange={(e) =>
            setObjEmployee({
              ...objEmployee,
              lastName: e.target.value,
            })
          }
          placeholder="Last Name"
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
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
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;

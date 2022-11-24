import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios
      .post(
        `https://637ee225cfdbfd9a63b9007d.mockapi.io/api/employee/employee`,
        {
          firstName,
          lastName,
          checkbox,
        }
      )
      .then(() => navigate("/read"));
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={() => navigate("/read")} type="button">
        Back
      </Button>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;

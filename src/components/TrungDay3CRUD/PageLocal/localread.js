import { useState } from "react";
import { Table, Button, Checkbox, Form } from "semantic-ui-react";

const data = [
  {
    firstName: "Trung",
    lastName: "Chi Nguyen",
    checkbox: true,
    id: 1,
  },
  {
    firstName: "Toan",
    lastName: "Nguyen",
    checkbox: true,
    id: 2,
  },
  {
    firstName: "React",
    lastName: "Crud",
    checkbox: true,
    id: 3,
  },
  {
    firstName: "Nhan",
    lastName: "Nguyen",
    checkbox: true,
    id: 4,
  },
  {
    firstName: "Gandaf",
    lastName: "iajsdf",
    checkbox: true,
    id: 5,
  },
];

export default function ReadLocal() {
  const [localData, setLocalData] = useState(data);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState();

  const setData = (data) => {
    setId(data.id);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setCheckbox(data.checkbox);
  };

  const onDelete = (id) => {
    setLocalData(() => {
      return localData.filter((item) => item.id !== id);
    });
    clearInputForm();
  };

  const handleSubmit = () => {
    let newId = Date.now();
    if (id) {
      newId = id;
      setLocalData((prev) => {
        return prev.map((item) =>
          item.id === id
            ? {
                firstName: firstName,
                lastName: lastName,
                checkbox: checkbox,
                id: newId,
              }
            : item
        );
      });
    } else {
      setLocalData([
        ...localData,
        {
          firstName: firstName,
          lastName: lastName,
          checkbox: checkbox,
          id: newId,
        },
      ]);
    }
    clearInputForm();
  };

  const clearInputForm = () => {
    setId("");
    setFirstName("");
    setLastName("");
    setCheckbox(false);
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={checkbox}
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {localData.map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

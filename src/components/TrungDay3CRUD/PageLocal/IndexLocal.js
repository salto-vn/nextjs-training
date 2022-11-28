import { useState } from "react";
import { Table, Button, Checkbox, Form } from "semantic-ui-react";

const data = [
  {
    firstName: "Trung",
    lastName: "Chi Nguyen",
    checkbox: false,
    id: 1,
  },
  {
    firstName: "Toan",
    lastName: "Nguyen",
    checkbox: false,
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
    lastName: "Kenedy",
    checkbox: true,
    id: 5,
  },
];

export default function IndexLocal() {
  const [localData, setLocalData] = useState(data);
  const [objEmployee, setObjEmployee] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
  });

  const setData = (data) => {
    setObjEmployee(data);
  };

  const onDelete = (id) => {
    setLocalData(() => {
      return localData.filter((item) => item.id !== id);
    });
    clearInputForm();
  };

  const handleCreateOrUpdate = () => {
    let newId = Date.now();
    if (objEmployee.id) {
      newId = objEmployee.id;
      setLocalData((prev) => {
        return prev.map((item) =>
          item.id === objEmployee.id ? objEmployee : item
        );
      });
    } else {
      setLocalData(() => [...localData, { ...objEmployee, id: newId }]);
    }
    clearInputForm();
  };

  const clearInputForm = () => {
    setObjEmployee({
      firstName: "",
      lastName: "",
      checkbox: false,
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            value={objEmployee.firstName}
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
            value={objEmployee.lastName}
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
            checked={objEmployee.checkbox}
            label="I agree to the Terms and Conditions"
            onChange={(e) =>
              setObjEmployee({
                ...objEmployee,
                checkbox: !objEmployee.checkbox,
              })
            }
          />
        </Form.Field>
        <Button onClick={handleCreateOrUpdate} type="button">
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

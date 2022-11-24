import { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("CheckboxValue", checkbox);
  };

  useEffect(() => {
    axios
      .get(`https://637ee225cfdbfd9a63b9007d.mockapi.io/api/employee/employee`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(
        `https://637ee225cfdbfd9a63b9007d.mockapi.io/api/employee/employee/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://637ee225cfdbfd9a63b9007d.mockapi.io/api/employee/employee`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div>
      <Link to="/create">Create Employee</Link>
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
          {APIData.map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
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

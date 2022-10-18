import { Table } from "react-bootstrap";
const UserTable = ({ users }) => {
  console.log(users);
  return users.length == 0 ? (
    <div>Loading</div>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>County</th>
          <th>State</th>
          <th>County Population</th>
          <th>Covid 19 Community Level</th>
        </tr>
      </thead>
      <tbody>
        {users.map((ele) => {
          return (
            <tr key={ele.county}>
              <td>{ele.county}</td>
              <td>{ele.state}</td>
              <td>{ele.county_population}</td>
              <td>{ele.covid_19_community_level}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default UserTable;

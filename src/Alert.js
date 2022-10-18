import { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import UserTable from "./UserSearch";

export function Alert() {
  const [users, setUsers] = useState([]);
  const [userTableData, changeTableData] = useState([]);
  const [search, changeValue] = useState("");
  const fetchUsers = async () => {
    const users = await fetch("https://data.cdc.gov/resource/3nnm-4jni.json");
    const userList = await users.json();
    setUsers(userList);
    changeTableData(userList);
  };
  useEffect(() => {
    changeTableData(
      users.filter((ele) => {
        const str = search.toUpperCase();
        return (
          ele.county.toUpperCase().includes(str) ||
          ele.state.toUpperCase().includes(str) ||
          ele.covid_19_community_level.toUpperCase().includes(str)
        );
      })
    );
  }, [search, users]);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <div>
        <label>Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            changeValue(e.target.value);
          }}
        />
      </div>
      <br />
      <UserTable users={userTableData} />
    </div>
  );
}

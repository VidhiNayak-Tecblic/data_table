import React, { useEffect, useState } from "react";
import "./Stu_Table.css";
import { Button, Form, Table } from "react-bootstrap";
import Data from "./Data";

function Stu_Table() {
  //string typed state fot storing serachbar data
  //matche search bar data and table data

  const [SearchedData, setSearcheddata] = useState("");
  const [TableData, setTableData] = useState(Data);

  //By default data oreder is Ascending
  //const [sortingData, setSortingdata] = useState("ASC");

  /* The code you provided appears to be a function component called "Sorting" that 
 takes an "id" parameter. It seems to be implementing a simple sorting functionality 
 where if "sortingData" state is "ASC", it sorts the "TableData" state in ascending order based on 
 the "id" property and updates the state accordingly. If "sortingData" is "DSC", 
 it sorts the "TableData" state in descending order based on the "id" property 
 and updates the state accordingly.*/
  /*LOGIC:--- FOR ASC order==> a's id is > b's i so a's id goes at first index otherwise stay at -1st index 
  FOR DSC order==> a's id is < b's i so a's id goes at last index otherwise stay at 1st index */
  const SortingAsc = () => {
    const sorted = [...TableData].sort((a, b) => (a.id > b.id ? 1 : -1));

    setTableData(sorted);
    // setSortingdata("DSC");
  };
  const SortingDsc = () => {
    const sorted = [...TableData].sort((a, b) => (a.id < b.id ? 1 : -1));

    setTableData(sorted);
    // setSortingdata("ASC");
  };
  return (
    <div className="container maindiv">
      <input
        placeholder="Search"
        id="Search"
        // set typed value in searchbar in state onchange the input
        onChange={(e) =>
          setSearcheddata(
            e.target.value.toLowerCase(),
            console.log("SearchedData", SearchedData)
          )
        }
      />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <div>
              <th>
                id
                <button type="button" onClick={() => SortingAsc()}>
                  +
                </button>
                <button type="button" onClick={() => SortingDsc()}>
                  -
                </button>
              </th>
            </div>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>

        {/*
      *****************************************************************
      FOR SEARCHING FUNCTIONALITY IN DATA TABLE
      *****************************************************************
      1)All data in that perticular name data will transform into lowercase 
      2)and filter method check the data with searchbar data  by using includes method
      3)matched data will be shown in table row
      4)if there is no search then only map method will work and all the data will shown in table */}
        {TableData?.filter(
          (data) =>
            data.stu_name.toLowerCase().includes(SearchedData) ||
            data.stu_hobby.toLowerCase().includes(SearchedData)
        ).map((Studatas) => (
          <tbody key={Studatas.stu_id}>
            <tr>
              <td>{Studatas.stu_id}</td>
              <td>{Studatas.stu_name}</td>
              <td>{Studatas.stu_hobby}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
export default Stu_Table;

import React,{useState,useEffect} from 'react';
import { Table } from 'antd';
import axios from "axios";
import "antd/dist/antd.css";
import "./style.css";
const UsersList = () => {

    const [data, setData] = useState([]);

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        width: 150,
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        width: 150,
        key: "email",
      },
      {
        title: "Date",
        dataIndex: "date",
        width: 150,
        key: "date",
      },
    ];

    useEffect(() => {
    axios
      .get("/api/users/")
      .then(async function (response) {
        console.log(response.data);
        await setData(response.data);
      });
  });

    return (
      <div>
        <Table columns={columns} dataSource={data} size="middle" rowKey  style={{color:"black"}} />
      </div>
    );
}
 
export default UsersList;
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import myData from "./Data/Data.json";
import { Table, Button, Row, Col } from "antd";
import style from "./TableArea.module.css";
import SingleProvider from '../SingleProviderDetails/SingleProvider.js';
import profileImage from '../SingleProviderDetails/Images/profile_img.png';
import { StarFilled, EyeOutlined, EditOutlined, DeleteFilled } from "@ant-design/icons";

const TableData = () => {
  const [tableData, setTableData] = React.useState([]);
  function getTableData() {
    setTableData(myData.data);
  }
  useEffect(() => {
    getTableData();
  }, []);

  const columns = [
    {
      title: "PROVIDER NAME ",
      dataIndex: "providerName",
      render(text, record) {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };

        return (
          <>
            <Row align="middle" gutter={24}>
              <Col xxl={8} lg={8} md={8} sm={16}>
                <img
                  src={profileImage
                  }
                  height={50}
                  style={{ borderRadius: "9px", maxWidth: "70px" }}
                />
              </Col>
              <Col xxl={16} lg={16} md={16} sm={24}>
                <div style={styles}>{record.providerName ? record.providerName : "-"}
                </div>
              </Col>
            </Row>
          </>

        )
      },
    },

    {
      title: "EMAIL ADDRESS",
      dataIndex: "emailaddress",

      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return <div style={styles}>{record.emailAddress ? record.emailAddress : "-"}</div>;

      },
    },
    {
      title: "PHONE",
      dataIndex: "phoneNumber",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return <div style={styles}>{record.phoneNumber ? record.phoneNumber : ""}</div>;

      },
    },
    {
      title: "ADDRESS",
      dataIndex: "city",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };

        return <div style={styles}>{record ? record.city : ""} , {record ? record.country : ""} </div>;

      },
    },
    {
      title: "STAFF",
      dataIndex: "staff",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "center"
        };

        return <div style={styles}>{record?.staff.length ? record?.staff.length : "-"}</div>;

      },
    },
    {
      title: "RATING",
      dataIndex: "rating",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return record.reviews.map((data, i) => {
          return <div style={styles}> <StarFilled /> &nbsp; {data.rating ? data.rating : "-"}</div>;
        });


      },
    },
    {
      title: "ACTION",
      dataIndex: "price",
      render: (text, record) => {
        console.log("data", record._id);
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        };
        return (
          <div style={styles}>

            <Link to="/SingleProviderDetails" state={{ _id: record._id }}>
              <li><EyeOutlined /></li>
            </Link>
            <EditOutlined />
            <DeleteFilled />

          </div >
        );
      },
    },
  ];

  return (
    <div className={style.paddingleft20px}>

      <Table
        style={{ width: "100%" }}
        scroll={{ x: true }}
        columns={columns}
        dataSource={tableData}
      />

    </div>
  );
};

export default TableData;

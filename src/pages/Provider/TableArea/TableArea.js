import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import myData from "./Data/Data.json";
import { Table, Button,Row,Col } from "antd";
import style from "./TableArea.module.css";
import SingleProvider from '../SingleProviderDetails/SingleProvider.js';
import profileImage from '../SingleProviderDetails/Images/profile_img.png';
import { StarFilled } from "@ant-design/icons";

const TableData = () => {
  const [tableData, setTableData] = React.useState([]);
  const [flightData, setFlightData] = React.useState("");
  const [aircraftData, setAircraftData] = React.useState("");
  const [departureData, setDepartureData] = React.useState("");
  const [arrivalDataCol, setArrivalDataCol] = React.useState("");
  const [durationData, setDurationData] = React.useState("");
  function getTableData() {
    setTableData(myData.data);
  }
  console.log("data", myData.data.providerName);
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
        
          return(
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
                <div style={styles}>{record.providerName}
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
            return <div style={styles}>{record.emailAddress}</div>;

      },
    },
    {
      title: "PHONE",
      dataIndex: "phoneNumber",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };       
          return <div style={styles}>{record ? record.phoneNumber : ""}</div>;

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
        return record?.data?.map((data, i) => {
          return <div style={styles}>{data.staff.length}</div>;
          // return data.staff.map((segment, i) => {
          //   return <div style={styles}>{segment.length}</div>;
          // });
        });
      },
    },
    {
      title: "RATING",
      dataIndex: "rating",
      render: (text, record) => {
        console.log("sjdbfsjd",record)
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
          return record.reviews.map((data, i) => {
            return <div style={styles}> <StarFilled /> &nbsp; {data ? data.rating : "-"}</div>;
          });
        

      },
    },
    {
      title: "ACTION",
      dataIndex: "price",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "center"
        };
        return (
          <div style={styles}>
            

            <Link to="/SingleProviderDetails">
              <Button type="primary" size="large">
              <li>View</li>

            </Button>
          </Link>
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

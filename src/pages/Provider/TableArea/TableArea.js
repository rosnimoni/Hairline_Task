import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import myData from "./Data/Data.json";
import { Table, Button } from "antd";
import style from "./TableArea.module.css";
import SingleProvider from '../SingleProviderDetails/SingleProvider.js';

const TableData = () => {
  const [tableData, setTableData] = React.useState([]);
  const [flightData, setFlightData] = React.useState("");
  const [aircraftData, setAircraftData] = React.useState("");
  const [departureData, setDepartureData] = React.useState("");
  const [arrivalDataCol, setArrivalDataCol] = React.useState("");
  const [durationData, setDurationData] = React.useState("");
  function getTableData() {
    setTableData(myData.flightOffer);
  }

  useEffect(() => {
    getTableData();
  }, []);

  const columns = [
    {
      title: "FLIGHT",
      dataIndex: "flight",
      render(text, record) {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return record?.itineraries?.map((data, i) => {
          return data.segments.map((segment, i) => {

            setFlightData(segment.flightNumber);
            return <div style={styles}>{flightData}</div>;
          });
        });

      },
    },

    {
      title: "AIRCRAFT",
      dataIndex: "aircraft",

      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return record?.itineraries?.map((data, i) => {
          return data.segments.map((segment, i) => {

            setAircraftData(segment.aircraft);
            return <div style={styles}>{aircraftData}</div>;
          });
        });

      },
    },
    {
      title: "CLASS",
      dataIndex: "class1",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };

        return record?.class.map((data, i) => {
          return <div style={styles}>{data ? data.join() : "-"}</div>;


        })
      },
    },
    {
      title: "FARE",
      dataIndex: "fareBasis",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return (
          <div style={styles}>
            {record.fareBasis ? record.fareBasis.join() : "-"}
          </div>
        );
      },
    },
    {
      title: "ROUTE",
      dataIndex: "route",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "center"
        };
        return record?.itineraries?.map((data, i) => {

          return data.segments.map((segment, i) => {
            return <div style={styles}>{segment?.departure?.iataCode} - {segment?.arrival?.iataCode}</div>;
          });
        });
      },
    },
    {
      title: "DEPARTURE",
      dataIndex: "departure",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return record?.itineraries?.map((data, i) => {
          return data.segments.map((segment, i) => {

            setDepartureData(segment.departure.at);
            return <div style={styles}>{departureData ? departureData : "-"}</div>;
          });
        });

      },
    },
    {
      title: "ARRIVAL",
      dataIndex: "arrival",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          display: "flex",
          justifyContent: " space-between",
        };
        return record?.itineraries?.map((data, i) => {

          return data.segments.map((segment, i) => {
            setArrivalDataCol(segment.arrival.at);
            return (
              <div style={styles}>
                {arrivalDataCol ? arrivalDataCol : "-"}
              </div>
            );
          });
        });

      },
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          fontSize: 18
        };
        return (
          <div style={styles}>
            -
          </div>
        );
      },
    },
    {
      title: "DURATION",
      dataIndex: "duration",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
        };
        return record?.itineraries?.map((data, i) => {
          setDurationData(data?.duration);
          return <div style={styles}>{durationData ? durationData : "-"}</div>;
        });

      },
    },

    {
      title: "PRICE",
      dataIndex: "price",
      render: (text, record) => {
        const styles = {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "center"
        };
        return (
          <div style={styles}>
            <div>{record.price}</div>

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

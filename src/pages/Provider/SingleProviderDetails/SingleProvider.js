import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import style from "./SingleProvider.module.css";
import UserInfo from "./UserInfo.js";
import Documents from "./Documents.js";
import Language from './Language.js';
import Staff from './Staff.js';
import AwardAndRecog from './AwardAndRecog.js';
import Review from './Review.js';
import { Col, Row } from 'antd';

const SingleProvider = () => {
    const location = useLocation()
    const [LocationId, setLocationId] = useState(location.state._id);
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoading === true) {
            fetch(`https://pc-builder-lab-server.onrender.com/providers/${LocationId}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    console.log("Loaded location", data);

                });
        } else {
            setLoading(false);
        }
        setLocationId(location.state._id);

    }, [isLoading]);

    return (

        <div className='main_content'>
            {data._id ?
                <div>
                    <div className='display_flex'>
                        <Row>
                            <Col md={12} sm={12}>
                                <UserInfo data={data} />
                            </Col>
                            <Col md={1} sm={1}>

                            </Col>

                            <Col md={11} sm={11}>
                                <Documents />
                            </Col>
                        </Row>
                    </div>
                    <Language data={data} />
                    <Staff data={data} />
                    <AwardAndRecog data={data} />
                    <Review data={data} />
                </div>
                : "Loading.."}
        </div>

    );
};

export default SingleProvider;
import React from 'react';
import style from "./SingleProvider.module.css";
import UserInfo from "./UserInfo.js";
import Documents from "./Documents.js";
import Language from './Language.js';
import Staff from './Staff.js';
import AwardAndRecog from './AwardAndRecog.js';
import Review from './Review.js';
import { Col, Row } from 'antd';

const SingleProvider = () => {
    return (

        <div className='main_content'>
            <div className='display_flex'>
                <Row>
                    <Col md={12} sm={12}>
                        <UserInfo />
                    </Col>
                    <Col md={1} sm={1}>
                        
                    </Col>

                    <Col md={11} sm={11}>
                        <Documents />
                    </Col>
                </Row>



            </div>
            <Language />
            <Staff />
            <AwardAndRecog />
            <Review />

        </div>

    );
};

export default SingleProvider;
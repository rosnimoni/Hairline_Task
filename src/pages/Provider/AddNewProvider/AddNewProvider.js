import React, { useState } from "react";
import { Col, Row, Steps, Typography } from "antd";
import style from "./AddNewProbider.module.css";
import Documents from "../../../components/MultiStep/Documents.js";
import Profile from "../../../components/MultiStep/Profile.js";
import Reviews from "../../../components/MultiStep/Reviews.js";


function AddNewProvider() {
    const [current, setCurrent] = useState(0);

    const handleReviewForm = (values) => {
        setCurrent(1);
        console.log(values, current);
    }

    const handleDocumentForm = (values) => {
        setCurrent(2);
        console.log(values, current);
    }

    return (
        <div className="main_content">
            <div className={style.layout}>
          <Row>
            <Col md={7} sm={24} className={style.border_right}>
            <div className="headline_h5">Add New Providers</div>
            <div className="paragraph_p6_Font14">Increase team capacity by seamlessly adding new service providers</div>

            <Steps current={current} direction="vertical" size="small">
                <Steps.Step title="Profile" key={0} />
                <Steps.Step title="review" key={1} />
                <Steps.Step title="Documents" key={2} />
            </Steps>
           
            </Col>
            <Col md={1} sm={1}></Col>

            <Col md={16} sm={24}>
            {current === 0 ? (
                <Profile handleReviewForm={handleReviewForm} />
            ) : current === 1 ? (
                <Reviews handleDocumentForm={handleDocumentForm} />
            ) : current === 2 ? (
                <Documents />
            ) : (
                <div>
                    <h1>Error</h1>
                </div>
            )}
            </Col>
          </Row>
            </div>
        </div>
    );
}

export default AddNewProvider;

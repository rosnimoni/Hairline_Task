import React from 'react';
import style from "./SingleProvider.module.css";
import { Col, Divider, Row } from 'antd';
import Profile_img from './Images/profile_img.png';

const Award = [
    {
        id: 1,
        title: "Hairsite Golden Achievement Award",
        text: "Description dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        date: "Year - 2012"

    },
    {
        id: 2,
        title: "Hairsite Golden Achievement Award",
        text: "Description dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        date: "Year - 2012"

    },
    {
        id: 3,
        title: "Hairsite Golden Achievement Award",
        text: "Description dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        date: "Year - 2012"

    },
    {
        id: 4,
        title: "Hairsite Golden Achievement Award",
        text: "Description dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        date: "Year - 2012"

    }
]

const AwardAndRecog = () => {
    return (
        <div className={style.container_blocks}>
            <div className={style.layout_padd}>
                <div className='headlineH4'>
                    Awards and recognition
                </div>
                <Divider />
                {Award.map((data, i) => {
                    return (
                        <Row>
                            <Col md={4}>
                                <img src={Profile_img} alt="Logo" height={82} width={82} />
                            </Col>
                            <Col md={20} style={{ paddingLeft: "10px" }}>
                                <div className='paragraph_h6_font16'>
                                    {data.title}
                                </div>
                                <div className='paragraph_h6_font12'>
                                    {data.text}
                                </div>
                                <div className='typography14px'>
                                    {data.date}
                                </div>
                            </Col>
                            <Divider />
                        </Row>
                    )
                })}

            </div>
        </div>
    );
};

export default AwardAndRecog;
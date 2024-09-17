import React from 'react';
import style from "./SingleProvider.module.css";
import { Link } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
import icon from './Images/icon.png';
import { StarFilled, StarOutlined } from '@ant-design/icons';



const person = [
    {
        id: 1,
        name: "— Elif Öztürk",
        text: "Choosing X Hair Transplant was a life-changing decision. The staff's expertise and care made the process seamless. I am thrilled with the natural results. Highly recommended!",
        country: "India",
        date: "Jun 8, 2023"
    },
    {
        id: 2,
        name: "— Elif Öztürk",
        text: "Choosing X Hair Transplant was a life-changing decision. The staff's expertise and care made the process seamless. I am thrilled with the natural results. Highly recommended!",
        country: "India",
        date: "Jun 8, 2023"
    },
    {
        id: 3,
        name: "— Elif Öztürk",
        text: "Choosing X Hair Transplant was a life-changing decision. The staff's expertise and care made the process seamless. I am thrilled with the natural results. Highly recommended!",
        country: "India",
        date: "Jun 8, 2023"
    },
    {
        id: 4,
        name: "— Elif Öztürk",
        text: "Choosing X Hair Transplant was a life-changing decision. The staff's expertise and care made the process seamless. I am thrilled with the natural results. Highly recommended!",
        country: "India",
        date: "Jun 8, 2023",

    }
]

const Review = () => {


    return (
        <div className={style.container_blocks}>
            <div className={style.layout_padd}>
                <div className='display_flex'>
                    <div className='headlineH4'>
                        Reviews
                    </div>
                    <div className='paragraph_p6_Font14'>
                        <Link> View All</Link>
                    </div>
                </div>
                {person.map((data, i) => {
                    return (

                        <Row key={i}>
                            <Col md={4}>
                                <img src={icon} alt="Logo" height={82} width={82} />
                            </Col>
                            <Col md={20} style={{ paddingLeft: "10px" }}>
                                <div className='display_flex'>
                                    <div className='headlineH4'>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarOutlined />
                                    </div>
                                    <div className='paragraph_p6_Font12'>
                                        {data.date}
                                    </div>
                                </div>
                                <div className='paragraph_h6_font12' style={{ padding: "10px 0px 10px 0px" }}>
                                    {data.text}
                                </div>
                                <div className='typography14px'>
                                    {data.name}
                                </div>
                                <div className='paragraph_h6_font12'>
                                    {data.country}
                                </div>
                            </Col>
                            <Divider />
                        </Row>



                    );
                })}

            </div>
        </div>
    );
};

export default Review;
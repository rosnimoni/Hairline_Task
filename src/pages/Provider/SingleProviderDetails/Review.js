import React from 'react';
import style from "./SingleProvider.module.css";
import { Link } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const Review = ({ data }) => {
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
                {data.reviews.map((data, i) => {
                    return (

                        <Row key={i}>
                            <Col md={4}>
                                <img src={data.reviewerImgUrl} alt="Logo" height={82} width={82} />
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
                                        Jun 8 2023
                                    </div>
                                </div>
                                <div className='paragraph_h6_font12'>
                                    {data.reviewDetails}
                                </div>
                                <div className='typography14px'>
                                    {data.reviewerName}
                                </div>
                                <div className='paragraph_h6_font12'>
                                    {data.reviewerCountry}
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
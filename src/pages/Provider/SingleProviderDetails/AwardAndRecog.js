import React from 'react';
import style from "./SingleProvider.module.css";
import { Col, Divider, Row } from 'antd';

const AwardAndRecog = ({ data }) => {
    return (
        <div className={style.container_blocks}>
            <div className={style.layout_padd}>
                <div className='headlineH4'>
                    Awards and recognition
                </div>
                <Divider />
                {data.awards.map((data, i) => {
                    return (
                        <Row key={i}>
                            <Col md={4}>
                                <img src={data.awardImg} alt="Logo" height={82} width={82} />
                            </Col>
                            <Col md={20} style={{ paddingLeft: "10px" }}>
                                <div className='paragraph_h6_font16'>
                                    {data.awardName}
                                </div>
                                <div className='paragraph_h6_font12'>
                                    {data.awardDetails}
                                </div>
                                <div className='typography14px'>
                                    year {data.year}
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
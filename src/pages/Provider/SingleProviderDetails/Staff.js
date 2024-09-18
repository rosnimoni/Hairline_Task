import { useState } from 'react';
import style from "./SingleProvider.module.css";
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

const Staff = ({ data }) => {
    return (
        <div className={style.container_blocks}>
            <div className={style.layout_padd}>
                <div className='display_flex'>
                    <div className='headlineH4'>
                        Staff
                    </div>
                    <div className='paragraph_p6_Font14'>
                        <Link> View All</Link>
                    </div>
                </div>
                <Row>
                    {data?.staff.map((data, i) => {
                        return (
                            <Col md={8} sm={12} className={style.Staff_layout}>
                                <img src={data.imgUrl} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                                <div style={{ textAlign: "center", marginBottom: "5px" }}>
                                    <span className='typography14px'>{data.name}</span><br />
                                    <span className='paragraph_p6_Font14'>{data.degination}</span>
                                </div>
                            </Col>

                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Staff;
import React from 'react';
import style from "./SingleProvider.module.css";
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import icon from './Images/icon.png';

const Staff = () => {
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
                    <Col md={8} sm={12}  className={style.Staff_layout}>
                        <img src={icon} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                        <div style={{ textAlign: "center",marginBottom:"5px" }}>
                            <span className='typography14px'>City</span><br />
                            <span className='paragraph_p6_Font14'>Istanbul</span>
                        </div>
                    </Col>
                    <Col md={8} sm={12}  className={style.Staff_layout}>
                        <img src={icon} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                        <div style={{ textAlign: "center",marginBottom:"5px" }}>
                            <span className='typography14px'>City</span><br />
                            <span className='paragraph_p6_Font14'>Istanbul</span>
                        </div>
                    </Col>
                    <Col md={8} sm={12}  className={style.Staff_layout}>
                        <img src={icon} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                        <div style={{ textAlign: "center",marginBottom:"5px" }}>
                            <span className='typography14px'>City</span><br />
                            <span className='paragraph_p6_Font14'>Istanbul</span>
                        </div>
                    </Col>
                    <Col md={8} sm={12}  className={style.Staff_layout}>
                        <img src={icon} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                        <div style={{ textAlign: "center",marginBottom:"5px" }}>
                            <span className='typography14px'>City</span><br />
                            <span className='paragraph_p6_Font14'>Istanbul</span>
                        </div>
                    </Col>
                    <Col md={8} sm={12}  className={style.Staff_layout}>
                        <img src={icon} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                        <div style={{ textAlign: "center",marginBottom:"5px" }}>
                            <span className='typography14px'>City</span><br />
                            <span className='paragraph_p6_Font14'>Istanbul</span>
                        </div>
                    </Col>
                    <Col md={8} sm={12}  className={style.Staff_layout}>
                        <img src={icon} alt="Logo" height={82} width={82} className={style.image_center_Staff} />
                        <div style={{ textAlign: "center",marginBottom:"5px" }}>
                            <span className='typography14px'>City</span><br />
                            <span className='paragraph_p6_Font14'>Istanbul</span>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Staff;
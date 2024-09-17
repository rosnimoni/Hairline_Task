import React from 'react';
import style from "./SingleProvider.module.css";
import Profile_img from './Images/profile_img.png';
import icon from './Images/icon.png';
import { EditOutlined, DeleteOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row,Col } from 'antd';


const UserInfo = () => {
    return (
        <div className={style.container_blocks}>
            <div className={style.container_padd}>
                <img src={Profile_img} alt="Logo" height={100} width={100} />
                <div className='display_flex'>
                    <EditOutlined className={style.icon_color} />
                    <DeleteOutlined className={style.icon_color} />
                </div>

            </div>

            <div className={`${style.headline} ${style.headline_padd}`}>
                X Hair Transplant
            </div>
            <div className={style.review}>
                <span> 4.8 &nbsp; &nbsp;</span>
                <StarFilled style={{ color: "#000!important" }} />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
                <span>&nbsp;  (20 Total)</span>
                <Link>&nbsp;  View All</Link>
            </div>
            <p className={style.paragraph}>
                Welcome to X Hair Transplant, where we believe that everyone deserves to feel confident and comfortable in their own skin. As a premier destination for hair transplant solutions, we are committed to helping individuals
                reclaim their natural beauty and self-assurance
            </p>

            <Row>
               <Col md={12} className={style.bottomArea}>
               <img src={icon} alt="Logo" height={24} width={24} className={style.image_center} />
                <div className={style.flex_derection}> 
                    <span className='typography14px'>Email address</span>
                    <span className='paragraph_p6_Font14'>xhairtransplant@gmail.com</span>
                </div>
               </Col>
               <Col md={12} className={style.bottomArea}>
               <img src={icon} alt="Logo" height={24} width={24} className={style.image_center} />
                <div className={style.flex_derection}> 
                    <span className='typography14px'>Phone number</span>
                    <span className='paragraph_p6_Font14'>+ 90 XXX XXX XXXX</span>
                </div>
               </Col>
               <Col md={12} className={style.bottomArea}>
               <img src={icon} alt="Logo" height={24} width={24} className={style.image_center} />
                <div className={style.flex_derection}> 
                    <span className='typography14px'>City</span>
                    <span className='paragraph_p6_Font14'>Istanbul</span>
                </div>
               </Col>
               <Col md={12} className={style.bottomArea}>
               <img src={icon} alt="Logo" height={24} width={24} className={style.image_center} />
                <div className={style.flex_derection}> 
                    <span className='typography14px'>Country</span>
                    <span className='paragraph_p6_Font14'>Turkey</span>
                </div>
               </Col>
            </Row>


        </div>
    );
};

export default UserInfo;
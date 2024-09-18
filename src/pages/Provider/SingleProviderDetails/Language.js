import { useState } from 'react';
import style from "./SingleProvider.module.css";
import { Col, Row } from 'antd';

const Language = ({ data }) => {
    return (
        <div className={style.container_blocks}>
            <div className={style.layout_padd}>
                <div className='headlineH4'>
                    Language
                </div>
                <div className='paragraph_p6_Font14'>
                    We are expert in
                </div>

                <Row>
                    {data?.languages.map((data, i) => {
                        return (
                            <Col md={6} sm={3} key={i}>
                                <div className={`${style.language_layout} ${style.tag_lg_lan}`}>
                                    {data}
                                </div>
                            </Col>
                        );
                    })}
                </Row>


            </div>
        </div>
    );
};

export default Language;
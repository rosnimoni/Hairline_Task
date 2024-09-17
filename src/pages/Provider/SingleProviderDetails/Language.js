import React from 'react';
import style from "./SingleProvider.module.css";
import { Col, Row } from 'antd';


const Languages = [
    {
        id: 1,
        name: "English",

    },
    {
        id: 2,
        name: "Turkish",

    },
    {
        id: 3,
        name: "Chinese",

    },
    {
        id: 4,
        name: "Spanish",

    },
    {
        id: 5,
        name: "Hindi",

    },
    {
        id: 6,
        name: "Arabic",

    },
    {
        id: 7,
        name: "Bengali",

    },
    {
        id: 8,
        name: "Portuguese",

    },

    {
        id: 9,
        name: "Russian",

    }]

const Language = () => {
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
                    {Languages.map((data, i) => {
                        return (
                            <Col md={6} sm={3}>
                                <div className={`${style.language_layout} ${style.tag_lg_lan}`}>
                                    {data.name}
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
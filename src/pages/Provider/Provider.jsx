import React from 'react';
import FilterArea from './FilterArea/FilterArea';
import TableArea from './TableArea/TableArea';
import style from './Provider.module.css';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Provider = () => {
    return (
        <div className='main_content'>
            <div className={style.display_flex}>
                <h1 className={style.provider}>Providers</h1>
                <Link to="/addnewprovider">
                <button className='addNewButton button_lg'><PlusOutlined /> Add New Providers</button>
            </Link>
               
            </div>


            <div className={style.layout}>
                <FilterArea />
                <TableArea/>
            </div>


        </div>
    );
};

export default Provider;
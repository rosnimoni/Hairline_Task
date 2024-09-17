import React, { useState } from 'react';
import style from './FilterArea.module.css';
import { Select } from 'antd';
import { MdMargin } from 'react-icons/md';

const options = [];
const handleChange = (value) => {
    console.log(`Selected: ${value}`);
};

const SearchInput = (props) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const handleSearch = (newValue) => {
        fetch(newValue, setData);
    };
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <Select
            showSearch
            value={value}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            suffixIcon={null}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
            options={(data || []).map((d) => ({
                value: d.value,
                label: d.text,
            }))}
        />
    );
};

const FilterArea = () => {

    const [size, setSize] = useState('middle');


    return (

        <div className="display_flex" style={{ padding: '20px',justifyContent:'space-between' }}>

            <div className={style.paragraph_p6} >
                Show
                <Select
                    size={size}
                    defaultValue="a1"
                    onChange={handleChange}
                    style={{
                        width: 100,
                        marginLeft: 10,
                    }}
                    options={options}
                />
            </div>

            <div className="display_flex">

                <SearchInput
                    placeholder="input search text"
                    style={{
                        width: 200,
                    }}
                />

                <Select
                    size={size}
                    defaultValue="Select Row"
                    onChange={handleChange}
                    style={{
                        width: 200,
                        marginLeft: 10,
                    }}
                    options={options}
                />



            </div>



        </div>


    );
};

export default FilterArea;
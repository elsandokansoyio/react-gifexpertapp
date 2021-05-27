import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputVal, setinputVal] = useState('') //String vacio

    const handleInputChange=(e)=>{
        setinputVal(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (inputVal.trim().length>2) {
            setCategories(categories=>[inputVal,...categories]);
            setinputVal('');
        }
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            />
        </form> 
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
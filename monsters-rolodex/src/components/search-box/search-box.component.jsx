import React from "react";
import './search-box.style.css';

//functional components have no acccess to state or lifecycle methods as they don't have class
//perfect for just rendering HTML

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className = 'search' 
        type="search" 
        placeholder={placeholder} 
        onChange = {handleChange}
    />
)






import React from 'react';

const Filtr = (props) => {

    const selectedCategories = props.selectedCategories;

    const handleChange = (e) =>  console.log(e)

return (    
    <div>
        <h1> Kategorie</h1>    
        {props.categories.map((item,i) => 
        <ItemCategories />
)}
    </div>
    )};

export default Filtr;
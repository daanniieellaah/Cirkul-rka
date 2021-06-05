import React from 'react';

const Filtr = (props) => {
  
return (    
    <div>
        <h1> Kategorie</h1>    
        {props.categories.map((item,i) => 
        <label key={i}>
           <input type="checkbox" value={item.typ}></input>
             {item.name}
        </label>
)}
        
    </div>
    )};

export default Filtr;
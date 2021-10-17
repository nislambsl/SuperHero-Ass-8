import React, { useEffect, useState } from 'react';
import './Contents.css';




const Contents = () => {
    const [persons, setPersons] = useState([]);
    
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data=> console.log(data));
    } , [])

    return (
        <div className="content-container">
             <div className="person-container">
                 <h3>Persons </h3>
                
             </div>
             <div className="card-container">
                 <h3>Card</h3>
             </div>
        </div>
    );
};

export default Contents;

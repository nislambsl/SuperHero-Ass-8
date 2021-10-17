import React, { useEffect, useState } from 'react';
import './Contents.css';
import Persons from '../Persons/Persons';
import Card from '../Card/Card';




const Contents = () => {
    const [persons, setPersons] = useState([]);
    const [card, setCard] = useState([]);
    
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data=> setPersons(data));
    } , [])

    const handleAddToCard = (person)=> {
       const newCard =[...card,person];
       setCard(newCard);
    }

    return (
        <div className="content-container">
             <div className="person-container">
                 <h3>Persons: {persons.length} </h3>
                {
                    persons.map(person => <Persons 
                        key={person.id}
                        person={person}
                        handleAddToCard ={handleAddToCard}  
                        >
                        </Persons>)
                }
             </div>
             <div className="card-container">
                 <Card card={card}></Card>
             </div>
        </div>
    );
};

export default Contents;

import React from 'react';

const Card = (props) => {
    const {card} = props;
    let total =0;
    for(const person of card){
        total = total + person.salary;
    }
    let name = " ";
    for(const person of card){
        name = name + ' ' + person.name;
    }
    return (
        <div>
           <h3>Order Summary</h3>
           <h6>No of Person Added: {props.card.length}</h6>
           <br />
           <h6>Name of Added Person: <br />{name} </h6>
           <h6>Total Salary: {total}</h6>
          
        </div>
    );
};

export default Card;
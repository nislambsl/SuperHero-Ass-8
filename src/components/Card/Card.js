import React from 'react';

const Card = (props) => {
    const {card} = props;
    let total =0;
    for(const person of card){
        total = total + person.salary;
    }
    let name = " ";
    for(const person of card){
        name = name + person.name +',  ';
    }
    return (
        <div>
           <h3>Order Summary</h3>
           <h6>No of Person Added: {props.card.length}</h6>
           <br />
           <h6>Name of Added Person:  {name} </h6>
           
           <br />
           <h5>Total Salary: {total}</h5>
          
        </div>
    );
};

export default Card;
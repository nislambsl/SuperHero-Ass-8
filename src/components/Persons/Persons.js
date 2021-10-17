import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import './Persons.css'



const Persons = (props) => {
    console.log(props);
   
const {img, name, age, job, salary,live} = props.person;
const element = <FontAwesomeIcon icon={faUserGraduate} />
const social = <FontAwesomeIcon icon={faEnvelopeOpenText} />

    return (
        
        <div className="card-div">
            <div className="personal-card">
            <img className="image" src={img} alt="" />
            
            <h3>Name: {name}</h3>
            <h6>Age: {age}</h6>
            <h5>Job: {job}</h5>
            <h6>Salary: {salary}</h6>
            <h5>Living Country: {live}</h5>

            <button 
            onClick={()=>props.handleAddToCard(props.person)}
            type="button" class="btn btn-success"
            >{element} Add Person</button>
            <br />
            <img className="mail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjYHcLtEIRjhslJzOKmfRHMAAWcc98POWqQ&usqp=CAU" alt="" />
        </div>
        </div>
    );
};


export default Persons;
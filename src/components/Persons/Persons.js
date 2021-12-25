import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faEnvelopeOpenText, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import './Persons.css'



const Persons = (props) => {
      
const {img, name, age, job, salary,live} = props.person;
const element = <FontAwesomeIcon icon={faUserGraduate} />
const contact = <FontAwesomeIcon icon={faEnvelopeOpenText} />
const contact1 = <FontAwesomeIcon icon={faMobileAlt} />

    return (
        
        <div className="wrapper-grid">
            <div className="personal-card">
            <img className="image" src={img} alt="" />
            
            <h5>Name: {name}</h5>
            <h6>Age: {age}</h6>
            <h5>Job: {job}</h5>
            <h6>Salary: {salary}</h6>
            <h5>Living Country: {live}</h5>

            <button 
            onClick={()=>props.handleAddToCard(props.person)}
            type="button" class="btn btn-success"
            >{element} Add Person</button>
            <br />
            
            <a href="">{contact}</a>
            
            <a href="">{contact1}</a>
        </div>
        </div>
    );
};


export default Persons;
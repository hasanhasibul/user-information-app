import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    const {name,gender,img,profession,email,phone,salary} = props.person;
    return (
        <div className="person-container">
            <div className="image">
               <img src={img} alt=""/>
            </div>
            <div className="details">
                <h2>Name : {name}</h2>
                <h3>Profession : {profession} </h3>
                <h4>Gender : {gender}</h4>
                <p>Email : {email}</p>
                <p>Contact : {phone} </p>
                <p>Yearly Income : {salary}Tk</p>
                <button onClick={()=>props.handleAddFriend(props.person)} className="button"> <FontAwesomeIcon icon={faUserFriends} />  Add Friend</button>

            </div>
        </div>
    );
};

export default Person;
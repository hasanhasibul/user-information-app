import React, { useState } from 'react';
import './Home.css'
import Person from '../Person/Person';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';

const Home = () => {
    
    const [person,setPerson] = useState(fakeData);

    const [clickPerson,setClickPerson] = useState([]);
    const handleAddFriend = (handleAddFriend) =>{

       const newClickPerson = [...clickPerson,handleAddFriend];
       setClickPerson(newClickPerson);
        
    }
    return (
        <div className="home">
            <div className="homeData">
                {
                    person.map(pr => <Person handleAddFriend={handleAddFriend} person={pr}></Person>)
                }
             
            </div>
            <div >
                <Cart clickPerson={clickPerson} ></Cart>
            </div>
        </div>
       
    );
};

export default Home;
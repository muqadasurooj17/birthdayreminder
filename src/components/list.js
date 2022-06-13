import React from 'react';
import "./board.css";

export default function detail({info, upcoming}) {
  return (
          <ul> {iterate(info, upcoming)}</ul>  
  );
}

function iterate(data, flag){
    if (!data) return;
    return (
        <>
            {
                data.map( (person, index) => {
                   
                    return (
                        <li key={index}>
                            <div className="detail">
                                <img src={person.img} alt="img" />
                                <div className="title">
                                    <h3 className='name'>{person.name}</h3>
                                    
                                    <h5 className="age">{Old(person.birthday)} years</h5>
                                    <h3 className='dob'>{person.birthday}</h3>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

// how old the person is
function Old(personAge){
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - year;
   return age;
}
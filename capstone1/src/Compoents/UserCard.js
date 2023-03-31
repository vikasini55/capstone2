import React from "react";
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Styles/Jobs.css'

const UserCard = (props) => {
    return(
    <>
    {props.details.map((value,index) => (
   // <Nav.Link href={`/applyjob/${value.id}`}>
        <div className="cards">
            <div class="card flex-row flex-wrap" key={index}>
                <div class="card-block px-2">
                <Nav.Link alt="link1" href={`/applyjob/${value.id}`}>
               <h4 data-testid="link2" class="card-title">ID:{value.id}</h4></Nav.Link>
                    <h3 class="card-title1">{value.role}</h3>  
                    
                   
                 <h5 className="bi bi-buildings"> {value.company}</h5>
                    <div class="card-text">
                      
                        <i className="bi bi-briefcase"/> {value.experience}
                        <i className="bi bi-currency-rupee"/>{value.salary}
                        <i className="bi bi-geo-alt-fill"/>{value.location}
                    </div>
                </div>
            </div>
        </div>
 //   </Nav.Link>
    ))}
    </>
    )
}

export default UserCard;




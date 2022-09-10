import React from 'react';
import './card.css';
import dp from "../componenet/img/jamildp.jpg"
const Card = () => {
    return (
        <div>
            <div className="card-main-container">

                <div className="profile-div">



                    <img src={dp} alt="" />
                </div>
                <div className="info">



                    <h4 style={{ color: 'orange', fontWeight: 700 }}>Jamil Kawsher <br /><span style={{ color: 'black', fontSize: '11px', fontWeight: '700' }}>Chatkhil,Noakhali</span><br /><span style={{ fontSize: '12px', color: 'black' }}>Mobile:01682953579</span><br /><span style={{ fontSize: '12px', color: 'black' }}>Email: jamilkawsher@gmail.com</span></h4>

                    <p>I'm a full-stack developer with experience in web development using JavaScript. I am quite enthusiastic about web technology. One of my greatest assets is my ability to motivate myself to attain my objectives successfully. </p>
                </div>


            </div>
        </div>
    );
};

export default Card;
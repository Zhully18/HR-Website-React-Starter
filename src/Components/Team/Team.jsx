import React from 'react'
import { teams } from '../data'
import './Team.css'

const Team = () => {
  return (
    <div>
        <div className="team">
            <h2>Meet Our <span>Beautiful Team</span></h2>
            <p>Our Team of expert</p>
            <div className="team_members">
                {teams.map((member, index) =>(
                    <div key={index} className="team_member">
                        <img src={member.img} alt="" />
                        <h3>{member.name} </h3>
                        <p>{member.role} </p>
                    </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Team
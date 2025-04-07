import React from 'react'

export default function FootballTeams({ teamData }) {
  
    return (
    
    <div className='bg-blue-200 border-2 border-black m-2 font-mono '>
    <div>
        <h2 className='font-bold'>
        {teamData.teamName}
        </h2>

        <div><p>Punkte: {teamData.points}</p> 
        </div>

        <div><p>Tore: {teamData.goals}</p> 
        </div>

        <div><p>Tordifferenz: {teamData.goalDiff}</p> 
        </div>

    

    </div>
    </div>
  )
}

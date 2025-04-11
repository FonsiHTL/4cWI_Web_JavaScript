import React from 'react'

export default function FootballTeams({ teamData }) {
  return (
    <div className='bg-blue-200 border-2 border-black m-2 font-mono p-4'>
      <div>
        <h2 className='font-bold flex items-center justify-between w-full'>
          <div>
            <div className='text-xl mb-2'>{teamData.teamName}</div>
            <div><p>Punkte: {teamData.points}</p></div>
            <div><p>Tore: {teamData.goals}</p></div>
            <div><p>Tordifferenz: {teamData.goalDiff}</p></div>
          </div>
          <img 
            src={teamData.teamIconUrl} 
            alt="Team Logo" 
            className='w-16 h-16 object-contain'
          />
        </h2>
      </div>
    </div>
  )
}

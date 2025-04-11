import React from 'react'

export default function FootballTeams({ teamData }) {
  return (
    <div className='bg-gradient-to-r from-blue-100 to-blue-200 border-2 
      border-blue-300 m-2 font-mono p-6 
      hover:from-blue-200 hover:to-blue-300 hover:shadow-xl 
      transition-all duration-300 hover:scale-102 
      cursor-pointer rounded-xl'>
      <div>
        <h2 className='font-bold flex items-center justify-between w-full'>
          <div>
            <div className='text-xl mb-3 text-blue-900 font-semibold'>{teamData.teamName}</div>
            <div className='space-y-2'>
              <p className='flex items-center'>
                <span className='w-24 text-blue-700'>Punkte:</span>
                <span className='font-bold'>{teamData.points}</span>
              </p>
              <p className='flex items-center'>
                <span className='w-24 text-blue-700'>Tore:</span>
                <span className='font-bold'>{teamData.goals}</span>
              </p>
              <p className='flex items-center'>
                <span className='w-24 text-blue-700'>Tordiff.:</span>
                <span className='font-bold'>{teamData.goalDiff}</span>
              </p>
            </div>
          </div>
          <img 
            src={teamData.teamIconUrl} 
            alt="Team Logo" 
            className='w-20 h-20 object-contain hover:scale-110 transition-transform'
          />
        </h2>
      </div>
    </div>
  )
}

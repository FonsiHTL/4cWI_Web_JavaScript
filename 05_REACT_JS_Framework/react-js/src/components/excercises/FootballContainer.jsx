import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router";
import FootballTeams from '../FootballTeams';

export default function FootballContainer() {

const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://api.openligadb.de/getbltable/bl1/2024')
      .then(response => response.json())
      .then(json => {
        setTeams(json);
      })
      
  }, []);

  return (
    <div>
      {/* Add your content here */}
      <h1 className='text-2xl font-bold mb-4'>
        Bundesliga Teams
      </h1>

      <div className='grid grid-cols-3 gap-4'>
      {teams.map(team => (
          <FootballTeams teamData={team} />
        ))}
      </div>
      
    </div>
    
  );
  
};


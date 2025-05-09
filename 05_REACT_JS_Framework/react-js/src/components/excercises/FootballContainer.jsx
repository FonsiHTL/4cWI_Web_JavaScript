import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router";
import FootballTeams from '../FootballTeams';

export default function FootballContainer() {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    fetch('https://api.openligadb.de/getbltable/bl1/2024')
      .then(response => response.json())
      .then(json => {
        setTeams(json);
        setFilteredTeams(json);
      })
  }, []);

  const filterTeams = (filter) => {
    const filtered = teams.filter((teamData) => 
      teamData.teamName.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTeams(filtered);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Bundesliga Teams
      </h1>

      <div className="sticky top-0 bg-amber-50 p-4 mb-4 shadow-md z-10">
        <input
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
          type="text"
          placeholder="Search teams..."
          onChange={(e) => filterTeams(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTeams.map(team => (
          <Link 
            key={team.teamInfoId}
            to="/team"
            state={{ teamData: team }}
          >
            <FootballTeams teamData={team} />
          </Link>
        ))}
      </div>
    </div>
  );
}


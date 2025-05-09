import React from 'react';
import { Link, useLocation } from "react-router";

export default function TeamDetails() {
  const location = useLocation();
  const { teamData } = location.state;

  return (
    <div className="container mx-auto p-8">
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 inline-block hover:bg-blue-600">
        Back to Overview
      </Link>

      <div className="bg-blue-200 rounded-xl shadow-lg p-6 mt-4">
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={teamData.teamIconUrl} 
            alt="Team Logo" 
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-3xl font-bold">{teamData.teamName}</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold mb-2">Statistics</h2>
            <p>Position: {teamData.position}</p>
            <p>Points: {teamData.points}</p>
            <p>Matches: {teamData.matches}</p>
            <p>Won: {teamData.won}</p>
            <p>Draw: {teamData.draw}</p>
            <p>Lost: {teamData.lost}</p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold mb-2">Goals</h2>
            <p>Goals Scored: {teamData.goals}</p>
            <p>Goals Against: {teamData.opponentGoals}</p>
            <p>Goal Difference: {teamData.goalDiff}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react'
import PeopleContainer from '../PeopleContainer'
import { Link } from "react-router";

export default function Cards_und_Daten() {
  const person = {firstname: "Paul", lastname: "Dillet"};
  return (
    <div>Cards_und_Daten

<PeopleContainer/>

<div className='m-5 w-39 h-10 font-boldpx-4 py-2 bg-blue-500 text-white border border-blue-700 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition'>
 <Link 
 to="/p2"
 state={{person: person, title: "Test"}}
 >Component Excercise</Link>
 </div>
    </div>
  )
}

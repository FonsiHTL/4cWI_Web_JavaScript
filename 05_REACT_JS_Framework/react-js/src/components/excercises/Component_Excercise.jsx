import React from 'react'
import Card from '../Card'
import Button from '../Button'
import List from '../List'
import { Link } from "react-router";

export default function Component_Excercise() {
  return (
    <div>
      <h1 className="bg-amber-300">Hello!</h1>


<div className="flex">
  <Card name={"Lukas"}jobtitle={"Schueler"}description={"kann nicht laufen"}/>
  <Card name={"Samuel"}jobtitle={"Schueler"}description={"Zigarillo"}/>
</div>

<div className="flex">
  <Button title={"button"}/>
</div>

<div className="flex">
  <List/>
</div>

<div className='m-5 w-30 h-10 font-boldpx-4 py-2 bg-blue-500 text-white border border-blue-700 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition'>
<Link to="/">Cards und Daten</Link>
</div>

    </div>
  )
}

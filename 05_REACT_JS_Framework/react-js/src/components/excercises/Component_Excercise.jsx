import React from 'react'
import Card from '../Card'
import Button from '../Button'
import List from '../List'

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



    </div>
  )
}


import React, {useState, useEffect} from "react";
import Card from "./Card";

export default function PeopleContainer(){
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://67b844b3699a8a7baef35a63.mockapi.io/person").then(
            (res) => res.json().then((data) =>{
                setPeople(data);
             })
        )
    }, [])

    return (
        <div>
            <h1>People</h1>
            <div className="grid grid-cols-3">
                {people.map(person => {
                return <Card name={person.name} imageUri={"https://picsum.photos/seed/picsum/200/300"} title={person.jobtitle}/>
            })}
            </div>
        </div>
    );
}
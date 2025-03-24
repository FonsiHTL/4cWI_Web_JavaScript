
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {people.map(person => {
                return <Card name={person.name} imageUri={"https://picsum.photos/200/300"} title={person.jobtitle}/>
            })}
            </div>
        </div>
    );
}

import React, {useState, useEffect} from "react";
import Card from "./Card";

export default function PeopleContainer(){
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
    

    useEffect(() => {
        fetch("https://67b844b3699a8a7baef35a63.mockapi.io/person").then(
            (res) => res.json().then((data) =>{
                setPeople(data);
                setFilteredPeople(data);
             })
        )
    }, []);

    const filterPeople = (filter) => {
        let filtered = people.filter((person) => person.name.toLowerCase().includes(filter));
        setFilteredPeople(filtered);
    }

    return (
        
       
      <div className="">

       

                <div className="fixed border mb-4 bg-amber-50 w-full h-28 p-8">

                    <input
                        className="border p-4"
                        type="text"
                        placeholder="Search"
                        onChange={(el) => {
                            console.log(el.target.value);
                            filterPeople(el.target.value);

                        } } />
                </div>

                <div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 pt-32">
                        {filteredPeople.map(person => {
                            return (<Card name={person.name} imageUri={"https://picsum.photos/200/300"} title={person.jobtitle} />);
                        })}
                    </div>
                </div>

            </div>
    
    );
}
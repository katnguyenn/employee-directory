import React from "react";
import DataCard from "./DataCard";



function DataList ({ filteredUsers }) {
    console.log(filteredUsers)
    return (
        filteredUsers.map(person => (
            <DataCard
                key={person.login.uuid}
                image={person.picture.medium}
                name={person.name.first + " " + person.name.last}
                phone={person.phone}
                email={person.email}
                dob={person.dob.date}
                />
             
        ))                                   
    )
}

export default DataList;
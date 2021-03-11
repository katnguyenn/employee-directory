import React from "react";
import DataHeader from "./DataHeader";


function formatDate(date) {
    const givenDate = date.split("-");
    const year = givenDate[0];
    const month = givenDate[1];
    const dayArray = givenDate[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
}

function DataList ({ filteredUsers }) {
    console.log(filteredUsers)
    return (
        filteredUsers.map(person => (
            <DataHeader
                key={person.login.uuid}
                image={person.picture.medium}
                name={person.name.first + " " + person.name.last}
                phone={person.phone}
                email={person.email}
                dob={formatDate(person.dob.date)}
                />
             
        ))                                   
    )
}

export default DataList;
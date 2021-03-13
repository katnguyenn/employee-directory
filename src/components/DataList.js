import React, { useState, useEffect } from "react";
import DataCard from "./DataCard";
import DataHeader from "./DataHeader";
import "../styles/DataList.css";


function formatDate(date) {
    const givenDate = date.split("-");
    const year = givenDate[0];
    const month = givenDate[1];
    const dayArray = givenDate[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
}

function DataList({ filteredUsers }) {
    const [sortCol, setSortCol] = useState()
    console.log(filteredUsers)
    const sortedUsers = filteredUsers.sort((a, b) => {

        if (sortCol === "name") {
            return a.name.last > b.name.last ? 1 : -1
        } else if (sortCol === "dob") {
            return a.dob.date > b.dob.date ? 1 : -1
        }

    })
    console.log(sortCol)

    // useEffect(() => {
    //     if(!sortCol) {
    //         return;
    //     }

    // },[])

    return (
        <table>
            <DataHeader setSortCol={setSortCol} />

            {sortedUsers.map(person => (

                <DataCard
                    key={person.login.uuid}
                    image={person.picture.medium}
                    name={person.name.first + " " + person.name.last}
                    phone={person.phone}
                    email={person.email}
                    dob={formatDate(person.dob.date)}
                    
                />

            ))}
        </table>

    )
}

export default DataList;
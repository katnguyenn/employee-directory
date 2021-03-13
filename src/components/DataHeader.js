import React from "react";
import "../styles/DataHeader.css"



const DataHeader = (props) => {
    const headings = [
        { name: "Image" },
        { name: "Name" },
        { name: 'Phone' },
        { name: 'Email' },
        { name: "DOB" }
    ]

    return (


        <thead>
            <tr>
                {headings.map(({ name }) => {
                    return (
                        <th
                            className={`header-col ${name === "Name" ? `pointer` : ``}`}
                            key={name}
                            onClick={() => 
                                name === "Name" ? 
                                props.handleSort()
                                : null
                            }

                        >
                            {name}

                        </th>
                    )

                })}


            </tr>

        </thead>





    )
}

export default DataHeader;
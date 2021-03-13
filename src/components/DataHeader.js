import React from "react";



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
                            className="header-col"
                            key={name}
                            onClick={() => {
                                props.handleSort()
                            }}

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
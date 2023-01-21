import React from 'react';

export default function UserAdminTable ({ list, colNames, width = "auto", height = "auto" }) {

    
    return (
        <>
            <div>
                {list.length > 0 && (
                    <table cellSpacing="0" style={{ width: width, height: height, padding: "5px 10px"}}>
                        <thead>
                            <tr>
                                {colNames.map((headerItem, index) => (
                                    <th key={index}>
                                        {headerItem.toUpperCase()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                          {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                            </tr>
                          ))}          
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}
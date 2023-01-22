import React from 'react';
import UsersCells from '../UserCells/UsersCells';
import style from "./UserTable.module.css";


export default function UserTable ({list, colNames}) {
    

    return (
        <>
            <table className={style.mainTable}>
                <thead cellSpacing="0" className={style.headerTable}>
                    <tr>
                    
                        {colNames.map((header, index) => (
                            <th key={index}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.map((obj, index) => (
                        <tr key={index}>
                            <UsersCells users={obj} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
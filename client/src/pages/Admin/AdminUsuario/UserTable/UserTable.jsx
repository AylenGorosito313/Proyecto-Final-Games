import React from 'react';
import { useSelector } from 'react-redux';
import UsersCells from '../UserTable/UserCells/UsersCells';
import style from "./UserTable.module.css";


export default function UserTable () {

    const { users } = useSelector( state => state.prueba.admin)
    
    const columnNames = ["Name", "Last Name", "Email", "Developer"]

    return (
        <>
            <table className={style.mainTable}>
                <thead cellSpacing="0" className={style.headerTable}>
                    <tr>
                        {columnNames.map((header, index) => (
                            <th key={index}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users?.map((obj, index) => (
                        <tr key={index}>
                            <UsersCells users={obj} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
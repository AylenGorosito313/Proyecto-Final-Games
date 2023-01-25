import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UsersCells from '../UserTable/UserCells/UsersCells';
import style from "./UserTable.module.css";


export default function UserTable ({ status, toggle, provisoryIdHandle, deleteToggle }) {

    const { users, inactiveUsers} = useSelector( state => state.prueba.admin)
    
    const columnNames = ["Name", "Last Name", "Email", "Developer", "Status"]

    let usersToRender
   
    if(status === "active"){
        usersToRender = users
    } else if (status === "inactive") {
        usersToRender = inactiveUsers
    }



    return (
        <>
            {
            usersToRender.length > 0 ?
                
            <>
                
                <table className={style.mainTable}>
                <thead  className={style.headerTable}>
                    <tr>
                        {columnNames.map((header, index) => (
                            <th key={index}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                
                <tbody>
                    {usersToRender?.map((obj, index) => (
                        <tr key={index}>
                            <UsersCells 
                            users={obj} 
                            status={status} 
                            toggle={toggle} 
                            provisoryIdHandle={provisoryIdHandle}
                            deleteToggle={deleteToggle}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            </>

            :

            <div>
                <h2>There is no users to show</h2>
            </div>

            }
        </>
    )
}
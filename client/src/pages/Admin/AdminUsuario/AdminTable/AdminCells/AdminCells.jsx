import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteUser } from '../../../../../middleware';

import style from "./UsersCells.module.css"

export default function AdminCells ({users, status, toggle, provisoryIdHandle, deleteToggle}) {
    
   
   

    const handleDeleteUser = (e) => {
        const userIdToDelete = e.target.getAttribute("value")
        deleteToggle()
        provisoryIdHandle(userIdToDelete)
    }


    return (
        <>
            <td className={style.column_name}>
                {users.name}
            </td>
            <td className={style.column_lastName}>
                {users.lastName}
            </td>
            <td className={style.email}>
                {users.email}
            </td>
            <td className={style.developer}>
                {users.proveedor === true ? 
                <i className="fa-solid fa-check"></i> :
                submissionPending(users.id) === true ?
                <span 
                value={users.id} 
                onClick={handleModalSubmission}
                
                > See</span> : 
                <i className="fa-solid fa-xmark"></i>
                }
            </td>
            <td>
                {status}
            </td>
            <td className={style.trash}>
                <i className="fa-solid fa-trash"  
                onClick={handleDeleteUser} 
                value={users.id}
                ></i>
            </td>
            <td>
                <i className="fa-solid fa-pen-to-square"></i>
            </td>
        </>
    )
}
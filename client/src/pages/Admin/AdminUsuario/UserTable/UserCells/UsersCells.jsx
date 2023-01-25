import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteUser } from '../../../../../middleware';

import style from "./UsersCells.module.css"
import "./icons.css"

export default function UsersCells ({users, status, toggle, provisoryIdHandle, deleteToggle}) {
    
    const { submissions } = useSelector( state => state.prueba.admin)
    
    const submissionPending = (userId) => {
        let submissionFinded = submissions.some( sbmsn => sbmsn.id_user === userId)
        return submissionFinded;
    }

    const handleModalSubmission = (e) =>{
        const pendingUserId = e.target.getAttribute("value")
        toggle()
        provisoryIdHandle(pendingUserId)
    }

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
                <i className="fa-solid fa-check checkUser"></i> :
                submissionPending(users.id) === true ?
                <span 
                className={style.openSubmission}
                value={users.id} 
                onClick={handleModalSubmission}
                
                > See</span> : 
                <i className="fa-solid fa-xmark xmarkUser"></i>
                }
            </td>
            <td className={style.statusContainer}>
                <span className={ status === "active" ? style.statusActive : style.statusInactive}>{status}</span>
            </td>
            <td className={style.trash}>
                <i className="fa-solid fa-trash deleteUser"  
                onClick={handleDeleteUser} 
                value={users.id}
                ></i>
            </td>
            {/* <td>
                <i className="fa-solid fa-pen-to-square"></i>
            </td> */}
        </>
    )
}
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from "./UsersCells.module.css"

export default function UsersCells ({users, status, toggle, pendingHandle}) {
    
    const { submissions, res } = useSelector( state => state.prueba.admin)
    
    const submissionPending = (userId) => {
        let submissionFinded = submissions.some( sbmsn => sbmsn.id_user === userId)
        return submissionFinded;
    }

    const handleModalSubmission = (e) =>{
        const pendingUserId = e.target.getAttribute("value")
        toggle()
        pendingHandle(pendingUserId)
    }

    useEffect(() => {

    }, [res])


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
                <i className="fa-solid fa-trash"></i>
            </td>
            <td>
                <i className="fa-solid fa-pen-to-square"></i>
            </td>
        </>
    )
}
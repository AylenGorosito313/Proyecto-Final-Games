import React from 'react';
import { useSelector } from 'react-redux';

import style from "./UsersCells.module.css"

export default function UsersCells ({users}) {
    
    const { submissions } = useSelector( state => state.prueba.admin)
    
    const userSubmissionValidation = (userId) => {

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
                <span>Ver</span> }
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
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteUser } from '../../../../../middleware';

import style from "./AdminCells.module.css"

export default function AdminCells ({admins, status, toggle, provisoryIdHandle, deleteToggle}) {
    
   
   

    const handleDeleteUser = (e) => {
        const userIdToDelete = e.target.getAttribute("value")
        deleteToggle()
        provisoryIdHandle(userIdToDelete)
    }


    return (
        <>
            <td className={style.column_name}>
                {admins.name}
            </td>
            <td className={style.email}>
                {admins.email}
            </td>
            <td className={style.password}>
                {admins.password}
            </td>
            <td>
                {status}
            </td>
           
        </>
    )
}
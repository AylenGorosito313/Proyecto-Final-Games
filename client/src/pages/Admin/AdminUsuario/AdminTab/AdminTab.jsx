import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AdminTable } from '../AdminTable/AdminTable';
import UserTable from '../UserTable/UserTable';
import style from "./AdminTab.module.css";

export default function AdminTab () {

    const [toggleTab, setToggleTab] = useState("users")

    const handleTab = (name) => {
        setToggleTab(name)
    }


    return (
        <>
        <div className={style.mainTabContainer}>
            <div className={style.mainTabHeader}>
                <div className={style.tabHeader}>
                    
                        <div  className={style.tabs} onClick={() => handleTab("users")}>Users</div>
                        <div  className={style.tabs} onClick={() => handleTab("admin")}>Admin Users</div>
                    
                    {toggleTab === "admin" && (
                        <button><i className="fa-solid fa-plus"></i> Añadir admin</button>
                    )}
                </div>
            </div>
            <div className={style.tabContent}>
                {toggleTab === "users" ? 
                <UserTable /> :
                toggleTab === "admin" ?
                <AdminTable /> :
                "No hay nada que mostrar"
                }
            </div>
        </div>
        </>
    )
}
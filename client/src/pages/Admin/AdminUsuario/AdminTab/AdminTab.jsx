import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AdminTable } from '../AdminTable/AdminTable';
import UserTable from '../UserTable/UserTable';
import style from "./AdminTab.module.css";

export default function AdminTab ({ toggle, provisoryIdHandle, deleteToggle, adminModalToggle }) {

    const [toggleTab, setToggleTab] = useState("users");
    const [userStatus, setUserStatus] = useState("active");
    const [adminStatus, setAdminStatus ] = useState("activeAdmins");

    // This handle works to change tabs
    const handleTab = (name) => {
        setToggleTab(name)
    }

    // This on change get the user status (value) choose option and sends it to UserTable
    const handleUserStatus = (e) => {
        const userStatus = e.target.value
        setUserStatus(userStatus);
    }

    // This on change get the admin status (status) option and sends it to AdminTable
    const handleAdminStatus = (e) => {
        const adminStatus = e.target.value
        setAdminStatus(adminStatus);
    }

    return (
        <>
        <div className={style.mainTabContainer}>
            <div className={style.mainTabHeader}>
                <div className={style.tabHeader}>
                        {/* TABS */}
                        <div  className={style.tabs} onClick={() => handleTab("users")}>Users</div>
                        <div  className={style.tabs} onClick={() => handleTab("admin")}>Admin Users</div>
                        {toggleTab === "users" && 

                        <select onChange={handleUserStatus}>
                            <option value="active" >Active</option>
                            <option value="inactive" >Inactive</option>
                        </select> 
                        }
                </div>
                    {toggleTab === "admin" && (
                        <button onClick={adminModalToggle} ><i className="fa-solid fa-plus"></i> Añadir admin</button>
                    )}
            </div>
            <div className={style.tabContent}>
                {toggleTab === "users" ? 
                <UserTable 
                status={userStatus} 
                toggle={toggle}
                provisoryIdHandle={provisoryIdHandle} 
                deleteToggle={deleteToggle } /> :
                toggleTab === "admin" ?
                <AdminTable 
                status={adminStatus} 
                toggle={toggle}
                provisoryIdHandle={provisoryIdHandle}
                /> :
                "No hay nada que mostrar"
                }
                {
                
                }
            </div>
        </div>
        </>
    )
}
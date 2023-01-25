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


    return (
        <>
        <div className={style.mainTabContainer}>
            <div className={style.mainTabHeader}>
                <div className={style.tabHeader}>
                        {/* TABS */}
                        <div  className={toggleTab === "users" ? style.tab1Active : style.tabs1} onClick={() => handleTab("users")}>Users</div>
                        <div  className={toggleTab === "admin" ? style.tab2Active :  style.tabs2} onClick={() => handleTab("admin")}>Admin Users</div>
                        {toggleTab === "users" && 
                        
                        <div className={style.selectStatus}>
                            <select onChange={handleUserStatus}>
                                <option value="active" >Active</option>
                                <option value="inactive" >Inactive</option>
                            </select> 
                        </div>
                        }
                </div>
                <div className={style.buttonContainerCreateAdmin}>
                    {toggleTab === "admin" && (
                        <button className={style.createNewAdmin} onClick={adminModalToggle} ><i className="fa-solid fa-plus"></i> Añadir admin</button>
                    )}
                </div>
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
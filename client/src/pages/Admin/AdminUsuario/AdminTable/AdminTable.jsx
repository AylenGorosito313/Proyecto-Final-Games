import React from 'react';
import { useSelector } from 'react-redux';
import style from "./AdminTable.module.css";

export const AdminTable = ({status, toggle, provisoryIdHandle}) => {

  const { admins } = useSelector( state => state.prueba)
    
    const columnNames = ["Name", "Last Name", "Email", "Developer", "Status"]

    let usersToRender
   
    if(status === "activeAdmins"){
        usersToRender = admins
    } else if (status === "inactiveAdmins") {
        usersToRender = inactiveUsers
    }

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
  )
}

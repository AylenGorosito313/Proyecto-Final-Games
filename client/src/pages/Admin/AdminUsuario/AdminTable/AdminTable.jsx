import React from 'react';
import { useSelector } from 'react-redux';
import AdminCells from './AdminCells/AdminCells';
import style from "./AdminTable.module.css";

export const AdminTable = ({status, toggle, provisoryIdHandle}) => {

  const { admins } = useSelector( state => state.prueba.admin)
    
    const columnNames = ["Name", "Email", "Password", "Status"]

    let adminsToRender
   
    if(status === "activeAdmins"){
        adminsToRender = admins
    }

  return (
    <>
    <table className={style.mainTable}>

      { 
      adminsToRender.length > 0 ?

        <>  
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
            {
            adminsToRender?.map((obj, index) => (
                <tr key={index}>
                    <AdminCells
                    admins={obj} 
                    status={status} 
                    toggle={toggle} 
                    provisoryIdHandle={provisoryIdHandle}
                    
                    />
                </tr>
            )) 
          }
        </tbody> 
        </>
      
      :
      
        <div>
            <h2>There is no admin users to show</h2>
        </div>
      }
    </table>
    </>
  )
}

import React from 'react'
import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getSubmissions, getUsers } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminUsuario.module.css";
import UserTable from './UserTable/UserTable';



export default function AdminUsuario() {

  const dispatch = useDispatch()
  
  const { users } = useSelector( state => state.prueba.admin)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getSubmissions())
  }, [dispatch]) 

  const columnNames = ["Name", "Last Name", "Email", "Developer"]

  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_User}>
        <UserTable 
          list={users}
          colNames={columnNames} />
      </div>
    </div>
  </div>
  )
}

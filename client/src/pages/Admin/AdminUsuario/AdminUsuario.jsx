import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminUsuario.module.css";
import UsersTable from './UsersTable';


export default function AdminUsuario() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_User}>
        {/* <UserAdminTable /> */}
      </div>
    </div>
  </div>
  )
}

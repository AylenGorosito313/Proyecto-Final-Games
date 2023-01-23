import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { getInactiveUsers, getSubmissions, getUsers } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import AdminTab from './AdminTab/AdminTab';
import style from "./AdminUsuario.module.css";



export default function AdminUsuario() {

  const dispatch = useDispatch()
  
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getSubmissions())
    dispatch(getInactiveUsers())
  }, [dispatch])

  

  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_User}>
        <AdminTab />
      </div>
    </div>
  </div>
  )
}

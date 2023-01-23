import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getInactiveUsers, getSubmissions, getUsers } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import AdminTab from './AdminTab/AdminTab';
import style from "./AdminUsuario.module.css";
import ValidationModal from './UserTable/ValidationModal.jsx/ValidationModal';



export default function AdminUsuario() {

  const  {submissions} = useSelector( state => state.prueba.admin)
  const dispatch = useDispatch()
  
  const [modal, setModal] = useState(false);
  

  const toggleModal = () => {
    
    setModal(!modal)
  }

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
        <AdminTab toggle={toggleModal} />
        {modal && <ValidationModal toggle={toggleModal} />}
        
      </div>
    </div>
  </div>
  )
}

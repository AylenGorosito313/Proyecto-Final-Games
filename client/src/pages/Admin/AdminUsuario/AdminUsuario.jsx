import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from "react-redux";
import { getAdminsList, getInactiveUsers, getSubmissions, getUsers } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import AdminTab from './AdminTab/AdminTab';
import CreateAdminModal from './AdminTable/CreateAdmin/CreateAdminModal';
import style from "./AdminUsuario.module.css";
import DeleteModal from './UserTable/DeleteModal/DeleteModal';
import ValidationModal from './UserTable/ValidationModal.jsx/ValidationModal';


export default function AdminUsuario() {

  const  {submissions, res, users} = useSelector( state => state.prueba.admin)
  const dispatch = useDispatch()
  
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userIdProvisory, setUserIdProvisory] = useState("");
  const [createAdminModal, setCreateAdminModal] = useState(false)

  /// ---------- START TOGGLES -----------
  
  // toggle to open/close APROVED/DECLINE SUBMISSION
  const toggleModal = () => {
    setModal(!modal);
    setUserIdProvisory("");
    dispatch(getUsers());
    dispatch(getSubmissions());
  }

  // toggle to open a close DELETE MODAL
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
    setUserIdProvisory("");
    dispatch(getUsers());
    dispatch(getInactiveUsers());
  }

  const toggleCreateAdminModal = () => {
    setCreateAdminModal(!createAdminModal);
    setTimeout(() => {
      dispatch(getAdminsList());
    }, 1000);
  }

  /// ---------- END TOGGLES -----------

  /// ---------- START FUNCTIONS -----------

  const provisoryIdHandle = (userId) => {
    setUserIdProvisory(userId)
  }

  // Function to find the submission pending by userId
  const submissionPending = (userId) => {
    let submissionFinded = submissions.find( sbmsn => sbmsn.id_user === userId)
    return submissionFinded;
}

  // function to find the user to be delete 
  const findUser = (userId) => {
    let userToBeDelete = users.find( user => user.id === userId)
    return userToBeDelete;
  }

  // Functions Executions
  let submissionFinded = submissionPending(userIdProvisory)
  let userToBeDelete = findUser(userIdProvisory)

  /// ---------- END FUNCTIONS -----------

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getSubmissions())
    dispatch(getInactiveUsers())
    dispatch(getAdminsList())
  }, [dispatch])

  return (
    <>
    <Toaster />
    <div className={style.Layout}>
      <div className={style.Contairner}>
        <NavAdmin />
        <div className={style.content_User}>
          <AdminTab 
          toggle={toggleModal} 
          provisoryIdHandle={provisoryIdHandle}
          deleteToggle={toggleDeleteModal}
          adminModalToggle={toggleCreateAdminModal} 
          />
          {modal && <ValidationModal 
          toggle={toggleModal} 
          submissionFinded={submissionFinded}
          />}
          {deleteModal && <DeleteModal 
          toggle={toggleDeleteModal}
          userToBeDelete={userToBeDelete}
          />}
          {createAdminModal && <CreateAdminModal 
          toggle={toggleCreateAdminModal}
          />}
        </div>
      </div>
    </div>
    </>
  )
}

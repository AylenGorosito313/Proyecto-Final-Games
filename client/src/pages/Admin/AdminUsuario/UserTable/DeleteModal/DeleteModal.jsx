import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../../../../middleware';
import style from "./DeleteModal.module.css"


function DeleteModal({toggle, userToBeDelete}) {

    const dispatch = useDispatch();
    const { res } = useSelector( state => state.prueba.admin)

    const onClickDeleteUser = () => {
        dispatch(deleteUser(userToBeDelete.id))
    }

  return (
        <div className={style.modal}>
            <div className={style.overlay}>
                {
                
                res ===  "usuario eliminado" ?
                    
                <div className={style.resModalContent}>
    
                    <div className={style.resHeaderModal}>
                        <h2>User Deleted Successfully</h2>
                    
                        <i className="fa-solid fa-check fa-beat fa-6x checkAproved" ></i>
                    </div>
                    <div className={style.actionsButtons} >
                        <button className={style.resButton} onClick={toggle}>Ok</button>
                    
                    </div>
                </div>
                
                :

                <div className={style.modalContent}>
                    <div className={style.closeModal}>
                        <button onClick={toggle}><i className="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                    <div className={style.headerModal}>
                        <h2>Delete User</h2>
                        <span>User Information:</span>
                    </div>
                    <div className={style.aplicationContent}>
                        <div className={style.blockContent} >
                            <h5>Id:</h5>
                            <span>{userToBeDelete.id} </span>
                        </div>
                        <div className={style.blockContent} >
                            <h5>Complete Name:</h5>
                            <span>{`${userToBeDelete.name} ${userToBeDelete.lastName}`}</span>
                        </div>
                        <div className={style.blockContent} >
                            <h5>Email:</h5>
                            <span>{userToBeDelete.email}</span>
                        </div>
                        <div className={style.blockContent} >
                            <h5>Developer:</h5>
                            <span>{userToBeDelete.proveedor ?
                            "Si" : "No"}</span>
                        </div>
                    </div>
                    <div className={style.actionsButtons} >
                        <button className={style.deleteButton} onClick={onClickDeleteUser}>Delete</button>
                    
                    </div>
                </div>
                
                }
            </div>
        </div>
            
  )
}

export default DeleteModal
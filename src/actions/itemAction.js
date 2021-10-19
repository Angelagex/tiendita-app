import Swal from 'sweetalert2'

import { fileUpload } from '../helpers/fileUpload'
import { db } from '../firebase/firebase-config'
import { types } from '../types/types'
import { loadItems } from '../helpers/loadItems'


let fileUrl=[]

export const ItemNew = (item) => {
    return async (dispatch, getSate) => {
        const uid = getSate().auth.uid
        delete item.id; 

        const newItem = {
            nombre: item.nombre,
            precio: item.precio,
            medida: item.medida=="Unidades"? item.medida : 500,
            imagen: fileUrl            
        }
        
        const docRef = await db.collection(`${uid}/Cart`).add(newItem)
        dispatch(addNewItem(docRef.id, newItem))

    }
}

export const Edit = (item) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        if (!item.url) {
            delete item.url;
        }

        const EditItem = {
            title: item.title,
            responsible: item.responsible,
            description: item.description,
            priority: item.priority,
            url: fileUrl
        }

        const itemFire = { ...EditItem  }
        delete itemFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

           await db.doc(`${uid}/Item/data/${item.id}`).update(EditItem)
           console.log(EditItem)

        Swal.fire('Saved', item.title, 'success');
        dispatch(ListarItem(uid))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/Item/data/${id}`).delete();

        dispatch(deleteItem(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(ListarItem(uid))
    }
}

export const deleteItem = (id) => ({
    type: types.itemDelete,
    payload: id
});

export const startUploading = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)
        console.log(fileUrl)
        Swal.close()
       return fileUrl
    }
}

//FUNCIÓN SINCRÓNICA 

export const addNewItem = ( id, item ) => ({
    type: types.itemAddNew,
    payload: {
        id, ...item
    }
})

export const ListarItem = (uid) => {
    return async (dispatch) =>{
        const items =  await loadItems(uid)
        dispatch(setItems(items))
    }
}

export const setItems = (items) => {
    return {
        type: types.itemLoad,
        payload: items
    }
}

export const activeItem = (id,item) => {
    return{
        type:types.itemActive,
        payload:{
            id,
            ...item
        }
    }
}


export const clearItem = () => {
    return {
        type: types.itemLogoutClean
    }
}


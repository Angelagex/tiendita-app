import Swal from 'sweetalert2'

import { fileUpload } from '../helpers/fileUpload'
import { db } from '../firebase/firebase-config'
import {types} from '../types/types'
import { loadProducts } from '../helpers/loadProducts'


let fileUrl=[]

export const ProductNew = (product) => {
    return async (dispatch) => {
       
        const newProduct = {
            nombre: product.nombre,
            precio: product.precio,
            medida: product.medida==="Unidades"? product.medida : 500,
            imagen: fileUrl
            
        }
        const docRef = await db.collection(`productos/`).add(newProduct)
        dispatch(addNewProduct(docRef.id, newProduct))

    }
}

export const Edit = (product) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        if (!product.url) {
            delete product.url;
        }

        const EditProduct = {
            title: product.title,
            responsible: product.responsible,
            description: product.description,
            priority: product.priority,
            url: fileUrl
        }

        const productFire = { ...EditProduct  }
        delete productFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

           await db.doc(`${uid}/Product/data/${product.id}`).update(EditProduct)
           console.log(EditProduct)

        Swal.fire('Saved', product.title, 'success');
        dispatch(ListarProduct(uid))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/Product/data/${id}`).delete();

        dispatch(deleteProduct(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(ListarProduct(uid))
    }
}

export const deleteProduct = (id) => ({
    type: types.productDelete,
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

export const addNewProduct = ( id, product ) => ({
    type: types.productAddNew,
    payload: {
        id, ...product
    }
})

export const ListarProduct = () => {
    return async (dispatch) =>{
        const products =  await loadProducts()
        dispatch(setProducts(products))
    }
}

export const setProducts = (products) => {
    return {
        type: types.productLoad,
        payload: products
    }
}

export const activeProduct = (id,product) => {
    return{
        type:types.productActive,
        payload:{
            id,
            ...product
        }
    }
}


export const clearProduct = () => {
    return {
        type: types.productLogoutClean
    }
}


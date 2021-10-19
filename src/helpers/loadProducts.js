import { db } from '../firebase/firebase-config'

export const loadProducts = async () => {

    const productStore = await db.collection(`productos`).get()
    const productsList = [];

    productStore.forEach(hijo=>{
        productsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return productsList
}

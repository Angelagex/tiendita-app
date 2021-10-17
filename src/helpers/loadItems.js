import { db } from '../firebase/firebase-config'

export const loadItems = async (uid) => {

    const itemStore = await db.collection(`${uid}/item/data`).get()
    const itemsList = [];

    itemStore.forEach(hijo=>{
        itemsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return itemsList
}

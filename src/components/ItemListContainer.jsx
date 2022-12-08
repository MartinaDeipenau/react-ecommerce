import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../utils/products';
import { db } from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect( () => {
       const firebaseFetch = async() => {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
       }
       firebaseFetch()
    }, [idCategory])


useEffect(() => {
    return (() => {
        setDatos([])
    })
}, [])

return (
    <ItemList items={datos} />
)
}

export default ItemListContainer;
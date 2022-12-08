import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../utils/products';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect( () => {
       firestoreFetch(idCategory)
       .then(response => setDatos(response))
       .catch(error => console.log(error))
    }, [idCategory])


return (
    <ItemList items={datos} />
)
}

export default ItemListContainer;
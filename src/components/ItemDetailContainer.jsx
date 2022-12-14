import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from '../utils/firestoreFetch'

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(response => setDato(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;
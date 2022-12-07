import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0)

    const onAdd = (qty) => {
        alert("Agregaste" + qty + "items.")
        setItemCount(qty)
    }

    return (
        <>
            {
                item && item.image
                    ?
                    <div>
                        <div>
                            <div>
                                <img> src={item.image[0]} </img>
                            </div>
                            <div>
                                <title>{item.title} </title>
                                <description>{item.description} </description>
                                <price>${item.price} </price>
                                <stock>{item.stock} unidades en stock </stock>
                            </div>
                            {
                                itemCount === 0
                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart'><button variant="container">CheckOut</button></Link>
                            }
                        </div>
                    </div>
                    : <p>Cargando...</p>
        }
        </>
    )
}   

export default ItemDetail;
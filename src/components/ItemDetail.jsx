import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0)
    const test = useContext(CartContext)

    const onAdd = (qty) => {
        alert("Agregaste" + qty + "items.")
        setItemCount(qty)
        test.addToCart(item, qty)
    }

    return (
        <>
            {
                item && item.image
                    ?
                    <div className='Detail'>
                        <div>
                            <img className='imageDetail' src={item.image} />
                        </div>
                        <div>
                            <p>{item.title} </p>
                            <p>{item.description} </p>
                            <p>${item.price} </p>
                            <p>{item.stock} unidades en stock </p>
                        </div>
                        <div className='Count'>
                            {
                                itemCount === 0
                                    ? <ItemCount className='TerminarCompra' stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart'><button variant="container">Terminar compra</button></Link>
                            }
                        </div>
                    </div>
                    : <p>Cargando...</p>
            }
        </>
    )
}

export default ItemDetail;
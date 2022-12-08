import { useEffect } from 'react';
import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(initial)
    }, [])

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > initial + 1) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='Button-ItemCount'>
                <div className='ItemCount'>
                    <button className='sumar' onClick={sumar}>+</button>
                    <p>{count}</p>
                    <button className='restar' onClick={restar}>-</button>
                </div>
                {
                    stock && count
                        ? <button className='AgregarAlCarrito' onClick={() => onAdd(count)}>Agregar al carrito</button>
                        : <button className='AgregarAlCarrito' disabled>Agregar al carrito</button>
                }
            </div>
        </>
    )
}

export default ItemCount;



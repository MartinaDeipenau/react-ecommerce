import { useEffect } from 'react';
import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1 , onAdd }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(initial)
    }, [])

    const sumar = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > initial+1) {
            setCount(count - 1)
        }
    }

    return (
        <>
        <div>
            <button className='sumar' onClick={sumar}>+</button>
            <button className='restar' onClick={restar}>-</button>
        </div>
        {
            stock && count 
            ? <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            : <button disabled>Agregar al carrito</button>
        }
        </>
    )
}

export default ItemCount;



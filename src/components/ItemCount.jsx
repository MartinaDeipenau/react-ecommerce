import { useState } from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    return (
        <>
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
        <span>{counter}</span>
        </>
    )
}

export default ItemCount;



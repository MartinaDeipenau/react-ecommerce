import { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Item = ({ id, title, stock, price, image, description }) => {
    return (
        <div>
            <image src={image} />
            <div>
                <price>${price} </price>
            </div>
            <div>
                <stock /> {stock} unidades.
            </div>
            <div>
                <Link to={`/item/${id}`}>Descripcion</Link>
            </div>
        </div>
    )
}

export default Item;
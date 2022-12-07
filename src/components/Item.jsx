import { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Item = ({ id, title, stock, price, image, description }) => {
    return (
        <Fragment>
            <image src={image} />
            <Fragment>
                <price>${price} </price>
            </Fragment>
            <Fragment>
                <stock /> {stock} unidades.
            </Fragment>
            <Fragment>
                <Link to={`/item/${id}`}>Descripcion</Link>
            </Fragment>
        </Fragment>
    )
}

export default Item;
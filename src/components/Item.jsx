import { Link } from 'react-router-dom';


const Item = ({ id, title, stock, price, image }) => {
    return (
        <div className='Item'>
            <img className='imageItem' src={image} alt={title} />
            <div>
                <p className='p' >${price} </p>
            </div>
            <div>
                <p className='p' > {stock} unidades.</p>
            </div>
            <div>
                <Link className='ver-mas' to={`/item/${id}`}>Ver mas</Link>
            </div>
        </div>
    )
}

export default Item;
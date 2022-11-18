import { Link } from 'react-router-dom';

const CartWidget = () => {
    return <div className="fs-1 pe-auto m-2">
        <Link to={"/checkout"}>
            <a className="text-decoration-none">🛒</a>
        </Link>
    </div>
}

export default CartWidget;
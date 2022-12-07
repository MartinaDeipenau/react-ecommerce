import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';

const CartWidget = () => {
    return <div className="fs-1 pe-auto m-2">
        <Link to={"/Cart"}>
            <a className="text-decoration-none">🛒</a>
        </Link>
    </div>
}

export default CartWidget;
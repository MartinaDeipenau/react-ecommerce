import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div>
            <div className="logo">
                <Link to='/'>LOLA Cat Shop</Link>
            </div>
            <div className="menu">
                <Link to='/category/2'>Accesorios</Link>
                <Link to='/category/1'>Camas</Link>
                <Link to='/category/3'>Alimentos</Link>
            </div>
            <div className="carrito">
                <><CartWidget /></>
            </div>
        </div>
    )
}

export default NavBar;
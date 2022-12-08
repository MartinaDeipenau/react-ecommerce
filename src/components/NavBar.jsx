import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div className='header'>
            <div>
                <Link className='logo' to='/'>LOLA Cat Shop</Link>
            </div>
            <div>
                <Link className='menu' to='/category/2'>Accesorios</Link>
                <Link className='menu' to='/category/1'>Camas</Link>
                <Link className='menu' to='/category/3'>Alimentos</Link>
            </div>
            <div>
                <Link className='carrito'><CartWidget/></Link>
            </div>
        </div>
    )
}

export default NavBar;
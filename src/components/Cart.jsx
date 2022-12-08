import { useContext } from "react";
import { CartContext } from "./CartContext";
import { collection, increment, serverTimestamp, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from '../utils/firebaseConfig';
import FormatNumber from "../utils/FormatNumber"
import { doc, setDoc } from "firebase/firestore";

const Cart = () => {
    const test = useContext(CartContext)

    const createOrder = () => {
        let order = {
            buyer: {
                name: 'Emma Sophi',
                email: 'emma@sophi.com',
                phone: '515652226'
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                title: item.titleItem,
                price: item.priceItem,
                qty: item.qtyItem
            })),
            total: test.calcTotal()
        }

        const createOrderInDB = async() => {
            const newOrderRef = doc(collection(db, 'orders'))
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrderInDB()
        .then(response => console.log('Orden de compra en la BD', response.id))
        .catch(error => console.log(error))
    }



    // const Cart = () => {
    //     const test = useContext(CartContext)

    //     const createOrder = () => {
    //         const itemsForDB = test.cartList.map(item => ({
    //             id: item.IdItem,
    //             title: item.titleItem,
    //             price: item.priceItem
    //         }))
    //         test.cartList.forEach(async (item) => {
    //             const itemRef = doc(db, "products", item.idItem)
    //             await updateDoc(itemRef, {
    //                 stock: increment(-item.qtyItem)
    //             })
    //         })

    //         let order = {
    //             buyer: {
    //                 name: "Emma Sophi",
    //                 email: "emma@sophi.com",
    //                 phone: "46521632"
    //             },
    //             total: test.calcTotal(),
    //             items: itemsForDB,
    //             date: serverTimestamp()
    //         }
    //         console.log(order)

    //         const createOrderInFireS = async () => {
    //             const newOrderRef = doc(collection(db, "orders"))
    //             await setDoc(newOrderRef, order)
    //             return newOrderRef
    //         }
    //         createOrderInFireS()
    //             .then(response => alert('Tu orden de compra se creo'))
    //             .catch(error => console.log(error))

    //         test.removeList()
    //     }


    return (
        <>
            <h1>Tu carrito de compras</h1>
            <div>
                <Link className="ButtonContinuarC" to='/'><button>Continuar comprando</button></Link>
                {
                    (test.cartList.length > 0)
                        ? <button onClick={test.removeList}>Borrar todos los productos</button>
                        : <p className="CarritoVacio">Tu carrito esta vacio</p>
                }
            </div>
            <div>
                <div>
                    <div>
                        {
                            test.cartList.length > 0 &&
                            test.cartList.map(item =>
                                <p id={item.idItem}>
                                    <div className="Compra">
                                        <img src={item.imageItem} />
                                        <div>
                                            <p>{item.titleItem}</p>
                                        </div>
                                        <button onClick={() => test.deleteItem(item.idItem)}>Borrar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <p>{item.qtyItem} item(s)</p>
                                            <p>${item.priceItem} cada uno </p>
                                        </div>
                                        <p>$ {test.calcularTotalPerItem(item.idItem)}</p>
                                    </div>
                                </p>
                            )
                        }
                    </div>
                    {
                        test.cartList.length > 0 &&
                        <div className="OrdendeCompra">
                            <title>Orden de compra</title>
                            <div>
                                <p>Subtotal</p>
                                <p><FormatNumber number={test.calcSubTotal()} /></p>
                            </div>
                            <div className="TotalCompra" >
                                <p>Total</p>
                                <p><FormatNumber number={test.calcTotal()} /></p>
                            </div>
                            <button className="Buttoncomprar">COMPRAR</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;
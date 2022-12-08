import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id)
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imageItem: item.image[0],
                    titleItem: item.title,
                    priceItem: item.price,
                    qtyItem: qty
                }
            ])
        } else {
            found.qtyItem += qty
            setCartList([
                ...cartList
            ])
        }
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        let result= cartList.filter(item => item.idItem != id)
        setCartList(result)
    }

    const calcularTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem)
        return cartList[index].costItem * cartList[index].qtyItem
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcularTotalPerItem(item.idItem))
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue)
    }

    const calcTotal = () => {
        return calcSubTotal()
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem)
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            addToCart,
            removeList,
            deleteItem,
            calcularTotalPerItem,
            calcSubTotal,
            calcTotal,
            calcItemsQty
        }}>
            { children }
        </CartContext.Provider>
    )
    }

    export default CartContextProvider

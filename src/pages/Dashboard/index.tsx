import { useAuth } from "../../provider/Auth"
import { useCart } from "../../provider/Carrinho"

import { Carrinho } from "../../components/Carrinho"
import { FiShoppingBag } from "react-icons/fi"
import { useHistory } from "react-router-dom"
export const Dashboard = () => {

    const { logout } = useAuth()
    const { cart } = useCart()
    const history = useHistory()
    return(
        <>
         <header>
         <p>Hamburguer <strong>Shop</strong></p> 

         <FiShoppingBag color="#219653" fontSize={40} /><p>{cart.length}</p>
        <button onClick={() => history.push('/')}>Home</button>
        </header>
        carrinho

        <button onClick={() => logout()}>Sair</button>
        <Carrinho/>
        </>
    )
}
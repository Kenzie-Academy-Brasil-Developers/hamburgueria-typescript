import { Produtos } from "../../components/Produtos"
import { useHistory } from "react-router-dom"
import { useCart } from "../../provider/Carrinho"
import { FiShoppingBag } from "react-icons/fi"

import { Header } from "./styles"

export const Home = () => {
    const { cart } = useCart()

    const history = useHistory()

    return(
        <>
        <Header>
         <p>Burguer <strong>Kenzie</strong></p>
            <div>
               <button onClick={() => history.push('/dashboard')}><FiShoppingBag color="#219653" fontSize={40} /><span>{cart.length}</span></button> 
                <button onClick={() => history.push('/login')}>Login</button>
                <button onClick={() => history.push('/')}>Cadastrar</button>
            </div> 

        </Header>
        
        <Produtos/>
        </>
    )
}
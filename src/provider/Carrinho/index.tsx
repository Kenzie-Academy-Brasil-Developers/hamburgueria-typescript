import { createContext, useContext, ReactNode, useState } from "react";

import axios from "axios";
import { useAuth } from "../Auth";

interface ChildrenProps {
    children:ReactNode;
}

interface Produto {
  userId: number;
  name:string;
  price:number;
  category:string;
  img:string;
  id:number;
}

interface ProductsCart {
    name:string;
    price:number;
    category:string;
    img:string;
}

interface CartProviderData {
  cart: Produto[];
  adicionar: (product: Produto) => void;
  remover: (product: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({children}:ChildrenProps) => {

    const [cart, setCart] = useState<Produto[]>([]);
    
    const { userId} = useAuth()
    const token = (localStorage.getItem("@hamburgueria:token") || "{}")


    axios
    .get(`https://hamburguer-json.herokuapp.com/carrinho=${userId}`)
    .then(response => setCart(response.data))
    .catch((err) => console.log(err))

    // adicionar no carinho
    const adicionar = (produtosData: ProductsCart) => {
      axios
      .post("https://hamburguer-json.herokuapp.com/carrinho",produtosData, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => alert("adiconado"))
      .catch((err) => console.log(err))
    }

    // remover do carrinho
    const remover = (produtosDelete: number) => {
      axios
      .post(`https://hamburguer-json.herokuapp.com/produtoscarrinho${produtosDelete}`,{headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then(() => alert("removido"))
    .catch((err) => console.log(err))
    }
    return(
      <CartContext.Provider value={{remover,adicionar,cart}}>
        {children}
      </CartContext.Provider>
    )

}


export const useCart = () => useContext(CartContext)
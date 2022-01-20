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

    const [carrinho, setCarrinho] = useState<Produto[]>([]);
    
    const { userId} = useAuth()
    const token = (localStorage.getItem("@hamburgueria:token") || "{}")


    axios
    .get(`minhaapai.com/cart?userId=${userId}`)
    .then(response => setCarrinho(response.data))
    .catch((err) => console.log(err))

    // adicionar no carinho
    const adicionar = (produtosData: ProductsCart) => {
      axios
      .post("http://minhaapi.heroku.com/carrinho",produtosData, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => alert("adiconado"))
      .catch((err) => console.log(err))
    }

    // remover do carrinho
    const remover = (produtosDelete: number) => {
      axios
      .post(`http://minhaapi.heroku.com/carrinho${produtosDelete}`,{headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then(() => alert("removido"))
    .catch((err) => console.log(err))
    }
    return(
      <CartContext.Provider value={{remover,adicionar,carrinho,setCarrinho}}>
        {children}
      </CartContext.Provider>
    )

}


export const useCart = () => useContext(CartContext)
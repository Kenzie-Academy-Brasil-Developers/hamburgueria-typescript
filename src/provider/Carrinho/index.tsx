
import { createContext, useContext, ReactNode, useState } from "react";


interface ChildrenProps {
    children:ReactNode;
}

interface Produto {
  name:string;
  price:number;
  category:string;
  img:string;
  id:number;
}

interface CartProviderData {
  cart: Produto[];
  adicionar: (data: Produto) => void;
  remover: (productId: Produto) => void;
  // subAmout: ( product: Produto) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({children}:ChildrenProps) => {

    const [cart, setCart] = useState<Produto[]>([]);

    
    // remover do carrinho
    const remover = (produto: Produto) => {
      const removido = cart.filter((item) => item.id !== produto.id)
      setCart(removido)
    }

    const adicionar = (data: Produto) => {
      const newData = {
        name:data.name,
        price:data.price,
        category:data.category,
        img:data.img,
        id:data.id
      }
      setCart([...cart,newData])
    } 
    
    return(
      <CartContext.Provider value={{remover,adicionar,cart}}>
        {children}
      </CartContext.Provider>
    )

}


export const useCart = () => useContext(CartContext)
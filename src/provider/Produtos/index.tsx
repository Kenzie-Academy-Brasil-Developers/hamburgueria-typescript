import { createContext, useContext, ReactNode, useState } from "react";

import axios from "axios";

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

interface ProductsProviderData {
    products: Produto[];
}

const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData)

export const ProductsProvider = ({children}: ChildrenProps) =>  {

    const [products,setProducts] = useState<Produto[]>([]);

    axios
    .get("http://minhaapi.heroku.com/produtos")
    .then(response => setProducts(response.data))
    .catch(err => console.log(err))

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}
export const useProducts = () =>  useContext(ProductsContext)

import { AuthProvider } from "./Auth";
import { CartProvider } from "./Carrinho";
import { ProductsProvider } from "./Produtos";

import { ReactNode } from "react";

interface SignInProps {
    children: ReactNode;
}

const Provider = ({children}: SignInProps) => {
    return(
        <AuthProvider>
            <ProductsProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ProductsProvider>
        </AuthProvider>
    )
}
export default Provider
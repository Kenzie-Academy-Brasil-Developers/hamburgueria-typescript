import { AuthProvider } from "./Auth";
import { ReactNode } from "react";

interface SignInProps {
    children: ReactNode;
}

const Provider = ({children}: SignInProps) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
export default Provider
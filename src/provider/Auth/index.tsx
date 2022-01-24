import { createContext, useContext, ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { report } from "process";
import { dataAttr } from "@chakra-ui/utils";

interface SignInProps {
  children: ReactNode;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface LoginProps {
  email: string;
  password: string;
}

interface CadastroProps {
  name:string;
  email:string;
  password:string;
}

interface User{
  email: string;
  name: string;
  id: string;
  cart:[]
}

interface AuthProviderData {
  accessToken: string;
  user: User
  signIn: (auth: LoginProps) => void;
  signUp: (auth: CadastroProps) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: SignInProps) => {
  const history = useHistory();

  const [auth, setAuth] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('token')
    const user = localStorage.getItem('user')


    if(accessToken && user){
      return {
        accessToken, user : JSON.parse(user)
      }
    }
    return {} as AuthState
  });

  const signIn = ( userData: LoginProps) => {
    axios
       .post("https://hamburguer-json.herokuapp.com/login", userData)
       .then((response) => {
         const {  accessToken, user } = response.data

          localStorage.setItem("token", accessToken);
          localStorage.setItem("user", JSON.stringify(user))

          console.log(response.data)
      
          setAuth({accessToken, user});
          toast.success('logado com sucesso')

          history.push("/dashboard");
          })

          .catch((err) => {
            console.log(err)
            toast.error("Conta Não existe")
            history.push("/register");
          })
 
  }
      
      const signUp = (userData: CadastroProps) => {
        const newData = {
          email: userData.email,
          password: userData.password,
          name: userData.name,
        }
        axios
        .post("https://hamburguer-json.herokuapp.com/register",newData)
        .then((response) => {
          toast.success("Cadastrado com sucesso")
          history.push("/login")
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
          toast.error("ops essa conta ja existe")})
      }


  const logout = () => {
      localStorage.clear();
      setAuth({} as AuthState);
      history.push("/");
  }

  return(
      <AuthContext.Provider value={{ accessToken: auth.accessToken, user: auth.user, logout,signIn, signUp}}>
          {children}
      </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext)

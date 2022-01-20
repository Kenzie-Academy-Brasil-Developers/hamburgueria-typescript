import { createContext, useContext, ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface SignInProps {
  children: ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

interface CadastroProps {
  email:string;
  name:string;
  age:number;
  password:string;
}

interface AuthProviderData {
  userId: string;
  authToken: string;
  signIn: (auth: LoginProps) => void;
  signUp: (auth: CadastroProps) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: SignInProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@hamburgueria:token") || ""
  );
  const [userId, setUserId] = useState<string>(
    () => localStorage.getItem("@hamburgueria:userId") || ""
    );

  const signUp = (userData: CadastroProps) => {
    axios
    .post("https://hamburguer-json.herokuapp.com/register",userData)
    .then((_) => {
      history.push("/login")
    })
    .catch((err) => console.log(err))
  }
  

  const signIn = ( userData: LoginProps) => {
      axios
      .post("https://hamburguer-json.herokuapp.com/login", userData)
      .then((response) => {
          localStorage.setItem("@hamburgueria:token", response.data.token);
          
          localStorage.setItem("@hamburgueria:userId", response.data.user.id);

          setAuthToken(response.data.token);
          setUserId(response.data.user.id)
          history.push("/dashboard");
          console.log(userData)
          alert("Logado com sucesso")
      })
      .catch((err) => console.log(err, userData));;
  }

  const logout = () => {
      localStorage.clear();
      setAuthToken("");
      history.push("/");
  }

  return(
      <AuthContext.Provider value={{ authToken, logout,signIn, signUp,userId}}>
          {children}
      </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext)

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi"

import { useAuth } from "../../provider/Auth";
import { Container, Card, Formulario, Paragrafo, Span, Button, Para } from "./styles";

interface UserData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Email Obrigatório"),

    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmitLogin = (data: UserData) => {
    signIn(data);
    console.log(data);
    history.push("/dashboard");
  };

  return (
    <>
        <button onClick={() => history.push("/")}>Home</button>
        <Paragrafo>
          Burguer <strong>Kenzie</strong>
        </Paragrafo>
     

    <Container>
        <Card>
          <p>
            <FiShoppingBag  color="#219653" fontSize={20} />
            A vida é como um sanduiche , é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </Card>
      

      <Formulario onSubmit={handleSubmit(onSubmitLogin)}>
        <div>

          <p>Login</p>
        </div>

        
        <input placeholder="Digite seu Email" {...register("email")} />
        <Span>{errors.email?.message}</Span>
        
        <input
          placeholder="Digite sua Senha"
          type="password"
          {...register("password")}
        />
        <Span>{errors.password?.message}</Span>
       

        <Button type="submit">Entrar</Button>
        
           <Para>
            
             <button onClick={() => history.push("/register")}>Cadastre</button>
            sua conta para saborear muitas delicias e matar sua fome!
            </Para>
        
        
      </Formulario>

    </Container>
    </>
  );
};

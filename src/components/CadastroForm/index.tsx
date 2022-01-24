import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../provider/Auth';

import { FiShoppingBag } from 'react-icons/fi';

import {Container,Formulario, Button, Login, Container2, Paragrafo, Card, Span  } from './styles';

interface UserData {
    email:string;
    password:string;
    name:string;
}

export const CadastroForm  = () => {

    const { signUp } = useAuth()

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string()
        .email("Email Invalido")
        .required("Email Obrigatório"),

        name: yup.string()
        .required("Nome obrigatório"),

        password: yup.string()
        .required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserData>({
        resolver: yupResolver(schema)
    })

    const onSubmitCadastro = (data:UserData) => {
     console.log(data)
        signUp(data)
        history.push('/login')
    }
    
    return(
        <>
        <button onClick={() => history.push('/')}>Home</button>
            <Paragrafo>
                Burguer <strong>Kenzie</strong>
            </Paragrafo>

        <Container>

        <Card>
          <p>
            <FiShoppingBag color="#219653" fontSize={20}  />
            A vida é como um sanduiche , é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </Card>

        <Formulario onSubmit={handleSubmit(onSubmitCadastro)}>
        
        <Container2>

        Cadastro
        <Login onClick={() => history.push('/login')}>Login</Login>

        </Container2>
            <input
            placeholder='Digite seu Email'
            {...register("email")}/>
            <Span>{errors.email?.message}</Span>
            
            <input
            placeholder='Digite seu Nome'
            {...register("name")}/>
            <Span>{errors.name?.message}</Span>
          
            <input
            placeholder='Digite sua Senha'
            {...register("password")}/>
            <Span>{errors.password?.message}</Span>

            <Button type='submit'>Cadastrar</Button>
        </Formulario>

        </Container>
        </>
    )
}
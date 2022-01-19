import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';

import { useAuth } from "../../provider/Auth"

interface UserData {
    email:string;
    senha:string;
}

export const LoginForm  = () => {

    const { signIn } = useAuth()

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string()
        .required("Nome Obrigatório"),

        senha: yup.string()
        .required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserData>({
        resolver: yupResolver(schema)
    })

    const onSubmitLogin = (data:UserData) => {
        signIn(data);
        console.log(data)
        alert("logado com sucesso")
        history.push('/dashboard')
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
            <input
            placeholder='Digite seu Email'
            {...register("email")}/>
            <span>{errors.email?.message}</span>

            <input
            placeholder='Digite sua Senha'
            type='password'
            {...register("senha")}/>
            <span>{errors.senha?.message}</span>

            <button type='submit'>Entrar</button>
        </form>
        </>
    )
}
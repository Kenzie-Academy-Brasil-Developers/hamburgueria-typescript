import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../provider/Auth';


interface UserData {
    email:string;
    name:string;
    age:number;
    password:string;
}

export const CadastroForm  = () => {

    const { signUp } = useAuth()

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string()
        .required("Email Obrigstório"),

        name: yup.string()
        .required("Nome Obrigatório"),

        age: yup.string()
        .required('Idade Obrigatória'),

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
        signUp(data)
        alert("cadastrado com sucesso")
        history.push('/login')
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmitCadastro)}>
            <input
            placeholder='Digite seu Email'
            {...register("email")}/>
            <span>{errors.email?.message}</span>
            
            <input
            placeholder='Digite seu Nome'
            {...register("name")}/>
            <span>{errors.name?.message}</span>

            <input
            placeholder='Digite sua Idade'
            {...register("age")}/>
            <span>{errors.age?.message}</span>
            
            <input
            placeholder='Digite sua Senha'
            {...register("password")}/>
            <span>{errors.password?.message}</span>

            <button type='submit'>Cadastrar</button>
        </form>
        </>
    )
}
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';


interface UserData {
    email:string;
    name:string;
    idade:number;
    senha:string;
}

export const CadastroForm  = () => {

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string()
        .required("Email Obrigstório"),

        name: yup.string()
        .required("Nome Obrigatório"),

        idade: yup.string()
        .required('Idade Obrigatória'),

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

    const onSubmitCadastro = (data:UserData) => {
        console.log(data)
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
            {...register("idade")}/>
            <span>{errors.idade?.message}</span>
            
            <input
            placeholder='Digite sua Senha'
            {...register("senha")}/>
            <span>{errors.senha?.message}</span>

            <button type='submit'>Cadastrar</button>
        </form>
        </>
    )
}
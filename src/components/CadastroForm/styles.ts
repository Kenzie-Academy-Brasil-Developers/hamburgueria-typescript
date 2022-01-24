import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
     
`


export const Paragrafo = styled.p`
    font-size: 30px;
        text-align: start;
        margin: 10px 10px;
        font-weight: 700;
    
    strong{
        font-size:20px;
        color:red ;
    }
`

export const Formulario = styled.form`

    border: 1px solid gray;
    width: 300px;
    margin: 16px auto;
    display: flex;
    flex-direction: column;



    input{
        padding: 8px;
        border-radius:6px;
        margin: 10px auto;
    }
   
     
`
export const Span = styled.span`
    margin: 0;
    font-size: 10px;
    color: red;
`

export const Card = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin: auto;
    font-size: 15px;
    height: 70px;
    
`
export const Button = styled.button`
    padding: 10px;
    border-radius:6px;
    margin: 5px auto;
    width: 195px;
    background-color: #219653;
    border: none;
    color: #fff;
    cursor: pointer;

`
export const Container2 = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px ;
`

export const Login = styled.button`
   border: none;
   text-decoration:underline;

`



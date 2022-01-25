import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
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
export const Card = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin: auto ;
    font-size: 15px;
    height: 70px;
    

`


export const Formulario = styled.form`

    border: 1px solid gray;
    width: 300px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;

 
 div{
     margin: 0 auto;

     button{
         border: none;
     }
 }


    input{
        padding: 8px;
        border-radius:6px;
        margin: 0 auto;
    }
   
    
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
export const Span = styled.span`
        margin: 5px;
        margin-bottom: 10px;
        font-size:10px;
    
`
export const Para = styled.p`
    width: 80%;
    margin: 10px auto;
    color: gray;
    font-size:15px;
button{
    border: none;
    color: #343434;
    cursor: pointer;
}

`
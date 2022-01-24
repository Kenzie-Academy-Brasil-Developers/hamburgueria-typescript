import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 10px auto;
    
    ul{
        max-width: 1000px;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px auto;
    }
    li{
        border : 1px solid #818181;
        margin: 10px auto; 
        list-style: none;
        display: flex;
        flex-direction: column;

        button{
            margin: 10px auto;

        }
    }
    
`
export const Imagem = styled.img`
    margin: 10px auto;
    width:250px;
    height: 190px;
    background-color: rgba(51, 51, 51, 0.5);
`
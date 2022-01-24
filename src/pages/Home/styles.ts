import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0px auto;
    padding-top:4px;

    p{
        font-weight:700;
        font-size: 20px;

        strong{
            color: red;
        }
    }
    div{
        display: flex;
    }

    button{
        width: 70px;
        margin: 10px  2px;
        height: 25px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

`
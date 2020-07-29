import styled from 'styled-components'
import { DeleteForever } from '@styled-icons/material'

export const Wrapper = styled.div`

    padding: 50px 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    box-sizing: border-box;
    align-items: center;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ListWrapper = styled.div`
    width: 750px;
    height: 650px;
    margin-right: 45px;
    border-radius: 8px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);
    box-sizing: border-box;
    padding: 7px;
    overflow: auto;

`

export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 13px;
    margin: 5px 0px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 2px, solid, transparent;
    cursor: pointer;



    box-shadow:0 1px 1px rgba(0,0,0,0.25), 
              0 2px 2px rgba(0,0,0,0.20), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.05);
    p{
        margin-top: 10px;
        display: none;
        color: #565656;
    }
    h2{
        color: #484349;
    }

    &.selected{

        border: 2px solid #484349;
        background-color: white;
        h2{
            text-decoration: underline;
        }
        p{
            display: flex; 
        }
    }

`

export const FormWrapper = styled.div`

    margin: 25px;
    border-radius: 8px;
    padding: 25px;
    width: 450px;
    height: 500px;
    background-color: #F5F5F5;
    
    input{
        width: 100%;
        height: 35px;
        border: 0px;
        padding: 0 13px;
        margin-top: 19px;
    }
    textarea{
        width: 100%;
        height: 175px;
        border: 0px;
        padding: 0 13px;
        margin-top: 19px;
        resize: none;
        
    }
    h2{
        color: #484349;
        justify-self: auto;

    }
    p{
        margin: 3px;
        position: absolute;
        color: red;
        font-size: 14px;
    }
    
    box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);
    `


export const Button = styled.button`

    margin-top: 12px;
    background-color: #484349;
    color: #F7F0F0;
    border: transparent;
    border-radius: 8px;
    height: 35px;
    min-width: 100%;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;

`


export const DeleteButton = styled(DeleteForever)`

    align-self: flex-end;
    margin: 5px 10px;

    color: #56565655;

    &:hover{
        color: red; 
    }
`


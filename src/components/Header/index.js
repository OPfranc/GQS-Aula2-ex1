import React from 'react'
import { Wrapper } from './styles'


export default function Header({ todoCount }) {

    return (
        <Wrapper>
            <h1>To-Do List</h1>
            <p>{todoCount} To-Dos</p>
        </Wrapper>

    )
}
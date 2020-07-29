import React, { useState, useEffect } from 'react'
import GlobalStyles from './styles/Global'
import Header from './components/Header'

import { Wrapper, ListWrapper, FormWrapper, ListItem, Button, DeleteButton } from './styles'


function App() {

  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)

  const [newName, setNewName] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const [newNameError, setNewNameError] = useState(false)
  const [newDescriptionError, setNewDescripionError] = useState(false)


  // useEffect(() => {
  //   setTodos([
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 1 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 2 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 3 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 4 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 5 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 6 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 7 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 8 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 9 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 10 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 11 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 12 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 13 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 14 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 15 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 16 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 17 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 18 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 19 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 20 },
  //     { title: 'todo1', description: 'aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa', id: 21 }])
  // }, [])


  function newTodoNameHandler({ target: { value } }) {
    setNewNameError(false)
    setNewName(value)
  }
  function newTodoDescriptionHandler({ target: { value } }) {
    setNewDescripionError(false)
    setNewDescription(value)
  }
  function sendHandler() {

    if (newName !== '' && newDescription !== '') {

      const newTodo = {
        title: newName,
        description: newDescription,
        id: Math.random()
      }

      setTodos([...todos, newTodo])
      setNewName('')
      setNewDescription('')
      
    } else {
      setNewNameError(true)
      setNewDescripionError(true)
    }
  }

  function deleteHandler({ id }) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);

  }
  return (
    <>
      <GlobalStyles />
      <Header todoCount={todos.length} />


      <Wrapper>

        <FormWrapper>

          <h2>Criar novo To-Do</h2>

          <p>{newNameError ? 'Digite um nome' : '  '}</p>

          <input
            value={newName}
            placeholder={'Nome do To-Do'}
            onChange={newTodoNameHandler}
          />

          <p> {newDescriptionError ? 'Digite uma descrição' : ' '} </p>

          <textarea
            value={newDescription}
            placeholder={'Descrição'}
            onChange={newTodoDescriptionHandler}
          />

          <Button type="button" onClick={sendHandler} >Criar novo To-Do</Button>

        </FormWrapper>

        <ListWrapper>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              onClick={() => setSelectedTodo(todo)}
              className={todo.id === selectedTodo?.id ? 'selected' : ''}
            >
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>

              <DeleteButton
                size="25"
                onClick={() => deleteHandler(todo)}
              />
            </ListItem>
          ))}


        </ListWrapper>
      </Wrapper>

    </>
  );
}

export default App;

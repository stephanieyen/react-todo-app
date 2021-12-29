import React, { useState } from 'react'
import styled from 'styled-components'

// custom styling using styled-components!
const AppContainer = styled.div`
  margin: 40vh 30vw;
`
const TodoItemContainer = styled.div`
  &:hover > p {
    text-decoration: line-through;
    cursor: pointer;
  }
`

const TodoInput = styled.input`
  padding: 0.7em 0.5em;
  border: 1px solid black;
  border-radius: 4px;
`

// Function components
function TodoItem(props) {
  return (
    <TodoItemContainer onClick={props.deleteCallback}>
      <p>{props.name}</p>
    </TodoItemContainer>
  )
}

function TodoForm(props) {
  // Create a hook that will allow us to change/update the new todo item
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    // Prevent form from refreshing the page
    e.preventDefault()
    // Add the todo
    props.addCallback(todo)
    // Clear form
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput type="text" placeholder="Add a new todo!"
        value={todo} onChange={e => setTodo(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState(["learn React", "listen to The Beatles"])

  // Callback to remove a todo
  const deleteTodo = (index) => {
    // Copy current todos via spread syntax
    const newTodos = [...todos]
    // Remove one todo at the given index from newTodos via splice function
    newTodos.splice(index, 1)
    // Set todos to be the updated todos
    setTodos(newTodos)
  }

  // Callback to add a todo
  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  return (
    <AppContainer>
      <h1>Todos</h1>
      {todos.map((item, i) => <TodoItem 
        key={i}
        name={item}
        deleteCallback={deleteTodo}
      />)}
      <TodoForm addCallback={addTodo} />
    </AppContainer>
  );
}

export default App;

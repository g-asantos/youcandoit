import React, { useCallback, useRef, useState } from 'react';
import {Container, ToDoContainer, ListContainer} from './styles'
import {Form} from '@unform/web'
import {Input} from '../Input/index'
import { Button, createStyles, Icon,  makeStyles, Theme } from '@material-ui/core';
import TodoAdded from '../Todo/index'
import { FormHandles } from '@unform/core';




export interface ITodo{
  todo: string;
  done: boolean;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    color: '#FFF',
    marginLeft: 18
  },
  todo: {
    fontWeight: 'bold',
    fontSize: 18
  }
}))

export const List: React.FC = () => {
  const [todos, setToDos] = useState<ITodo[]>([])
  const classes = useStyles();
  const formRef = useRef<FormHandles>(null);



  const handleSubmit = useCallback((data: ITodo) => {

    const newData = {
      ...data,
      done: false
    }

    setToDos([...todos, newData])
    formRef.current?.reset()

  }, [todos])




  const handleDone = useCallback((data: ITodo) => {
    const newTodo = {
      ...data,
      done: true
    }

    const todoDone = todos.map(todo => todo === data ? newTodo : todo )
    setToDos(todoDone)
  }, [todos])


  const handleDelete = useCallback((data: ITodo) => {
    const todoDeleted = todos.filter(todo => todo !== data)
    setToDos(todoDeleted)
  }, [todos])


  return (
    <ListContainer>
    <Container>


    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="todo"/>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        type="submit"
      >
        Send
      </Button>
    </Form>
    </Container>

    <ToDoContainer>
    {todos.map(todo => (
      <TodoAdded key={todo.todo + Math.random()} todo={todo} handleDelete={handleDelete} handleDone={handleDone}/>
    ))}
    </ToDoContainer>
  </ListContainer>



  )
}

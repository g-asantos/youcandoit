
import React  from 'react'
import { Box, createStyles, IconButton, makeStyles, Theme } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { ITodo } from '../List';




interface IUniqueTodo{
  todo: ITodo;
  handleDone(data: ITodo):void;
  handleDelete(data: ITodo):void;

}

const useStyles = makeStyles((theme: Theme) => createStyles({
  todo: {
    fontWeight: 'bold',
    fontSize: 18
  },
  done: {
    fontWeight: 'bold',
    fontSize: 18,
    textDecoration: 'line-through'
  }
}))

const TodoAdded: React.FC<IUniqueTodo> = ({todo, handleDelete, handleDone}: IUniqueTodo) => {
  const classes = useStyles();



  return (
    <Box key={todo.todo + Math.random()} display="flex" justifyContent="center" alignItems="center">
      <div className={todo.done === true ? classes.done : classes.todo}>{todo.todo}</div>
      <IconButton onClick={() => handleDone(todo)} aria-label="done">
          <DoneIcon />
      </IconButton>
      <IconButton onClick={() => handleDelete(todo)} aria-label="delete">
          <DeleteIcon />
      </IconButton>


      </Box>
  )
}

export default TodoAdded;

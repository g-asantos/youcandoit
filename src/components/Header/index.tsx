import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Box, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import starIcon from '../../assets/icons8-star-48.png'


interface headerProps{
  text?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: '#3366ff',

  },
  title: {
    color: '#FFF',
    marginLeft: 10
  },
  appBar: {
    boxShadow: 'none',
    alignItems: "center",
    justifyContent: "center"
  }
}))


export const Header: React.FC<headerProps> = ({text}: headerProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" justifyContent="center" alignItems="center" height="76px"
    width="100%">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img src={starIcon} alt="A Star"/>
          <Typography variant="h5" className={classes.title}>
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

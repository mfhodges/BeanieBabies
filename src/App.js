import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    //padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: green[500],
      padding:"0px",
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.secondary.main,
      //padding:"30px",
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
      //padding:"30px",
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
      //padding:"30px",
    },
    
  },
}));

//<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />

function App() {
  const classes = useStyles();
  console.log(classes.root)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
      <Container style={{ backgroundColor: '#cfe8fc', height: '100vh' ,padding:'0px'}}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
          <Typography variant="subtitle1">{'down(xs):green '}</Typography>
          <Typography variant="subtitle1">{'up(sm): red'}</Typography>
          <Typography variant="subtitle1">{'up(md): blue'}</Typography>
          <Typography variant="subtitle1">{'up(lg): green'}</Typography>
      </Container>
      </Container>
    </React.Fragment>
  );
}

export default App;

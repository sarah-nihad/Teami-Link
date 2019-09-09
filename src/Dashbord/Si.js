
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import Home from './Home';
import { Navbar, Nav } from 'react-bootstrap';
import { Popover, Pane, Avatar } from 'evergreen-ui';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Company from './Company';
import User from './User';
import Change from './Change';
import Alladvertise from './Alladvertise';
import Alluser from './Alluser';
import { Redirect} from 'react-router-dom';
import Context from '../component/context';

import Alljob from './Alljob';

import Allcompany from './Allcompany';

const cookies = new Cookies();
function rendericon(props) {



  if (props.match.path === '/Alluser') {
    return (<Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic' /></Link>)
  }

  else if (props.match.path === '/Allcompany') {
    return (<Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic' /></Link>)
  }

  else if (props.match.path === '/Alladvertise') {
    return (<Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic' /></Link>)
  }
  else if (props.match.path === '/Change') {
    return (<Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic' /></Link>)
  }
}



const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,

    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes, theme } = this.props;

    return (
      <Context.Consumer>
        {ctx => {

          if (ctx.value.auth === true ){
          return (

            <div className={classes.root} >

              <CssBaseline />
              <AppBar position="fixed" className={classes.appBar} id='abr' >



                <Navbar expand="lg" id="navmain22">

                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Navbar.Brand >{rendericon(this.props)}</Navbar.Brand>

                  <Nav className="mr-auto">

                  </Nav>
                  <div id='sarahdash76h'>
                    <Link to='/'>
                      {/* <img src={require('../assets/img/poerd by.png')} id='poerdsrAA' alt='img' /> */}
                    </Link>
                    <div id='ss'>
                      <div id='p1' style={{ color: 'black' }}>Logout</div>
                      <Popover
                        content={
                          <Pane
                            width={200}
                            height={100}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                          >
                            <button id='out' onClick={() => {
                              cookies.remove("token_admin");
                              window.location.href = "/"
                            }}>Log out</button>
                          </Pane>
                        }
                      >
                        <Avatar
                          src={require('../assets/img/d.jpg')}
                          name=""
                          size={30}
                          id='hh'
                        />
                      </Popover>

                    </div>


                  </div>

                </Navbar>



              </AppBar>

              <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
                <Hidden smUp implementation="css">
                  <Drawer
                    container={this.props.container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    classes={{
                      paper: classes.drawerPaper,
                    }}

                  >
                    <div id='jj' >
                      <div ></div>
                      <div className={classes.toolbar} />

                      <Link to='/Alluser'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>All user</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>

                      <Link to='/Allcompany'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}> Allcompany</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>
                      <Link to='/Alljob'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}> All job.</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>



                      <Link to='/Alladvertise'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>All advertise</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>




                    </div>
                  </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                  <Drawer
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open

                  >
                    <div id='jj' >

                      <div className={classes.toolbar} />

                      {/* <Link to='/Discountuser'>
                  <List>
                    <ListItem button >
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>{<Person />}</ListItemIcon>
                      <ListItemText><span style={{ color: 'white', fontWeight: 'bold' }}>Users</span></ListItemText>
                    </ListItem>
                  </List>
                </Link> */}
                      <Link to='/Alluser'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>All user</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>
                      <Link to='/Allcompany'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}> All company</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>

                      <Link to='/Alljob'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>All job</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>





                      <Link to='/Alladvertise'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>All advertise</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>


                      <Link to='/Change'>
                        <List style={{ padding: 0 }}>

                          <ListItem button>

                            <ListItemText ><span style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Change Password</span></ListItemText>
                          </ListItem>

                        </List>
                      </Link>



                    </div>
                  </Drawer>
                </Hidden>

              </nav>

              <main className={classes.content}>

                <div className={classes.toolbar} />
                {renderPage(this.props)}

              </main>
            </div>

          )
          }
          else if(ctx.value.auth === false)
          {
         
              return(
                <Redirect to="/"></Redirect>
                  )
      
          }
          else{
            return (
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
         wating
            </div>
            )
          }
        }
        }
      </Context.Consumer>
    )
  }

}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,

  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const renderPage = (props) => {
  if (props.match.path === '/Home') {
    return (<Home />)
  }
  if (props.match.path === '/Alljob') {
    return (<Alljob />)
  }
  // else if (props.match.path === '/Addrecomnd') {
  //   return (<Addrecomnd />)


  else if (props.match.path === '/Alluser') {
    return (<Alluser />)
  }


  else if (props.match.path === '/Allcompany') {
    return (<Allcompany />)
  }


  else if (props.match.path === '/Alladvertise') {
    return (<Alladvertise />)
  }
  else if (props.match.path === '/Company') {
    return (<Company />)
  }
  else if (props.match.path === '/User') {
    return (<User />)
  }
  else if (props.match.path === '/Change') {
    return (<Change />)
  }
}
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);




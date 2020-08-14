import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import MenuDrawer from "./Menu";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Menu, Phone, Facebook, Instagram} from '@material-ui/icons';
import { Grid } from "@material-ui/core";
import {darkPurple, white, greenColor} from "./../../../GlobalStyles/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: "none",
       },
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
      backgroundColor: `${darkPurple}`,
      display: "flex",
      justifyContent: "space-between",
    //   border: "1px solid white"
  },
  menu: {
    //   border: "1px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "20%",
      [theme.breakpoints.down('sm')]: {
        display: "none",
       },
  },
  linkContainer: {
    //   border: "1px solid orange",
      display: "flex",
      justifyContent: "space-between",
      width: "50%",
      [theme.breakpoints.down('sm')]: {
        justifyContent: "center",
       },
  },
  link: {
      "&:hover": {
          color: `${greenColor}`,
      },
    [theme.breakpoints.down('sm')]: {
       display: "none",
      },
  },
  home: {
      border: `1px solid ${white}`,
      height: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: ".5rem",
     
  },
  order: {
      border: `1.2px solid ${white}`,
      width: "10%",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down('xs')]: {
        display: "none",
       },
  },
  orderBtn: {
    color: `${white}`,
    textAlign: "center",
   
  },
  a: {
      textDecoration: "none",
      color:`${white}`,
  },
  mobileIcons: {
    //   border: "1px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "20%",
      [theme.breakpoints.up('sm')]: {
        display: "none",
       },
  },
}));

const Nav = (props) => {
  const classes = useStyles();
const [open, setOpen] = useState(false);

const toggleMenu = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleMenu(true)}>
            <Menu />
        </IconButton>
        <Grid className={classes.menu}>
       
        <Phone/>
            <a className={classes.a} href="tel:1-707-590-5355">707 590 5355</a>
        <Facebook/>
        <Instagram/>
        </Grid >
         <Grid className={classes.linkContainer}>
          <Button className={classes.link} component={Link} to="/services" color="inherit">Services</Button>
          <Button className={classes.link} component={Link} to="/about" color="inherit">About</Button>
          <Grid className={classes.home} onClick={() => props.history.push("/")}>ZnChef <br/> Catering</Grid>
          <Button className={classes.link} component={Link} to="/gallery" color="inherit">Gallery</Button>
          <Button className={classes.link} component={Link} to="/contact" color="inherit">Contact</Button>
          </Grid>
          <Grid className={classes.order}>
              <Button className={classes.orderBtn}>
                  Order
              </Button>
          </Grid>
          <Grid className={classes.mobileIcons}>
          <Facebook/>
          {/* <a className={classes.a} href="tel:1-707-590-5355"><Phone/></a> */}
       <Instagram/>
       </Grid >
        </Toolbar>
      </AppBar>
      <MenuDrawer toggleMenu={toggleMenu} open={open}/>
    </div>
  );
}
 export default withRouter(Nav);
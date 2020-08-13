import React from "react";
import {withRouter} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from "./../../assests/images/dylan-nolte--D09rH5sTw4-unsplash.jpg";
import {darkPurple, white, greenColor} from "./../../GlobalStyles/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundImage: 'url(' + HomeImage + ')',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      zIndex: 1
    },
    home: {
        border: `3px solid ${greenColor}`,
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: ".5rem",
        width: "100%",
        color: `${white}`,
        fontSize: "3rem",
       
    },
  }));
const Jumbotron = (props) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <ScrollAnimation animateIn="slideInUp" >
            <Grid className={classes.home} onClick={() => props.history.push("/")}>ZnChef <br/> Catering</Grid>
            </ScrollAnimation>
        </Grid>
    )
};

export default withRouter(Jumbotron);
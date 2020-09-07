import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, } from "@material-ui/core";
import {transparentPurple, greenColor, white, darkPurple, transparentLightPurple} from "./../../GlobalStyles/styles";
import CorporateCateringPic from "./../../assests/images/charcuterieboard.jpg";
import VeganMealPrep from "./../../assests/images/isrealicuscus.jpg";
import SpecialEventsPic from "./../../assests/images/specialevents.jpg";
import PrivateChef from "./../../assests/images/fresh_pasta.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        border: "1px solid black",
        backgroundColor: "white",
        zIndex: 2,
        marginTop: "5rem",
        [theme.breakpoints.down('sm')]: {
            padding: "0 4rem",
        },
    },
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        border: "3px solid orange", 
        margin: "0 auto",
        [theme.breakpoints.down('lg')]: {
            border: "1px solid red"
        },
        [theme.breakpoints.down('md')]: {
            border: "1px solid limegreen"
        },
        [theme.breakpoints.down('sm')]: {
            // padding: "0 4rem",
            border: "2px solid green"
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            border: "1px solid orange"
        },
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
        width: "40%",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        position: "relative",
       [theme.breakpoints.down('xs')]: {
            width: "100%",
            // border: "2px solid red",
        },
    },
    title: {
        position: "absolute",
        backgroundColor: `${transparentPurple}`,
        // border: "1px solid hotpink",
        bottom: 69,
        width: "100%",
        height: 67,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
    },
    },
    h1: {
        color: `${white}`,
        // border: "1px solid green",
        fontSize: 18,
        fontWeight: 800,
    },
    imgContainer: {
        width: "100%",
        height: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
    },
    img: {
        width: "100%",
        height: 403,
        margin: "0 auto",
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        background: "#ffffff99",
        color: `${darkPurple}`, 
        width: "93.7%",
        transition: ".5s ease",
        opacity: 0,
        fontSize: "20px",
        padding: "20px",
        textAlign: "center",
        height: 362.7,
        // border: "1px solid green",
        "&:hover": {
            opacity: .9,
        }
      },
      overlayh1: {
        color: `${darkPurple}`,
    },
  }));

  const data = [
    {
        title: "Special Events",
        image:  `${SpecialEventsPic}`,
        text: "",
        link: "/services"
    },
    {
        title: "Corporate Catering",
        image: `${CorporateCateringPic}`,
        text: "",
        link: "/services"
    },
    {
        title: "Private Chef",
        image: `${PrivateChef}`,
        text: "",
        link: "/services"
    },
    {
        title: "Vegan Meal Prep",
        image: `${VeganMealPrep}`,
        text: "",
        link: "/services"
    },
  ]
const Services = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
                    <Grid className={classes.wrapper}>
            {data.map((item) => (
                <ScrollAnimation className={classes.container} key={item.title}  animateIn="fadeIn" duration="2">
                        <Grid className={classes.imgContainer}>
                            <img className={classes.img} src={`${item.image}`} alt={item.title}/>
                        </Grid>
                        <Grid className={classes.title}>
                            <Typography className={classes.h1}>{item.title}</Typography>
                        </Grid>
                        {/* <Grid className={classes.overlay}>
                            <Typography className={`${classes.h1} ${classes.overlayh1}`}>{item.title}</Typography>

                    {/* </Grid> */}
                </ScrollAnimation>
            ))}
            </Grid>
        </Grid>
    )
};

export default Services;
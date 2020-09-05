import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, } from "@material-ui/core";
import {transparentPurple, greenColor, white, darkPurple} from "./../../GlobalStyles/styles";
import CorporateCateringPic from "./../../assests/images/charcuterieboard.jpg";
import VeganMealPrep from "./../../assests/images/isrealicuscus.jpg";
import SpecialEventsPic from "./../../assests/images/specialevents.jpg";
import PrivateChef from "./../../assests/images/fresh_pasta.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      
    //   justifyContent: "center",
    //   alignItems: "center",
    //  flexDirection: "column",
     width: "100%",
    //  border: "1px solid orange",
    //  marginTop: "4rem",
     boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
    //  height: "auto",
    //  padding: "0 2.5rem",
    marginTop: "5rem",
    [theme.breakpoints.down('sm')]: {
        padding: "0 4rem",
    },
    },
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        // border: "1px solid orange",
        [theme.breakpoints.down('sm')]: {
            padding: "0 4rem",
        },
    },
    heading: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        alignSelf: "flex-start",
        padding: "0 1.5rem",
        alignSelf: "flex-start"
    },
    tagline: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid teal",
        [theme.breakpoints.down('xs')]: {
            width: 350,
            justifyContent: "flex-start",
        },
    },
    line: {
        width: 30,
        border: `.2px solid ${greenColor}`,
        backgroundColor: `${greenColor}`,
        marginRight: ".5rem"
    },
    heading1: {
        fontSize: "2.75rem",
        lineHeight: 1.4,
        fontWeight: "bold",
        maxWidth: 520,
        marginBottom: "2.25rem",
        color: `${darkPurple}`,
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    //    flexDirection: "column",
    //    border: "2px solid red",
       width: "45%",
       margin: "0 auto",
       boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
       position: "relative",
       [theme.breakpoints.down('xs')]: {
            padding: "0 2rem",
    },
    },
    title: {
        position: "absolute",
        backgroundColor: `${transparentPurple}`,
        // border: "1px solid black",
        bottom: 69,
        width: 625,
        height: 67,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: 425,
           
    },
    },
    h1: {
        color: `${white}`,
        // border: "1px solid green",
        fontSize: 18,
        fontWeight: 800,
    },
    img: {
        width: 629,
        height: 403,
        [theme.breakpoints.down('xs')]: {
            width: 425,
           
    },
    }
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
             {/* <Grid className={classes.heading}>
                <Grid className={classes.tagline}>
                    <div className={classes.line}></div>
                    <Typography component="h4" className={classes.h4}>Quick tagline for services section</Typography>
                </Grid>
                <Typography component="h1" className={classes.heading1}>Checkout out our services</Typography>
            </Grid> */}
                    <Grid className={classes.wrapper}>
            {data.map((item) => (
                <ScrollAnimation style={{ margin: "1rem"}} animateIn="fadeIn" duration="2">
                <Grid className={classes.container}>
                    <img className={classes.img} src={`${item.image}`} alt={item.title}/>
                    <Grid className={classes.title}>
                        <Typography className={classes.h1}>{item.title}</Typography>
                    </Grid>
                </Grid>
                </ScrollAnimation>
            ))}
            </Grid>
        </Grid>
    )
};

export default Services;
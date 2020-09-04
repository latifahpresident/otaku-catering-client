import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Typography, } from "@material-ui/core";
import {darkPurple, greenColor,} from "./../../GlobalStyles/styles";
import OctopusImage from "./../../assests/images/octopus.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      boxSizing: "border-box",
      padding: "42px 0 36px 0",
      width: "100%",
      position: "relative",
      [theme.breakpoints.down('lg')]: {
        // border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: {
        // border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('sm')]: {
        // border: "2px solid teal",
       
       },
      
    },
    container: {
        display: "flex",
        alignItems: "center",
        width: "80%",
        flexDirection: "column",
        // border: "1px solid red",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            // border: "1px solid silver",

        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            // border: "1px solid silver",
        },
    },
    content: {
        //  border: "2px solid brown",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,       
        // border: "1px solid blue",
        [theme.breakpoints.down('md')]: {
            padding: "0 2.625rem",
            // border: "2px solid black",
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    wrapper: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        // border: "2px solid hotpink",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
        },
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        alignSelf: "flex-start",
        padding: "0 1.5rem",
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
    h4: {
        color: `${greenColor}`,
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17
        },
        
      
    },
    h1: {
        fontSize: "2.75rem",
        lineHeight: 1.4,
        fontWeight: "bold",
        maxWidth: 520,
        marginBottom: "2.25rem",
        color: `${darkPurple}`,
        [theme.breakpoints.down('sm')]: {
            fontSize: 35
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
            alignSelf: "flex-start"
        },
    },
    p: {
        fontSize: "1.125rem",
        marginBottom: "1rem",
        fontWeight: 400,
        color: `${darkPurple}`, 
        textAlign: "justify",
        lineHeight: 1.5,
        padding: "0 1.5rem",
        // border: "1px solid red",
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    background: {
        position: "absolute",
        top: 0,
        right: 0,
        background: "#FAFAFA",
        left: "50%",
        marginLeft: -235,
        zIndex: 1,
        // border: "3px solid orange",
        height: 538,
        width: 1075,
        [theme.breakpoints.down('sm')]: {
            height: 800,
        },
    },
    img: {
        // border: "1px solid hotpink",
        backgroundImage: 'url(' + OctopusImage + ')',
        height: 450,
        width: "70%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        marginRight: "3rem",
        borderRadius: 3,
        [theme.breakpoints.down('md')]: {
            marginRight: "5rem",
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "94%",
            margin: "1rem auto 0 auto",
            height: 400,
        },
    },
  }));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.background}></Grid>
            <Grid className={classes.content}>
                <Grid className={classes.wrapper}>
                    <ScrollAnimation animateIn="slideInLeft" className={classes.container}>
                        <Grid className={classes.title}>
                            <Grid className={classes.tagline}>
                                <div className={classes.line}></div>
                                <Typography component="h4" className={classes.h4}>Quick tagline for about section</Typography>
                            </Grid>
                            <Typography component="h1" className={classes.h1}>This will be the, <br/> header section</Typography>
                        </Grid>
                        <Typography component="p" className={classes.p}>
                            Lorem ipsum dolor sit amet, consectetur <strong>ZnChef Catering</strong>. Morbi tempus dignissim leo, ut <strong>handmade</strong> nibh gravida finibus. Vestibulum vel tincidunt est. Maecenas ac elit sit amet metus malesuada efficitur. Ut vehicula efficitur elit ut euismod.
                        </Typography>
                        <Typography component="p" className={classes.p} style={{marginBottom: 0}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus <strong>fresh ingredients</strong>, ut lacinia nibh gravida finibus. 
                            Vestibulum vel tincidunt est. 
                        </Typography>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn="slideInRight" className={classes.img}></ScrollAnimation>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default About;
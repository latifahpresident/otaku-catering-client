import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Typography, } from "@material-ui/core";
import {darkPurple, white, greenColor} from "./../../GlobalStyles/styles";
import OctopusImage from "./../../assests/images/octopus.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
    //   border: "1px solid blue",
      [theme.breakpoints.down('xs')]: {
        flexDirection: "column",
        width: "100%",
       },
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        flexDirection: "column",
        // border: "1px solid red",
        [theme.breakpoints.down('xs')]: {
            margin: "0 auto",
            padding: "2.625rem 0",
            width: "100%",
        },
    },
    content: {
        // border: "2px solid brown"
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
        fontSize: 20
    },
    h1: {
        fontSize: "2.75rem",
        lineHeight: 1.4,
        fontWeight: "bold",
        maxWidth: 520,
        marginBottom: "2.25rem",
        color: `${darkPurple}`,
    },
    p: {
        fontSize: "1.125rem",
        marginBottom: "1rem",
        fontWeight: 400,
        color: `${darkPurple}`, 
        textAlign: "justify",
        lineHeight: 1.5,
        padding: "0 1.5rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".8rem"
        },
    },
    img: {
        // border: "1px solid hotpink",
        backgroundImage: 'url(' + OctopusImage + ')',
        height: 450,
        width: 735,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            width: 350,
        },
    },
  }));
const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ScrollAnimation animateIn="slideInLeft">
                <Grid className={classes.container}>
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
                </Grid>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" >
                       <Grid className={classes.img}></Grid>                
            </ScrollAnimation>
        </div>
    )
};

export default About;
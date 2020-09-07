import React from "react";
import Slider from "react-slick";
import {withRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Grid, Typography, } from "@material-ui/core";
import {greenColor, darkPurple, transparentLightPurple} from "./../../GlobalStyles/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import "./../../App.css";
import charcuterieboard from "./../../assests/images/charcuterieboard.jpg";
import pasta from "./../../assests/images/fresh_pasta.jpg";
import searedsalmon from "./../../assests/images/searedkingtrumpetandpeas.jpg";
import AjoBlanco from "./../../assests/images/ajoblanco.jpeg"; 
import BuffuloColiflowerPoboy from "./../../assests/images/buffulocoliflowerpoboy.jpeg"; 
import CoconutDalMakhani from "./../../assests/images/coconutdalmakhani.jpeg"; 
import SkunaBaySalmon from "./../../assests/images/skunabaysalmon.jpeg"; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     marginTop: "4rem",
     width: "100%",
     border: "1px solid orange",
     [theme.breakpoints.down('lg')]: {
        border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: { //ipad pro
        border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('sm')]: {
        border: "2px solid teal", // ipad
       marginBottom: "1rem",
       },
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
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
    carousel: {
        // border: "2px solid black",
        width: "100%",
        margin: "0 auto",
        marginTop: "1.5rem",
        paddingLeft: "1.5rem",
        // display: "flex",
        // justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            // width: "87%",
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            // width: "87%",
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: "1rem",
            // width: "87%",
        },
    },
    container: {
        width: "70%",
        maxWidth: "100%",
    //    border: "2px solid orange",
       position: "relative",
       [theme.breakpoints.down('md')]: {
           width: "90%",
           maxWidth: "90%",
    },
       [theme.breakpoints.down('sm')]: {
        width: "100%",
        maxWidth: "100%",
        
    },
      },
      media: {
        height: 465,
        width: "90%",
        [theme.breakpoints.down('md')]: {
            // border: "3px solid blue",
            width: "100%",
            marginRight: "1rem",
        },
        // [theme.breakpoints.down('sm')]: {
        //     width: "91.5%",
        //     // border: "3px solid blue",
        // },
        [theme.breakpoints.down('xs')]: {
            width: "91.5%",
            // border: "3px solid blue",
        },
      },
      overlay: {
        position: "absolute",
        bottom: 0,
        background: "rgb(0, 0, 0)",
        // background: "rgba(0, 0, 0, 0.5)", /* Black see-through */
        background: `${transparentLightPurple}`,
        color: "#f1f1f1", 
        width: "100%",
        transition: ".5s ease",
        opacity: 1,
        color: "white",
        fontSize: "20px",
        padding: "20px",
        textAlign: "center",
        height: 465,
        ":hover": {
            opacity: 1,
        }
      }
  }));

  const data = [
      {
          image: `${CoconutDalMakhani}`,
          title: "Coconut Dal Makhani",
      },
      {
        image: `${SkunaBaySalmon}`,
        title: "Skuna Bay Salmon",
    },
    {
        image:`${searedsalmon}`,
        title: "seared salmon",
    },
    {
        image: `${AjoBlanco}`,
        title: "Ajo Blanco",
    },
    {
        image: `${BuffuloColiflowerPoboy}`,
        title: "Buffulo Colliflower Po'boy",
    },
    {
        image: `${pasta}`,
        title: "charcuterieboard",
    },
    {
        image: `${charcuterieboard}`,
        title: "Charcuterie Board",
    },
  ]

const MultiItemCarousel = (props) => {
    const classes = useStyles();
  

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="slick-arrow slick-prev"
            onClick={onClick}
          />
        );
      };

      function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="slick-arrow slick-next"
            onClick={onClick}
          />
        );
      };

      const getSlideNumber = () => {
        // if (isWidthUp("xl", props.width)) {
        //   return 5;
        // }
    
        if (isWidthUp("lg", props.width)) {
          return 3;
        }
    
        if (isWidthUp("md", props.width)) {
            console.log("props.width", props.width)
          return 3;
        }
        if (isWidthUp("sm", props.width)) {
          return 1;
        }
        return 1;
      };

     
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlideNumber(),
    slidesToScroll: getSlideNumber(),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

    return (
 
        <div className={classes.root}>
              <Grid className={classes.title}>
                            <Grid className={classes.tagline}>
                                <div className={classes.line}></div>
                                <Typography component="h4" className={classes.h4}>Event gallery</Typography>
                            </Grid>
                            <Typography component="h1" className={classes.h1}>Visualize the experience</Typography>
                </Grid>
                <ScrollAnimation animateIn="slideInUp" className={classes.carousel}>
                    <Slider {...settings} >
                        {data.map((item) => (
                            <Card key={item.title} className={classes.container} style={{ marginRight: "2rem"}}>
                            <CardMedia
                                className={classes.media}
                                image={item.image}
                                title={item.title}
                            />
                        </Card>
                        ))}
                    </Slider>
                </ScrollAnimation>
        </div>
    )
};

export default withRouter(withWidth()(MultiItemCarousel));
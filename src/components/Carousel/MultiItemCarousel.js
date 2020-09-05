import React from "react";
import Slider from "react-slick";
import {withRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
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
    //  border: "1px solid orange",
     [theme.breakpoints.down('lg')]: {
        // border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: {
        // border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('sm')]: {
        // border: "2px solid teal",
       marginBottom: "4rem",
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
    column: {
        height: 75,
        width: 25,
        border: "1px solid black"
    },
    arrow: {
        color: `${greenColor}`,
        display: "block",
        border: "1px solid green"
    },
    carousel: {
        // border: "1px solid limegreen",
        width: "100%",
        margin: "0 auto",
        marginTop: "1.5rem",
        paddingLeft: "5rem",
        // display: "flex",
        // justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "2rem",
            // width: "87%",
        },
    },
    container: {
        maxWidth: 370,
       width: 370,
       
    //    marginRight: "4rem",
       position: "relative",
       [theme.breakpoints.down('md')]: {
        // marginRight: "1rem",
        // width: 200,
        maxWidth: 330,
      width: 330
        // border: "3px solid green",
        
    },
       [theme.breakpoints.down('sm')]: {
        maxWidth: 340,
        width: 340
        // border: "3px solid green",
        
    },
      },
      media: {
        height: 465,
        [theme.breakpoints.down('sm')]: {
            marginRight: "1rem",
            width: "100%",
          
            // border: "3px solid blue",
            
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: "1rem",
            width: "100%",
          
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
        const { className, style, onClick } = props;
        return (
          <div
            className="slick-arrow slick-prev"
            // style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      };

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="slick-arrow slick-next"
            // style={{ ...style, display: "block", background: "green" }}
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
  console.log("settings slides to show", settings.slidesToShow)
  console.log("settings speed", settings.speed)
  console.log("width", props.width)

    return (
 
        <div className={classes.root}>
              <Grid className={classes.title}>
                            <Grid className={classes.tagline}>
                                <div className={classes.line}></div>
                                <Typography component="h4" className={classes.h4}>Event gallery</Typography>
                            </Grid>
                            <Typography component="h1" className={classes.h1}>Visualize the experience</Typography>
                </Grid>
                <Grid className={classes.carousel}>
        <Slider {...settings} >
            {data.map((item) => (
                 <Card key={item.title} className={classes.container} style={{ marginRight: "2rem"}}>
                 {/* <CardActionArea> */}
                   <CardMedia
                     className={classes.media}
                     image={item.image}
                     title={item.title}
                   />
                 
                 {/* </CardActionArea> */}
               {/* <div className={classes.overlay}></div> */}
               </Card>
            ))}
          {/* <div >
            <h3>item 1</h3>
          </div>
          <div >
            <h3>item 2</h3>
          </div>
          <div >
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
        </Grid>
        </div>
    )
};

export default withRouter(withWidth()(MultiItemCarousel));
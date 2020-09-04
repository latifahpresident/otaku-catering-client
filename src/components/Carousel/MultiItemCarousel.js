import React from "react";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     flexDirection: "column",
     width: "100%",
     border: "1px solid orange",
     margin: "0 auto",
     height: "auto",
    //  padding: "0 2.5rem",
     overflow: "hidden",
    },
    column: {
        height: 75,
        width: 75,
    }
  }));

const MultiItemCarousel = () => {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <Grid>
             <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className={classes.column}>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
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
          </div>
        </Slider>
        </Grid>
    )
};

export default MultiItemCarousel;
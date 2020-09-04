import React from "react";
import Jumbotron from "./../../components/Jumbotron/Jumbotron";
import { makeStyles } from '@material-ui/core/styles';
import About from "./About";
import MultiItemCarousel from "./../../components/Carousel/MultiItemCarousel";
import Services from "./Services";

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
  }));

const Home = () => {
    const classes = useStyles();

    return (
        <div >
            <Jumbotron/>
            <div className={classes.root}>
                <About/>
                {/* <MultiItemCarousel/> */}
                <Services/>
            </div>
        </div>
    )
};

export default Home;
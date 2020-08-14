import React from "react";
import Jumbotron from "./../../components/Jumbotron/Jumbotron";
import { makeStyles } from '@material-ui/core/styles';
import About from "./About";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     flexDirection: "column",
     width: "95%",
     border: "1px solid orange",
     margin: "2rem auto 0 auto",
     height: "auto",
    //  padding: "0 2.5rem",
    },
  }));
const Home = () => {
    const classes = useStyles();

    return (
        <div >
            <Jumbotron/>
            <div className={classes.root}>
                <About/>
                <div>next section</div>
            </div>
        </div>
    )
};

export default Home;
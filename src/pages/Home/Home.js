import React from "react";
import Jumbotron from "./../../components/Jumbotron/Jumbotron";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     flexDirection: "column"
    },
  }));
const Home = () => {
    const classes = useStyles();
    return (
        <div >
            <Jumbotron/>
            <div className={classes.root}>
                break
            </div>
        </div>
    )
};

export default Home;
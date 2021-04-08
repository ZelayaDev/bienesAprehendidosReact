import React from "react";
import { CircularProgress, makeStyles, Backdrop } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const BackdropSpinner = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={!isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropSpinner;

import React from "react";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      width: "39ch",
      "&:focus": {
        width: "20ch",
      },
    },
    position: "absolute",
    overflow: "auto",
    zIndex: "1",
    top: "100%",
    left: 0,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItem: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    maxHeight: "250px",
    overflow: "auto",
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      width: "39ch",
      "&:focus": {
        width: "20ch",
      },
    },
    position: "absolute",
    overflow: "auto",
    zIndex: "1",
    top: "100%",
    left: 0,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItem: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    maxHeight: "280px",
    overflow: "auto",
  },
}));

export const Searchfield = ({ ...otherProps }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Presione Enter para buscar ..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        {...otherProps}
      />
    </div>
  );
};

export const ContentBox = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.card}>{children}</Card>;
};

export const ContentCard = ({ children }) => {
  const classes = useStyles();
  return <CardContent className={classes.cardContent}>{children}</CardContent>;
};

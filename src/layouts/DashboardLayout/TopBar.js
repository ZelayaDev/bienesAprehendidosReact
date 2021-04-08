import React, { useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";
import { UserContext } from "../../context/user/UserContext";
import { logout } from "../../functions/utils/utils";
import logo from "../../assets/escudo_actual.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
  image: {
    width: "1.9rem",
  },
  title: {
    display: "block",
    marginLeft: "1rem",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={5} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src={logo} className={classes.image} />
        </RouterLink>
        <RouterLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            style={{ fontFamily: "Audiowide", fontWeight: "cursive" }}
          >
            Aeronaval
          </Typography>
        </RouterLink>

        <Box flexGrow={1} />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <IconButton color="inherit" onClick={() => logout(history, setUser)}>
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;

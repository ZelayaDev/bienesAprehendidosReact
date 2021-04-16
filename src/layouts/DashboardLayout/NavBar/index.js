import React, { useEffect, useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Search as SearchIcon,
  Plus as PlusIcon,
} from "react-feather";
import NavItem from "./NavItem";
import { UserContext } from "../../../context/user/UserContext";

const itemsTop = [
  {
    href: "/",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/ingreso",
    icon: PlusIcon,
    title: "Ingreso",
  },
  {
    href: "/buscar",
    icon: SearchIcon,
    title: "Buscar",
  },
];

const itemsBottom = [
  {
    href: "/configuracion",
    icon: SettingsIcon,
    title: "Configuraciones",
  },
  {
    href: "/perfil",
    icon: UserIcon,
    title: "Perfil de Cuenta",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} component={RouterLink} to="/" />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {`${user.nombre?.split(" ")[0]} ${user.apellido?.split(" ")[0]}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.permiso}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {itemsTop.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <div style={{ flex: 1 }}></div>
      <Divider />
      <Box p={2}>
        <List>
          {itemsBottom.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;

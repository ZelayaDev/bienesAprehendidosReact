import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabsColorVertical: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
    transition: "all 200ms ease-out",
  },
  tabsColorHorizontal: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    transition: "all 200ms ease-in-out",
  },
}));

export const PestanasVertical = ({ children, items }) => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        height: "100%",
        minWidth: "80px",
        flexGrow: 1,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        className={classes.tabs}
        indicatorColor="primary"
        scrollButtons="auto"
        textColor="primary"
        id="vertical-tab"
      >
        {items.map((item) => (
          <Tab
            label={item.label}
            style={{ marginRight: "2rem" }}
            onClick={() => history.push(item.ruta)}
            className={
              location.pathname === item.ruta ? classes.tabsColorVertical : ""
            }
          />
        ))}
      </Tabs>
      {children}
    </div>
  );
};

export const PestanasHorizontal = ({ items }) => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        id="horizontal-tab"
      >
        {items.map((item) => (
          <Tab
            label={item.label}
            onClick={() => history.push(item.ruta)}
            className={
              location.pathname === item.ruta ? classes.tabsColorHorizontal : ""
            }
          />
        ))}
      </Tabs>
    </>
  );
};

import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabsColor: {
    borderRight: `2px solid ${theme.palette.primary.main}`,
    transition: "all 200ms ease-in-out",
  },
}));

function VerticalTab({ children, items }) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        style={{ height: "100%" }}
        aria-label="Vertical tabs"
        className={classes.tabs}
        indicatorColor="primary"
        textColor="primary"
        aria-labelledby={`nav-tab-${location.pathname}`}
      >
        {items.map((item) => (
          <Tab
            label={item.label}
            onClick={() => history.push(item.ruta)}
            className={location.pathname === item.ruta ? classes.tabsColor : ""}
          />
        ))}
      </Tabs>
      {children}
    </div>
  );
}

export default VerticalTab;

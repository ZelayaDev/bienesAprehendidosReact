import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login.js";
import NotFoundPage from "./pages/404/404";
import Configuraciones from "./pages/Configuraciones/";

import { UserProvider } from "./context/user/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "moment/locale/es";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/configuracion" component={Configuraciones} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="*" component={NotFoundPage} />
          </Switch>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;

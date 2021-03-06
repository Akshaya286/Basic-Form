import React from "react";
import Sidebar from "../component/common/Sidebar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { mainLayoutStyle } from "service/helpers/Constants";
import Header from "../component/common/Header";
import DashboardComp from "component/Dashboard/DashboardComp";
export function MainLayout(props) {
  const outerTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1A4BA1",
      },
      secondary: {
        main: "#FBFBFB",
      },
    },
  });
  const classes = mainLayoutStyle();
  return (
    <>
      <Header />
      
      

      <ThemeProvider theme={outerTheme}>
        <div className={classes.root}>
          <Sidebar classes={classes} />
          <DashboardComp/>
        </div>
      </ThemeProvider>
    </>
  );
}

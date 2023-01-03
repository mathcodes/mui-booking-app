import React, { useState } from "react";
import "./App.css";
import { Button} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme, createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Home from "./pages/Home";
// import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";

const useStyles = makeStyles({
  button: {
    margin: 8,
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const { palette } = theme;
  const classes = useStyles();

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  const toggleColorTheme = () => {
    console.log('toggleColorTheme');
    const newPaletteType = palette.type === 'light' ? 'dark' : 'light';
    console.log('newPaletteType', newPaletteType);
    theme.palette.type = newPaletteType;
    console.log('theme.palette.type', theme.palette.type);
    console.log('theme', theme);
    console.log('theme.palette.type', theme.palette.type);
    console.log('theme', theme);
  };
 

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} className={classes.button} >

        <SearchAppBar />
        <Button
          onClick={toggleColorTheme}
          variant="contained"
          color={palette.type === 'light' ? 'secondary' : 'primary'}
        >
          {palette.type === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:id" element={<Tour />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

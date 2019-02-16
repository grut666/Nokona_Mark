import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './Redux/Components/Headers/NavBar'
import SubNavBar from './Redux/Components/Headers/SubNavBar'
import NokonaHeader from './Redux/Components/Headers/NokonaHeader'
import MainPage from './Redux/Components/MainPage/MainPage'
import './App.css';

class App extends Component {
  render() {
    const muiTheme = createMuiTheme();
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">

            <NokonaHeader/>
            <NavBar/>
            <SubNavBar/>
            <MainPage/>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

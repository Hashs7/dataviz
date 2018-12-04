import Landing from './components/Landing'
import React, { Component } from 'react';
import { theme } from './constantes';
import { ThemeProvider } from 'styled-components';


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Landing />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;

// bread & butter i think.. 

import React from 'react';
import HomePage from './HomePage'
import SignUp from './SignUp'
import Login from './Login'
// import PcasContainer from './PCA/PcasContainer'
import { BrowserRouter, Route } from 'react-router-dom'

// import PcaNavbar from './PCA/PcaNavbar'
class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                <Route exact path='/' component={HomePage} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />

           
                </BrowserRouter>
                
            </div>
        )
    };
};

export default App;
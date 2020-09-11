
import React from 'react';
import HomePage from './HomePage'
import SignUp from './SignUp'
import Login from './Login'
import ProfileHome from './ProfileHome'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {getCurrentUser} from './actions'
import CropInfoForm from './CropInfoForm';
import displayCrops from './displayCrops';


class App extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }


    render(){
        return (
            <div>
                <BrowserRouter>
                <Route exact path='/' component={HomePage} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/profilehome' component={ProfileHome} />
                <Route exact path='/addcrops' component={CropInfoForm} />
                <Route exact path='/mycrops' component={displayCrops} />
                </BrowserRouter>
                
            </div>
        )
    };

};
     
        export default connect(null, {getCurrentUser})(App);


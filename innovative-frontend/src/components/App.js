
import React from 'react';
import HomePage from './HomePage'
import SignUp from './SignUp'
import Login from './Login'
import ProfileHome from './ProfileHome'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {getCurrentUser, logOutUser} from './actions'
class App extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    conditionallyRenderNavigation() {
        console.log(this.props.logOutUser())
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                <Route exact path='/' component={HomePage} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/profilehome' component={ProfileHome} />
           
                </BrowserRouter>
                
            </div>
        )
    };

};
        // const mapStateToProps = state => {
        //     console.log(state)
        //     return {state}
           
        // }
        export default connect(null, {getCurrentUser, logOutUser})(App);

// export default connect(mapStateToProps, {getCurrentUser})(App);
// bread & butter i think.. 

import React, { component } from 'react';
import HomePage from './HomePage'

class App extends React.Component {
    render(){
        return (
            <div>
                App component
                <HomePage />
            </div>
        )
    };
};

export default App;
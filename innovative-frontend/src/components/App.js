// bread & butter i think.. 

import React, { component } from 'react';
import HomePage from './HomePage'
import PcasContainer from './PCA/PcasContainer'
// import PcaNavbar from './PCA/PcaNavbar'
class App extends React.Component {
    render(){
        return (
            <div>
                {/* <PcaNavbar /> <br></br> */}
                <HomePage />
                <PcasContainer />
            </div>
        )
    };
};

export default App;
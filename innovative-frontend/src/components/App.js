// bread & butter i think.. 

import React, { component } from 'react';
import HomePage from './HomePage'
// import PcaNavbar from './PCA/PcaNavbar'
class App extends React.Component {
    render(){
        return (
            <div>
                {/* <PcaNavbar /> <br></br> */}
                <HomePage />
            </div>
        )
    };
};

export default App;
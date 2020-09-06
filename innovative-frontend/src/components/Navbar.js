import React from 'react'; 

class Navbar extends React.Component {
    render () {
        return (
            <div className="ui menu">
            <div className="header item">
             Home
            </div>
            <a className="item" href=''>
              My Growers
            </a>
            <a className="item" href=''>
              Messages
            </a>
            <a className="item" href=''>
              Rec-Forms
            </a>
            <div className="right menu">
              <div className="header item"> 
                Logout
              </div>
            </div>
          </div>
        )
    }
}

export default Navbar;
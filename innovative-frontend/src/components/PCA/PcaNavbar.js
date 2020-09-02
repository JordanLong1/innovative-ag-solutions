import React from 'react'; 

class Navbar extends React.Component {
    render () {
        return (
            <div className="ui menu">
            <div className="header item">
             Home
            </div>
            <a className="item">
              My Growers
            </a>
            <a className="item">
              Messages
            </a>
            <a className="item">
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
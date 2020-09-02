import React from 'react'; 

class GrowerNavbar extends React.Component {
    render () {
        return (
            <div className="ui menu">
            <div className="header item">
             Home
            </div>
            <a className="item">
              My Crops
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

export default GrowerNavbar;
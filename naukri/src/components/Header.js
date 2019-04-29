import React from 'react'
import '../Header.css';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         currentstate:false
      }
    }
    
    logout=()=>
    {
        localStorage.removeItem('Currentuser');
        localStorage.setItem('isLoggedIn',false)
    }
    render()
    {

    return (

        
       
        <div>
            <nav className="navbar navbar-inverse background">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><a href="https://www.naukri.com/">Home</a></li>
                            <li><a href="https://www.naukri.com/">About Us</a></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in" ></span> Login</Link></li>
                            <li><Link to="/signup"><span className="glyphicon glyphicon-log-in" ></span> SignUp</Link></li>
                           <li><Link  to="/login" onClick={this.logout} >LogOut</Link></li>
                        </ul>

                    </div>
                </div>

            </nav>
        </div>
    )
    }
}
export default Header
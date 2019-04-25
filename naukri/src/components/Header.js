import React from 'react'
import '../Header.css';

function header() {
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
                            <li><a href="https://www.naukri.com/" ><span className="glyphicon glyphicon-log-in" ></span> Login</a></li>
                            <li><a href="https://www.naukri.com/"><span className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
                        </ul>

                    </div>
                </div>

            </nav>
        </div>
    )
}
export default header
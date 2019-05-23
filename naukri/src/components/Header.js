import React from 'react'
import '../Styles/Header.css';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            currentuser: localStorage.getItem('Currentuser'),
            usertype: localStorage.getItem('user_type'),
            signUp: true,
            signIn: true,
        }
    }

    logout = () => {
        localStorage.removeItem('Currentuser');
        localStorage.removeItem('user_type');
        localStorage.removeItem('job_id');
        localStorage.removeItem('Currentid');
        localStorage.removeItem('Phone_number');
        localStorage.removeItem('current_page');
        localStorage.removeItem('total_page');
        localStorage.setItem('isLoggedIn', "false")
        this.setState({
            signIn: true,
            signUp: true

        })
        this.props.history.push({
            state: {
                flag: false
            }
        })
    }

    componentDidMount() {
        if (this.state.isLoggedIn === "true") {
            this.setState({
                signIn: false,
                signUp: false
            })

        }
    }
    render() {

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
                                {this.state.signIn && <li><Link to="/login"><span className="glyphicon glyphicon-log-in" ></span> Login</Link></li>}
                                {this.state.signUp && <li><Link to="/signup"><span className="glyphicon glyphicon-user" ></span> SignUp</Link></li>}
                                {!this.state.signIn && this.state.usertype === "3" && <li><Link to="/postjobs"><span className="glyphicon glyphicon-plus" ></span>Add Jobs</Link></li>}
                                {!this.state.signIn&&this.state.usertype === "2" && <li><Link to='/show_applied'><span className="glyphicon glyphicon-plus" ></span>Show applied</Link></li>}
                                {!this.state.signIn&&this.state.usertype === "3" && <li><Link to='/get_applied'><span className="glyphicon glyphicon-plus" ></span>Applied Users</Link></li>}
                                {!this.state.signIn && <li><Link to={{
                                    pathname: '/', state: {
                                        flag: false
                                    }
                                }} onClick={this.logout} ><span className="glyphicon glyphicon-log-out" ></span>LogOut</Link></li>}
                            </ul>

                        </div>
                    </div>

                </nav>
                {!this.state.signIn && <h1>Welcome:{this.state.currentuser} to Naukri.com </h1>}
            </div>
        )
    }
}
export default Header
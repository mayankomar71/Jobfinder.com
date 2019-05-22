import React, { Component } from 'react'
import '../Styles/content.css'
import logo from '../images/company.png'
import HeaderComponent from '../../src/components/Header';
export class Showapplied extends Component {
    componentWillMount() {
        if (localStorage.getItem('Currentid')) {
            let userid = localStorage.getItem('Currentid');
            userid = userid.replace(/"/g, "");
            this.props.get_applyjob_user(userid);
        }
        this.setState({
            check_applied: this.props.apply,
            flag:false
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            check_applied: nextProps.apply,
            flag:false
        });
    }
    render() {
        const imagestyle = {
            height: "150px",
            width: "150px",
          }
          const background = {
            backgroundColor: "#f1f1f1",
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            marginBottom: '20px'
          }
        console.log(this.state.check_applied);
        return (
            <div>
                <HeaderComponent />
        {!this.state.flag &&this.state.check_applied.map((data, index) => {
            return (
              <div key={index} className="container-fluid ">
                <div className="row">
                  <div style={background} className=" col-sm-12">
                    <div className="col-sm-4">
                      <img style={imagestyle} src={logo} alt='data.company_name'></img>
                    </div>
                    <div className="card col-sm-8">
                      <h3>{data.job_designation}</h3>
                      <h3>{data.company_name}</h3>
                      <h3>{data.city}</h3>
                      <h4><i className="fa fa-rupee"></i> {data.salary} lakhs P.A</h4>
                        {(data.job_status === 1) ? <b><p style={{ 'color': 'orange' }}>Status: Applied</p></b> : null}
                        {(data.job_status === 2) ? <b><p style={{ 'color': 'green' }}>Status: Shortlisted</p></b> : null}
                        {(data.job_status === 3) ? <b><p style={{ 'color': 'red' }}>Status:rejected</p></b> : null}
      
                      
                    </div>
                  </div>
                </div>
              </div>
            )
      
        })}
        </div>)
    
}
}
export default Showapplied

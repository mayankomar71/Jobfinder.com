import React, { Component } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import '../Styles/content.css'
import logo from '../images/company.png'
import { withRouter } from "react-router-dom";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }
 
  alert() {
    const getAlert = () => (
      <SweetAlert
        success
        title="Successfully Applied for job"
        onConfirm={() => this.hideAlert()}
      >
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }
  handleClick = (ele, e) => {
    localStorage.setItem('job_id', ele._id);      
    console.log(ele)
    this.props.history.push(`/update/${JSON.stringify(ele)}`)


}

  hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
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

    const jobdata = this.props.data
    return jobdata.map((data, index) => {
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
                <h4><i className="fa fa-rupee"></i> {data.salary} lakhs p.a</h4>
                {(localStorage.getItem('user_type')==="3")&&<button onClick={(e) => this.handleClick(data, e)}  className="btn btn-success">Edit</button>}
                {(localStorage.getItem('user_type')==="2" || localStorage.getItem('user_type')===null)&&<button onClick={() => this.alert()} className="btn btn-success">Apply</button>}
               
                
              </div>
            </div>
          </div>
          {this.state.alert}
        </div>
      )

    })
  }
}
export default withRouter(Content);

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
        error
        title="Successfully Applied for job"
        onConfirm={() => this.hideAlert()}
      >
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }
  componentWillMount() {
    if (localStorage.getItem('Currentid')) {
        let user_id = localStorage.getItem('Currentid');
        user_id = user_id.replace(/"/g, "");
        this.props.applydata.get_applyjob(user_id);
    }
    this.setState({
        apply_data: this.props.applydata.apply
    })
}
  apply = (ele, e) => {
    const getAlert = () => (
      <SweetAlert
        success
        title="Successfully Applied for job"
        onConfirm={() => this.hideAlert()}
      >
      </SweetAlert>
    );
    if (localStorage.getItem('isLoggedIn') === 'false') {
      this.props.history.push('/login');
  }
  else
  {
    let user_id = localStorage.getItem('Currentid');
    user_id = user_id.replace(/"/g, "");
    let user_name = localStorage.getItem('Currentuser');
    user_name = user_name.replace(/"/g, "");
    let phone =parseInt(localStorage.getItem('Phone_number'))
    let job_id = ele._id;
    let job_designation = ele.job_designation;
    let salary = ele.salary;
    let company_name = ele.company_name;
    let location = ele.city;
    this.props.applydata.apply_job({ user_id, user_name, job_id, job_designation, salary, company_name, location,phone});
    this.props.applydata.get_applyjob(user_id);
   
    this.setState({
        apply_data: this.props.applydata.apply
    });
    

    this.setState({
      alert: getAlert()
    });

  }
  }
  applied = () => {
    const getAlert = () => (
      <SweetAlert
        error
        title="Already applied for job"
        onConfirm={() => this.hideAlert()}
      >
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
}
  componentWillReceiveProps(nextProps) {
    this.setState({
        apply_data: nextProps.applydata.apply,
    });
  
}

  handleClick = (ele, e) => {
    localStorage.setItem('job_id', ele._id);      
    this.props.history.push(`/update/${JSON.stringify(ele)}`)


}

  hideAlert() {
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
    // const jobdata1=jobdata.reverse();
    var applied_ids = [];
    this.state.apply_data.map((ele) => {
        return  applied_ids.push(ele.job_id);
    });
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
                <h4><i className="fa fa-rupee"></i> {data.salary} lakhs P.A</h4>
                {(localStorage.getItem('user_type') === '2' || localStorage.getItem('user_type') === null) ? (applied_ids.find((ele) => { return ele === data._id }) ? <button onClick={this.applied} className="btn btn-primary" type="button">Applied</button> : <button id={data._id} onClick={(e) => this.apply(data, e)} className="btn btn-success" type="button">Apply</button>) : <button id={data._id} onClick={(e) => this.handleClick(data, e)} className="btn btn-success" type="button">Edit</button>}

                
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

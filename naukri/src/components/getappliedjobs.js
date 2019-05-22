import React, { Component } from 'react'
import '../Styles/content.css'
import logo from '../images/company.png'
import HeaderComponent from '../../src/components/Header';
export class Getapplied extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 'applied'
        }
    }
    componentWillMount() {
        if (localStorage.getItem('Currentuser')) {
            let company_name = localStorage.getItem('Currentuser');
            company_name = company_name.replace(/"/g, "");
            this.props.get_applyjob_company(company_name);
        }
        this.setState({
            get_jobs: this.props.apply
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            get_jobs: nextProps.apply,
            flag: false,
            obj_id: ''
        });
    }
    edit = (e, ele) => {
        this.setState({
            flag: true,
            obj_id: ele._id
        }, () => { console.log(this.state.obj_id) });
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event, ele) => {
        event.preventDefault();
        this.setState({
            flag: false
        })
        let id = ele._id;
        let company_name = ele.company_name;
        let user_name = ele.user_name;
        let user_id = ele.user_id;
        let job_id = ele.job_id;
        let job_designation = ele.job_designation;
        let salary = ele.salary;
        let location = ele.city;
        let job_status = this.state.value
        this.props.update_apply({ id, company_name, user_name, user_id, job_id, job_designation, salary, location, job_status }, ele.company_name);
        this.setState({
            get_jobs: this.props.apply
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
        return (
            <div>
                <HeaderComponent />
        { this.state.get_jobs.map((data, index) => {
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
                        {(data.job_status === 3) ? <b><p style={{'color':'red'}}>Status:Rejected</p></b> : null}
                        {(data.job_status === 2) ? <b><p style={{'color':'green'}}>Status:Shortlisted</p></b> : null}
                        {(data.job_status === 1) ? <b><p style={{'color':'orange'}}>Status:Applied</p></b> : null}
                        {this.state.flag && (this.state.obj_id === data._id) ? (<form onSubmit={(event) => this.handleSubmit(event, data)}>
                            <label>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="applied">Applied</option>
                                    <option value="shortlisted">Shortlisted</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </label>
                            <input className="btn btn-success"type="submit" value="Submit" />
                        </form>) : null}
                        {(!this.state.flag || (this.state.obj_id !== data._id)) && <button className="btn btn-success" id={data._id} onClick={(e) => this.edit(e, data)}>Edit Job Status</button>}
                      
                    </div>
                  </div>
                </div>
              </div>
            )
      
        })}
        </div>)
    
}
}

export default Getapplied
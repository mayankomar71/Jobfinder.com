import React, { Component } from 'react'
import './content.css'

class Filters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            designation: '',
            company: ''

        }
      
    }
    handleChange=(event) =>{
        this.setState({ [event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
   
        event.preventDefault();
        
        const job_data = this.props.data_filter;
        if (this.state.location==='' && this.state.designation==='' && this.state.company==='') {
            var data=job_data.map((element)=>{
                return element;
            });
        }
        else {
            data=(job_data.filter((element) => {
                if (element['city'] === this.state.location && element.job_designation === this.state.designation && element.company_name === this.state.company) {
                    return true;
                }
                else if (element.city === this.state.location && element.job_designation === this.state.designation && this.state.company === '') {
                    return true;
                }
                else if (this.state.location === '' && element.job_designation === this.state.designation && element.company_name === this.state.company) {
                    return true;
                }
                else if (element.city === this.state.location && this.state.designation === '' && element.company_name === this.state.company) {
                    return true;
                }
                else if (element['city'] === this.state.location && this.state.designation === '' && this.state.company==='') {
                    return true;
                }
                else if (this.state.location==='' && element.job_designation===this.state.designation && this.state.company==='') {
                    return true;
                }
                else if (this.state.location==='' && this.state.designation === '' && element.company_name === this.state.company) {
                    return true;

                }
                else{
                    return false
                }
                
                
            }));

        }
       
        this.props.Mydata(data);
    }

    render() {
        const divstyle = {
            // float:"left",
            marginBottom: "20px"
        }

        return (

            <section style={divstyle} className="search-sec">
                <div className="container">
                    <form onSubmit={this.handleSubmit} method="post" >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input name="location" type="text" value={this.state.location} onChange={this.handleChange} className="form-control search-slt" placeholder="Location"></input>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input name="designation" type="text" value={this.state.designation} onChange={this.handleChange} className="form-control search-slt" placeholder="Designation"></input>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input name="company" type="text" value={this.state.company} onChange={this.handleChange} className="form-control search-slt" placeholder="Company"></input>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="submit" className="btn btn-success wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </section>


        )
    }

}
export default Filters


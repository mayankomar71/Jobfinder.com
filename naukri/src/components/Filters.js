import React, { Component } from 'react'
import '../Styles/content.css'

class Filters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            designation: '',
            company: ''

        }

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    submitData = (event) => {

        event.preventDefault();

        const job_data = this.props.jobData;
        if (this.state.location === '' && this.state.designation === '' && this.state.company === '') {
            var data = job_data;
        }
        else {
            data = (job_data.filter((element) => {
                if (this.state.location && element.city.includes(this.state.location)!==true) {
                    return false;
                }
                if (this.state.designation && element.job_designation.includes(this.state.designation)!==true) {
                    return false;
                }
                if (this.state.company && element.company_name.includes(this.state.company)!==true) {
                    return false;
                }
                return true;
            }));

        }

        this.props.Mydata(data);
    }

    render() {
        const divstyle = {
            marginBottom: "20px"
        }

        return (

            <section style={divstyle} className="search-sec">
                <div className="container">
                    <form onSubmit={this.submitData}  method="post" >
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


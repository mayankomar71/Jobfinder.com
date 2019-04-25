import React, { Component } from 'react'
import './content.css'

class Filters extends Component {
    render() {
        const divstyle = {
            // float:"left",
            marginBottom: "20px"
        }
        return (

            <section style={divstyle} className="search-sec">
                <div className="container">
                    <form action="#" method="post" >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Skills"></input>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Designation"></input>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select className="form-control search-slt" id="exampleFormControlSelect1">
                                            <option>Salary</option>
                                            <option>1 lakh</option>
                                            <option>2 lakh</option>
                                            <option>3 lakh</option>
                                            <option>4 lakh</option>
                                            <option>5 lakh</option>
                                            <option>6 lakh</option>
                                            <option>>6 lakh</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="button" className="btn btn-success wrn-btn">Search</button>
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


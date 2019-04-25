import React, { Component } from 'react'

class Filters extends Component {
    render() {
        const divstyle={
            float:"left",
            marginBottom:"20px"
        }
        return (
            <div style={divstyle}>
                    &ensp; <input  type="text"  placeholder="location"></input> &ensp;
                    <input  type="text"  placeholder="Designation"></input> &ensp;
                    <input  type="text"  placeholder="Company"></input> &ensp;
            </div>
        )
    }

}
export default Filters


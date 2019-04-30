import React, { Component } from 'react';
import Header from './Header'
// import jobs from './jobs'
import Content from './Content'
import Filters from './Filters'
import Footer from './Footer'
import axios from 'axios'

class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr:[],
      currentuser:localStorage.getItem('Currentuser'),
      isloggedIn:localStorage.getItem('isLoggedIn')
    }
   



  }
  componentDidMount()
  {
    axios.get('http://localhost:4000/jobs')
  .then( (response)=> {
    this.setState({
      arr:response.data,
      jobs:response.data
    })

  })
  .catch(function (error) {
    console.log(error);
  });

  }


  filterdata = (filterarray) => {
    this.setState({
      arr: filterarray
    })


  }
  render() {

    return (
      <div className="App">



        <Header></Header>
        {this.state.isloggedIn==="true"&&<h1>Welcome:{this.state.currentuser} to Naukri.com </h1>}
       <Filters Mydata={this.filterdata} jobData={this.state.jobs}></Filters>
        <Content data={this.state.arr}></Content>
        <Footer></Footer>



      </div>
    );

  }

}

export default HomeComponent;

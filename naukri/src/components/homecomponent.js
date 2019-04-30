import React, { Component } from 'react';
import Header from './Header'
import jobs from './jobs'
import Content from './Content'
import Filters from './Filters'
import Footer from './Footer'

class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: jobs,
      currentuser:localStorage.getItem('Currentuser'),
      isloggedIn:localStorage.getItem('isLoggedIn')
    }
   



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
       <Filters Mydata={this.filterdata} jobData={jobs}></Filters>
        <Content data={this.state.arr}></Content>
        <Footer></Footer>



      </div>
    );

  }

}

export default HomeComponent;

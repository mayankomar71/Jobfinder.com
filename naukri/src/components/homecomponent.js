import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Filters from './Filters'
import Footer from './Footer'

class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [],
      currentuser: localStorage.getItem('Currentuser'),
      isloggedIn: localStorage.getItem('isLoggedIn'),
      flag: true
    }




  }
 
componentWillMount(){
    if (localStorage.getItem('user_type') === "2" || localStorage.getItem('user_type') === null) {
      this.props.getjob_user();
      this.setState({
        arr: this.props.alljobs,
        jobs: this.props.alljobs
      })

    }
    else {
      var companyname=JSON.parse(this.state.currentuser)
      this.props.getjob_user(companyname);
      this.setState({
        arr: this.props.alljobs,
        jobs: this.props.alljobs
      })
    }


  }


  filterdata = (filterarray) => {
    this.setState({
      arr: filterarray
    })


  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      arr: nextProps.alljobs,
      jobs: nextProps.alljobs
    })
  

  



  }
 







  render() {

    return (
      <div className="App">



        <Header></Header>
        <Filters Mydata={this.filterdata} jobData={this.state.jobs}></Filters>
        <Content applydata={this.props} data={this.state.arr}></Content>
        <Footer></Footer>


  
      </div>
    );

  }

}

export default HomeComponent;

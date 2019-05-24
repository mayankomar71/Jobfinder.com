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
      this.props.getjob_user(1);
      this.setState({
        arr: this.props.alljobs,
        jobs: this.props.alljobs
      })
    }
    else {
      var companyname=JSON.parse(this.state.currentuser)
      this.props.getjob_user(1,companyname);
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
      jobs: nextProps.alljobs,
    })
  }
 


  button_page = (e, id) => {
    var current_page = id;
    localStorage.setItem('current_page', id);
    if (localStorage.getItem('Currentuser')) {
      var company_name = localStorage.getItem('Currentuser');
      company_name = company_name.replace(/"/g, "");
    }
    if (localStorage.getItem('user_type') === '2') {
      this.props.getjob_user(current_page);
    }
    else {
      this.props.getjob_user(current_page, company_name);
    }
    this.setState({
      arr:this.props.alljobs,
      jobs:this.props.alljobs
    })
  }




  render() {

    var total_pages = JSON.parse(localStorage.getItem('total_page'));
    var total_array = [];
    for (let i = 1; i <= total_pages; i++) {
      total_array[i] = i;
    }
    return (
      <div className="App">



        <Header></Header>
        <Filters Mydata={this.filterdata} jobData={this.state.jobs}></Filters>
        <Content applydata={this.props} data={this.state.arr}></Content>
        
          <div>
            {total_array.map((ele, index) => {
              return <button key={index} className="btn btn-success" style={{ marginLeft: '15px' }} type="button" id={ele} onClick={(e) => this.button_page(e, ele)}>{ele}</button>
            })}
          </div>
     
        <Footer></Footer>


  
      </div>
    );

  }

}

export default HomeComponent;

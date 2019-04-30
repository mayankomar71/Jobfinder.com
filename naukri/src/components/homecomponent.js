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
      arr: [],
      currentuser: localStorage.getItem('Currentuser'),
      isloggedIn: localStorage.getItem('isLoggedIn')
    }




  }
  
  componentDidMount() {
    if (localStorage.getItem('user_type') === "user" || localStorage.getItem('user_type') === null) {
      axios.get('http://localhost:4000/jobs')
        .then((response) => {
          this.setState({
            arr: response.data,
            jobs: response.data
          })

        })
        .catch(function (error) {
          console.log(error);
        });

    }
    else {

      axios.get('http://localhost:4000/jobs/company', {
        params: {
          company_name: this.state.currentuser
          // this.props.history.location.state.company_name
        }
      })
        .then((response) => {
          this.setState({
            arr: response.data,
            jobs: response.data
          })

        })
        .catch(function (error) {
          console.log(error);
        });
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
        <Filters Mydata={this.filterdata} jobData={this.state.jobs}></Filters>
        <Content data={this.state.arr}></Content>
        <Footer></Footer>



      </div>
    );

  }

}

export default HomeComponent;

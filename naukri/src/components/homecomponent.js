import React ,{Component} from 'react';
import Header from './Header'
import jobs from './jobs'
import Content from './Content'
import Filters from './Filters'
import Footer from './Footer'

class HomeComponent extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
    arr:jobs,
    isLoggedIn:localStorage.getItem('isLoggedIn'),
    currentUser:localStorage.getItem('Currentuser')
    }
    // localStorage.getItem('isLoggedIn')===true&&this.props.history.push('/')


  }
 
  
filterdata = (filterarray) => {
  this.setState({
    arr:filterarray
  })

  
 }
 logOut=()=>
 {
   this.setState({
    isLoggedIn:false,
    currentUser:""

   })

 }

  render()
  {
    return (
      <div className="App">
      
     
      
      <Header></Header>
      {
      (this.state.isLoggedIn)&&this.state.currentUser
      }
      <button onClick={this.logOut}>LogOut</button>
      <Filters Mydata={this.filterdata} jobData={jobs}></Filters>
      <Content data={this.state.arr}></Content>
      <Footer></Footer>
  
    
       
      </div>
    );

  }
  
}

export default HomeComponent;

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
    arr:jobs
    }
  }
 
  
filterdata = (filterarray) => {
  this.setState({
    arr:filterarray
  })

  
 }

  render()
  {
    return (
      <div className="App">
      
     
      <Header></Header>
      <Filters Mydata={this.filterdata} jobData={jobs}></Filters>
      <Content data={this.state.arr}></Content>
      <Footer></Footer>
  
    
       
      </div>
    );

  }
  
}

export default HomeComponent;

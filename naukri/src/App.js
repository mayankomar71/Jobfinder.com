import React ,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import jobs from './components/jobs'
import Content from './components/Content'
import Filters from './components/Filters'
import Footer from './components/Footer'

class App extends Component{
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

export default App;

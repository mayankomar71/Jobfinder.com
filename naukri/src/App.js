import React from 'react';
import './App.css';
import Header from './components/Header'
import jobs from './components/jobs'
import Content from './components/Content'
import Filters from './components/Filters'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Filters></Filters>
    <Content data={jobs}></Content>
    <Footer></Footer>

  
     
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Amiibo from './amiibo';
import Header from './header';
import Search from './search'


class App extends React.Component{

    render() {
      
      return (
        <div className="App">
          <Header/>
          <Search placeholder='Enter Amiibo Name...'/>
          <Amiibo />
        </div>
      )
    }
  }
  


  

export default App;

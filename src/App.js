import React from 'react';
import './App.css';
import Amiibo from './amiibo';
import Header from './header';
import SearchBox from './search';
import amiiboData from './data/amiibo.json'

const amiiboCharacters = amiiboData.amiibo;

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      characters: [{ amiiboCharacters }],
      names: [{ amiiboCharacters }],
      searchField: ''
    }
  }
  render(){
    const {names, searchField} = this.state
    const filteredNames = names.filter(character =>(
      character.amiiboCharacters.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
      <Header/>
      <SearchBox placeholder='Enter Amiibo name...' handleChange={(e) => this.setState({searchField:e.target.value})}/>
      <Amiibo names = {filteredNames}/>
    </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <SearchBox placeholder='Enter Amiibo name...' handleChange={(e) => console.log(e.target.value)}/>
//       <Amiibo/>
//     </div>
//   );
// }

export default App;

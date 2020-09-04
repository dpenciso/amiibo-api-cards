import React from 'react';
import './App.css';
import Amiibo from './amiibo';
import Header from './header';
import SearchBox from './search';
import amiiboData from './data/amiibo.json'

const amiiboCharacters = amiiboData.amiibo;

const characterName = amiiboCharacters.map(amiiboCharacter => {
  return amiiboCharacter.name.toLowerCase();
});

// const eachName = characterName.map(charName => {
//   return {charName}
// })

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      names: [{ characterName }],
      // name: [{ eachName }],
      characters: [{ amiiboCharacters }],
      searchField: ''
    }
  }
  render(){
    const {names, searchField} = this.state
    const filteredNames = names.filter(name =>(
      name.characterName.includes(searchField.toLowerCase)
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

export default App;

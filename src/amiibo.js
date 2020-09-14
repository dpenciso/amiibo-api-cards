import React from 'react';
import amiiboData from './data/amiibo.json'
import './amiibo.css'



class Amiibo extends React.Component{
    
    state = {
        amiiboCharacters: amiiboData.amiibo,
        name: amiiboData.amiibo.map(names => {
          return names.name
        }),
        searchField: ''
        }

    render() {
        
        
        return(
            <div className="mainDiv">
                {/* <div>
                    <SearchBox placeholder='Enter Amiibo name...' handleChange={(e) => this.setState({searchField:e.target.value})}/>
                </div> */}
                
                    {
                        this.state.amiiboCharacters.map(amiiboChar => {
                            let bkgrndImg = amiiboChar.image;
                            let charName = amiiboChar.name;
                            let charGame = amiiboChar.gameSeries;
                            let charSeries = amiiboChar.amiiboSeries;
                            let charRelease = amiiboChar.release.na;
                            // const {name, searchField} = this.state;
                            // const filteredNames = name.filter(charName =>(
                            // charName.includes(searchField)));
                            return (
                                <div key={amiiboChar.tail} className="amiibo" style = {{ backgroundImage: `url(${bkgrndImg})` }}>
                                    <div>
                                        <h1>
                                            Name: {charName}
                                        </h1>
                                    </div>
                                    <div>
                                        <h2>
                                            Game: {charGame}
                                        </h2>
                                    </div>
                                    <div>
                                        <h2>
                                            Series: {charSeries}
                                        </h2>
                                    </div>
                                    <div>
                                        <h2>
                                            NA Release: {charRelease}
                                        </h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                
            </div>
        )
    }
}




export default Amiibo;
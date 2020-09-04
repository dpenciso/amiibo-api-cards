import React from 'react';
import amiiboData from './data/amiibo.json'
import './amiibo.css'

const amiiboChars = amiiboData.amiibo;



function Amiibo(props) {
    return (
        
        <div className="mainDiv">
            {
                amiiboChars.map(amiiboChar => {
                    let bkgrndImg = amiiboChar.image;
                    return (
                        <div key={amiiboChar.tail} className="amiibo" style = {{ backgroundImage: `url(${bkgrndImg})` }}>
                            <div>
                                <h1>
                                    Name: {amiiboChar.name}
                                </h1>
                            </div>
                            <div>
                                <h2>
                                    Game: {amiiboChar.gameSeries}
                                </h2>
                            </div>
                            <div>
                                <h2>
                                    Series: {amiiboChar.amiiboSeries}
                                </h2>
                            </div>
                            <div>
                                <h2>
                                    NA Release: {amiiboChar.release.na}
                                </h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};


export default Amiibo;
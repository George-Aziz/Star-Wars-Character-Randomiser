import React from 'react';

class StarWars extends React.Component {

    constructor() {
        super()
        this.state = {
            loadedChar: false,
            name: null,
            height: null,
            homeworld:null,
            films: [],
            imageUrl: null
        }
    }

    getNewChar() {
        const randNum = Math.round(Math.random() * 88)
        const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randNum}.json`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState( {
                    loadedChar: true,
                    name: data.name,
                    height: data.height,
                    homeworld: data.homeworld,
                    films: data.films,
                    imageUrl: data.image
                })
            })
    }

    render() {

        return (
            <div>
                <div className="content">
                    {
                        this.state.loadedChar && 
                            <div>
                                <h1>{this.state.name}</h1>
                                <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
                                <p>{this.state.height} m</p>
                                <p>Homeworld: {this.state.homeworld}</p>
                            </div>
                    }
                    <button type="button" className="btn" onClick={()=> this.getNewChar()}> Randomise Character</button>
                </div>
                <div className="bg-img" style={{backgroundImage: `url(${this.state.imageuRL})`}}></div>
            </div>
        )
    }
}

export default StarWars;
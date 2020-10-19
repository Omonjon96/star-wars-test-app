import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './planet-details.css';

export default class PlanetDetails extends Component {

  swapiService = new SwapiService();

  state = {
      planet: null, 
      loading: false
  };

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
      if(this.props.planetId !== prevProps.planetId) {
        this.updatePlanet();
      }
  }

  updatePlanet() {
    const { planetId } = this.props;
    if(!planetId) {
      return;
    }

    

    this.swapiService
      .getPlanet(planetId)
      .then((planet) => {
          this.setState({
            planet
          }); 
      })

  }

  render() {

    if(!this.state.planet) {
      return <span>Select a planet from a list</span>;
    }

    const {  id, name, population, rotationPeriod, diameter } = this.state.planet;

   

    return (
      <div className="planet-details card">
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
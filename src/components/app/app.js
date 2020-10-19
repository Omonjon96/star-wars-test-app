import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import RandomPlanet from '../random-planet';
// import SearchPanel from '../search-panel';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import PageBg from '../../assets/images/bg.jpg';


import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    selectedPlanet: null
  };


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };
  

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    });
  };


  
  render() {

    const {selectedPerson, selectedPlanet} = this.state;

    const peopleList = (
      <ItemList 
        selectedItem={selectedPerson}
        onItemSelected={this.onPersonSelected}
        getData = {this.swapiService.getAllPeople}>
          {
            (i) => `${i.name}  (${i.birthYear})` 
          }
      </ItemList >
    );

    const personDetails = (
      <PersonDetails personId={selectedPerson} />
    );


    const planetList = (
      <ItemList 
        selectedItem={selectedPlanet}
        onItemSelected={this.onPlanetSelected}
        getData = {this.swapiService.getAllPlanets}>
          {
            (i) => `${i.name}  (${i.population})` 
          }
      </ItemList >
    );

    const planetDetails = (
      <PlanetDetails planetId={selectedPlanet} />
    );

    return (
    
        <div className="star-wars-app">
            <Header/>
            <RandomPlanet/>
            {/* <SearchPanel/> */}
            <Row left={peopleList} right={personDetails}/>
            {/* <Row left={planetList} right={planetDetails}/> */}
            <Footer/>
        </div>
    );
  }
}
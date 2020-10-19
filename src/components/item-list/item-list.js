import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {

     const { id } = item; 
     const {selectedItem} = this.props;

     const label = this.props.children(item);

     const itemStyles = {
      backgroundColor: id==selectedItem ? "#333" : null
    };

    //  const isActive = id==selectedItem ? 'active' : null;

      return (
        <li className={`list-group-item list-group-item-pointer`}
            key={id}
            onClick={() => this.props.onItemSelected(id)} style={itemStyles}>
          {label}
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
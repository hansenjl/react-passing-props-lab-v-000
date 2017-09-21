import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = (props) =>
  <div className="fruit-basket">
    <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
    <FilteredFruitList
          filter={props.currentFilter} fruit={props.fruit}  />
  </div>;


FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: null,
  updateFilterCallback: undefined
}
export default FruitBasket;

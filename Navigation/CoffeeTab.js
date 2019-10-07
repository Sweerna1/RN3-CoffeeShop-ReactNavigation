import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Icon } from "react-native";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const CoffeeTab = createStackNavigator({
  ListScreen: CoffeeList,
  DetailScreen: CoffeeDetail,
  CartScreen: CoffeeCart
});

export default CoffeeTab;

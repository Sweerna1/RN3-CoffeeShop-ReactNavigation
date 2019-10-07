import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Icon } from "react-native";
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";

const OrdersTab = createStackNavigator({
  CartScreen: CoffeeCart,
  OrderScreen: OrderHistory
});

export default OrdersTab;

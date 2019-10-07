import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Icon } from "react-native";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import CoffeeList from "../Components/CoffeeList";

const AuthTab = createStackNavigator({
  LoginScreen: Login,
  ProfileScreen: Profile,
  ListScreen: CoffeeList
});

export default AuthTab;

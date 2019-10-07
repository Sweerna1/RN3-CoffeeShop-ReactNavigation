import { createStackNavigator } from "react-navigation-stack";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";

const MyStackNav = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerIintColor: "black",
      headerStyle: {
        backgroundColor: "pink",
        fontWeight: "bold"
      }
    }
  }
);

export default MyStackNav;

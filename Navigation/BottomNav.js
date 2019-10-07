import { createBottomTabNavigator } from "react-navigation-tabs";

//import StackNav from "./StackNav";
import CoffeeTab from "./CoffeeTab";
import AuthTab from "./AuthTab";
import OrdersTab from "./OrdersTab";

const BottomNav = createBottomTabNavigator({
  AuthTab: AuthTab,
  CoffeeTab: CoffeeTab,
  OrdersTab: OrdersTab
});

export default BottomNav;

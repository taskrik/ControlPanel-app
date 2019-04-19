import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomePage from "./src/components/screens/HomePage";
import CatFeeder from "./src/components/screens/CatFeeder"

const AppNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null
      }
    },
    CatFeeder: {
      screen: CatFeeder,
    }
  },
  {
    initialRouteName: "HomePage"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

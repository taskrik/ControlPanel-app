import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomePage from "./src/components/screens/HomePage";


const AppNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null
      }
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

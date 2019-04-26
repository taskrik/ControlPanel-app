import React, { Component } from "react";
import { View, Picker } from "react-native";

export default class DropDown extends Component {
  state = {
    env: "Pick env"
  };

  render() {
    return (
      <Picker
        selectedValue={this.state.env}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ env: itemValue })
        }
        style={{ height: 50, width: 100, marginBottom: 50 }}
      >
        <Picker.Item label="Home" value="home" />
        <Picker.Item label="Outside" value="Outside" />
      </Picker>
    );
  }
}

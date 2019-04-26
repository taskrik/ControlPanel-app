import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import DropDown from "../shared/DropDown";
import ToolIcon from "../shared/ToolIcon";

export class HomePage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <DropDown />
        <View>
          <ToolIcon
            onPress={() => this.props.navigation.navigate("CatFeeder")}
            label="Cat Feeder"
            iconSize={60}
            iconColor="white"
            iconName="cat"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

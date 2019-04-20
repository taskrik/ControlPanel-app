import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import ToolIcon from "../shared/ToolIcon";

export class HomePage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ToolIcon
          onPress={() => this.props.navigation.navigate("CatFeeder")}
          label="Cat Feeder"
          iconSize={60}
          iconColor="white"
          iconName="cat"
        />
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

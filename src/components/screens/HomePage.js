import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class HomePage extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Hello this is the HomePage </Text>
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

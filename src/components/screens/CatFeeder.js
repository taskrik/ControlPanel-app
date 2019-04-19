import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { openFeeder, closeFeeder } from "../../actions/feeder";

export class CatFeeder extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <TouchableOpacity
            onPress={() => this.props.openFeeder()}
            style={{
              width: 150,
              height: 60,
              marginBottom: 20,
              backgroundColor: "green",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Feed Luke
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.closeFeeder()}
            style={{
              width: 150,
              height: 60,
              marginBottom: 20,
              backgroundColor: "red",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Stop feeder
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  openFeeder,
  closeFeeder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatFeeder);

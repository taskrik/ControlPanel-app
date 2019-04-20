import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

import { closeFeeder, openFeeder } from "../../actions/feeder";

export class CatFeeder extends Component {
  render() {
    const { serverMessage } = this.props.feeder;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            marginBottom: 50,
            borderWidth: 0.5,
            height: 200,
            width: 300,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {!serverMessage && (
            <Text style={{ fontSize: 18 }}>Its feeding time!</Text>
          )}
          {serverMessage && (
            <Text style={{ fontSize: 18 }}>{serverMessage.message}</Text>
          )}
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.openFeeder()}
            style={styles.button}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Open Feeder
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.closeFeeder()}
            style={{ ...styles.button, ...{ backgroundColor: "red" } }}
          >
            <Text style={styles.text}>Stop Feeder</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  feeder: state.feeder
});

const mapDispatchToProps = {
  openFeeder,
  closeFeeder
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
  },
  text: { fontSize: 18, color: "white", fontWeight: "bold" }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatFeeder);

import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";

import {
  closeFeeder,
  openFeeder,
  resetFeeder,
  getFeederState,
  getSnapShot,
  takeSnapShot
} from "../../actions/feeder";

export class CatFeeder extends Component {
  state = {
    disableOpenButton: false,
    disableCloseButton: true
  };

  componentDidMount() {
    this.props.getFeederState();
  }

  render() {
    const { serverMessage } = this.props.feeder;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {serverMessage && serverMessage.images && (
          <View style={{ width: "100%", height: 300 }}>
            <Image
              style={{ width: 300, height: 300 }}
              source={{
                uri: `http://192.168.178:3000/` + `${serverMessage.images[0]}`
              }}
            />
          </View>
        )}
        <View style={styles.messageContainer}>
          {!serverMessage && (
            <Text style={{ fontSize: 18 }}>Its feeding time!</Text>
          )}
          {serverMessage && (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {!!serverMessage.feederInfo && (
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 26, marginBottom: 20 }}>
                    You fed the cat {serverMessage.feederInfo.timesUsed} times
                  </Text>
                  <View
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 20,
                        marginRight: 10
                      }}
                    >
                      Last: {serverMessage.feederInfo.hours[0]}
                    </Text>

                    <TouchableOpacity onPress={() => this.props.resetFeeder()}>
                      <Text
                        style={{ fontSize: 20, marginBottom: 20, color: "red" }}
                      >
                        Reset
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              <Text
                style={{
                  fontSize: 20,
                  color:
                    serverMessage.message === "Feeder closed!" ? "red" : "green"
                }}
              >
                {serverMessage.message}
              </Text>
            </View>
          )}
        </View>
        <View>
          <Button
            style={{
              ...styles.button,
              backgroundColor: this.state.disableOpenButton ? "grey" : "green"
            }}
            onPress={() => {
              this.setState({
                disableOpenButton: !this.state.disableOpenButton,
                disableCloseButton: !this.state.disableCloseButton
              });
              this.props.openFeeder();
            }}
            disabled={this.state.disableOpenButton}
          >
            <Text style={styles.text}>Open feeder</Text>
          </Button>
          <Button
            disabled={this.state.disableCloseButton}
            style={{
              ...styles.button,
              backgroundColor: this.state.disableCloseButton ? "grey" : "red"
            }}
            onPress={() => {
              this.setState({
                disableOpenButton: !this.state.disableOpenButton,
                disableCloseButton: !this.state.disableCloseButton
              });
              this.props.closeFeeder();
            }}
          >
            <Text style={styles.text}>Stop Feeder</Text>
          </Button>
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
  closeFeeder,
  resetFeeder,
  getFeederState,
  getSnapShot,
  takeSnapShot
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { fontSize: 18, color: "white", fontWeight: "bold" },
  messageContainer: {
    marginBottom: 50,
    borderWidth: 0.5,
    height: 200,
    width: 300,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatFeeder);

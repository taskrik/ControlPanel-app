import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getLiveStream } from "../../actions/feeder";
import { WebView } from "react-native-webview";
import { Button } from "native-base";

export class CameraView extends Component {
  state = {
    isLoading: null,
    error: false
  };
  componentDidMount() {
    const { env } = this.props.changeEnv;
    this.props.getLiveStream(env);
  }

  render() {
    const { liveStream } = this.props.feeder;
    const { env } = this.props.changeEnv;
    const { isLoading, error } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        {error ? (
          <View>
            <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
              Something went wrong...
            </Text>
          </View>
        ) : (
          <View>
            <Text style={{ color: "blue", fontSize: 20, fontWeight: "bold" }}>
              {" "}
              Live Stream{" "}
            </Text>
          </View>
        )}

        {isLoading && (
          <View
            style={{
              alignItems: "center",
              marginTop: 30
            }}
          >
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
        {liveStream && (
          <View style={{ backgroundColor: 'red', flex:1}}>
            <WebView
              style={{ width: 300, height:300 }}
              onLoadStart={() => this.setState({ isLoading: true })}
              onLoadEnd={() => this.setState({ isLoading: false })}
              onError={() =>
                this.setState({
                  error: true
                })
              }
              source={{ uri: "http://192.168.178.21:3000/feeding/cctv/on" }}
            />
          </View>
        )}
        <View style={{flex:1}}>
          <Button
            style={{
              ...styles.button,
              backgroundColor: "blue"
            }}
            onPress={() => {
              this.props.getLiveStream(env);
            }}
          >
            <Text style={styles.text}>Open Camera</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  feeder: state.feeder,
  changeEnv: state.changeEnv
});

const mapDispatchToProps = { getLiveStream };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraView);

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { fontSize: 18, color: "white", fontWeight: "bold" }
});

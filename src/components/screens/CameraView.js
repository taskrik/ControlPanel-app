import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getLiveStream } from "../../actions/feeder";
import { WebView } from "react-native-webview";

export class CameraView extends Component {
  state = {
    isLoading: null,
    error: false
  };
  componentDidMount() {
    this.props.getLiveStream();
  }

  render() {
    const { liveStream } = this.props.feeder;
    const { isLoading, error } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <View>
          {error ? (
            <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
              Something went wrong...
            </Text>
          ) : (
            <Text style={{ color: "blue", fontSize: 20, fontWeight: "bold" }}>
              {" "}
              Live Stream{" "}
            </Text>
          )}
        </View>
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
          <WebView
            style={{width: 300}}
            onLoadStart={() => this.setState({ isLoading: true })}
            onLoadEnd={() => this.setState({ isLoading: false })}
            onError={() =>
              this.setState({
                error: true
              })
            }
            source={{ uri: "http://192.168.178.21:3000/feeding/cctv/on" }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  feeder: state.feeder
});

const mapDispatchToProps = { getLiveStream };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraView);

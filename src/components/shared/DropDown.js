import React, { Component } from "react";
import { Picker } from "react-native";
import { connect } from "react-redux";
import { changeEnv } from "../../actions/changeEnv";

export class DropDown extends Component {
  state = {
    env: "HOME"
  };

  componentDidMount() {
    this.props.changeEnv(this.state.env);
  }

  render() {
    console.log("state", this.state.env);
    return (
      <Picker
        selectedValue={this.state.env}
        onValueChange={(itemValue, itemIndex) => {
          this.setState({ env: itemValue });
          this.props.changeEnv(itemValue);
        }}
        style={{ height: 50, width: 100, marginBottom: 50 }}
      >
        <Picker.Item label="Home" value="HOME" />
        <Picker.Item label="Out" value="OUT" />
      </Picker>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { changeEnv };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);

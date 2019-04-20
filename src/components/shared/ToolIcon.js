import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class ToolIcon extends Component {
  render() {
    const { onPress, iconSize, iconColor, iconName, label } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.wrapper}>
          <Icon size={iconSize} color={iconColor} name={iconName} />
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "blue"
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  label: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 5
  }
});

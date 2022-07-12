import React from "react";
import { View, Text } from "react-native";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { name, color } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
        }}
      >
        <Text>Chat Screen</Text>
      </View>
    );
  }
}


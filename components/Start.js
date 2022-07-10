import React from "react";
import BackgroundImage from "../assets/Backgroundimage.png";
import icon from "../assets/icon.svg";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      },
      titleWrapper: {
        flex: 1,
        padding: 50,
      },
      button: {},

      userInterfaceWrapper: {
        flex: 1,
        width: "88%",
        backgroundColor: "white",
        alignItems: "center",
        height: "44%",
        marginBottom: 10,
        borderRadius: 2,
      },
      textInput: {
        marginTop: 10,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "88%",
      },
      image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      },
      titleText: {
        color: "#FFFFFF",
        fontSize: 45,
        fontWeight: "600",
        textAlign: "center",
      },
    });

    return (
      <View style={styles.container}>
        <ImageBackground source={BackgroundImage} style={styles.image}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Meet App</Text>
          </View>
          <View style={styles.userInterfaceWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="enter your stupid name!"
            />
            <Button
              style={styles.button}
              title="Start Chatting"
              onPress={() => this.props.navigation.navigate("Chat")}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

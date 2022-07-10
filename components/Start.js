import React from "react";
import BackgroundImage from "../assets/Backgroundimage.png";

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
      button: {
        color: "#757083",
        width: "88%",
        borderRadius: "0",
      },

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
        padding: 10,
        margin: 10,
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
      colorText: {
        color: "#757083",
      },
      colorChoiceWrapper: {
        flex: 1,
        width: "88%",
      },
      buttonWrapper: {
        width: "88%",
        color: "757083",
        borderColor: "757083",
        borderWidth: 3,
        borderRadius: 5,
      },
      colorPicker: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginBottom: 20,
      },
      circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
      },
      color1: {
        backgroundColor: "#090C08",
      },
      color2: {
        backgroundColor: "#474056",
      },
      color3: {
        backgroundColor: "#8A95A5",
      },
      color4: {
        backgroundColor: "#B9C6AE",
      },
    });

    return (
      <View style={styles.container}>
        <ImageBackground source={BackgroundImage} style={styles.image}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Blather</Text>
          </View>

          <View style={styles.userInterfaceWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="Your name:"
            />

            <View style={styles.colorChoiceWrapper}>
              <Text style={styles.circle.colorText}>
                Choose Background Color:
              </Text>
              <View style={styles.colorPicker}>
                <View style={[styles.circle, styles.color1]}></View>
                <View style={[styles.circle, styles.color2]}></View>
                <View style={[styles.circle, styles.color3]}></View>
                <View style={[styles.circle, styles.color4]}></View>
              </View>
            </View>

            <View style={styles.buttonWrapper}>
              <Button
                style={styles.button}
                title="Start Chatting"
                onPress={() => this.props.navigation.navigate("Chat")}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

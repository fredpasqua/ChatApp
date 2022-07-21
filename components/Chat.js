import React from "react";
import {
  View,
  Platform,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  FlatList,
} from "react-native";
import { GiftedChat, Bubble, renderBubble } from "react-native-gifted-chat";
import { StatusBar } from "expo-status-bar";
const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBYDsu93VfkkUy_a3F5OdxL0HvOL-NiU_w",
  authDomain: "chatapp-de0a1.firebaseapp.com",
  projectId: "chatapp-de0a1",
  storageBucket: "chatapp-de0a1.appspot.com",
  messagingSenderId: "485930190039",
  appId: "1:485930190039:web:77ae48a7d82a4fff1cdc92",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
this.referenceChatMessages = firebase.firestore().collection("messages");
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: "This is a system message",
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: this.props.route.params.color,
      },
    });

    let { name, color } = this.props.route.params;

    this.props.navigation.setOptions({ title: name });

    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: "white",
                  },
                  left: {
                    color: "#24204F",
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: "#E6F5F3",
                  },
                  right: {
                    backgroundColor: "#3A13C3",
                  },
                }}
              />
            );
          }}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}


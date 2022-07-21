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

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: "",
        name: "",
        avatar: "",
      },
    };
  }

  addMessage = (message) => {
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text || "",
      createdAt: message.createdAt,
      user: message.user,
    });
  };

  componentDidMount() {
    //create reference to messages
    this.referenceChatMessages = firebase.firestore().collection("messages");

    //Authenticate user using anonymous
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }
      //update user state with currently active user data
      this.setState({
        uid: user.uid,
      });
      //create a reference to the active user's messages
      this.referenceUserChatMessages = firebase
        .firestore()
        .collection("messages")
        .where("uid", "==", this.state.uid);
      //listen for collection changes for current user
      this.unsubscribeMessageUser = this.referenceUserChatMessages.onSnapshot(
        this.onCollectionUpdate
      );
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages,
    });
  };

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


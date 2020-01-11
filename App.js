//This is an example code to Load Local HTML File or URL in React Native WebView//
import React, { Component } from "react";
import { StyleSheet, Text, View, Button,Platform } from "react-native";
import { WebView } from "react-native-webview";
//import HTML_FILE from "./resources/index.html";
const isAndroid= Platform.OS==='android';
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { val: 1 };
  }
  renderElement() {
    if (this.state.val === 1) {
      return (
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{ uri: "https://stage.assurenexttechnologies.com/claim_app" }}
          style={{ marginTop: 0 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    } else if (this.state.val === 2) {
      return (
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{ html: '<h1>Hello</h1>' }}
          style={{ marginTop: 20 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    } else {
      if(isAndroid){
        return (
            <WebView
              style={{flex: 1}}
              originWhitelist={['*']}
              source={{uri:'file:///android/asset/index.html'}}
              style={{ marginTop: 20 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
        )
      }else{
        return(
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={HTML_FILE}
            style={{ marginTop: 20 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        );
      }
    }
  }
  render() {
    return (	
     <View style={{flex: 1, marginTop:0, backgroundColor:'white'}}>       
        <View style={{flex: 1}}>
          {this.renderElement()}
        </View>
      </View>
    );
  }
}
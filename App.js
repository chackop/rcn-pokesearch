import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState("search");

  const switchScreen = (currentScreen) => {
    setCurrentScreen(currentScreen)
  }

  const renderScreen = () => {
    if (currentScreen === "landing") {
      return (
        <Landing switchScreen={switchScreen} />
      )
    }
    else if (currentScreen === "search") {
      return (
        <Search />
      )
    }
  }

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
});

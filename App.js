// import {  } from "expo-status-bar";
import React from "react";
import { StatusBar, View, SafeAreaView } from "react-native";
import Cesta from "./src/telas/cesta";
import mock from "./src/mocks/cesta";
// import AppLoading from "expo-app-loading";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

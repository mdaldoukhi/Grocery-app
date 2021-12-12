import React from "react";
import "./i18n";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

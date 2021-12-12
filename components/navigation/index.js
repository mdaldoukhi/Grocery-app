import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";
import "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import { SafeAreaView, Button, Alert } from "react-native";
import Testing from "./Testing";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
export default RootNavigator = () => {
  const { t, i18n } = useTranslation();
  const handlePress = async (event) => {
    await AsyncStorage.setItem("language", "en");
    event.navigation.navigate("Home");
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: 300,
        },
        drawerPosition: i18n.dir() === "rtl" ? "right" : "left",
      }}
      /* Custom Button */
      drawerContent={({ navigation }) => {
        return (
          <SafeAreaView>
            <Button
              title="Home"
              onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate("Home");
              }}
            />
            <Button
              title="Testing"
              onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate("Testing");
              }}
            />
            <Button
              title="change"
              onPress={async () => {
                await AsyncStorage.setItem("language", "ar");
              }}
            />
            <Button
              title="Arabic"
              onPress={async () => {
                let test = await AsyncStorage.getItem("language");
                alert(test);
              }}
            />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Testing"
        component={Testing}
        options={{ swipeEnabled: false }}
      />
    </Drawer.Navigator>
  );
};

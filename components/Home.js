import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";

const Home = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>this is test from {t("testReact")}</Text>
    </View>
  );
};
export default Home;

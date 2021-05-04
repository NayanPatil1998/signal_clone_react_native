import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>This is Home Page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

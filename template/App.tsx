import "react-native-gesture-handler";

import React from "react";
import { SafeAreaView, View, Text, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const One = ({ navigation }) => {
  return (
    <View>
      <Text>This is tab one of MiniApp</Text>
      <Button
        title="go to Three"
        onPress={() => navigation.navigate("Three")}
      />
    </View>
  );
};

const Two = () => {
  return (
    <View>
      <Text>This is tab two of MiniApp</Text>
    </View>
  );
};

const Three = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Navigate testing and load remote assets</Text>
      {/* <Flash width={40} height={40} /> */}
      <Image
        source={require("./remoteAssets/webpack.png")}
        style={{ height: 300, width: 300, resizeMode: "contain" }}
      />
      <Image
        source={require("./remoteAssets/mouse.jpeg")}
        style={{ height: 300, width: 300, resizeMode: "contain" }}
      />
    </View>
  );
};

const Stack = createStackNavigator();

function OneStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="One" component={One} />
      <Stack.Screen name="Three" component={Three} />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Mini Tab One" component={OneStack} />
      <Tab.Screen name="Mini Tab Two" component={Two} />
    </Tab.Navigator>
  );
}

export default App;


import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListRecipesScreen from "../Entities/Recipes/List.recipes.screen";
import ShowRecipesScreen from "../Entities/Recipes/Show.recipes.screen";
import ListGymScreen from "../Entities/Gym/List.gym.screen";
import ShowGymScreen from "../Entities/Gym/Show.gym.screen";
import ListDietScreen from "../Entities/Diet/List.diet.screen";
import ShowDietScreen from "../Entities/Diet/Show.diet.screen";
import ListUserScreen from "../Entities/User/List.user.screen";
import ShowUserScreen from "../Entities/User/Show.user.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListRecipesScreen"
            component={ListRecipesScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowRecipesScreen"
          component={ShowRecipesScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListGymScreen"
            component={ListGymScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowGymScreen"
          component={ShowGymScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListDietScreen"
            component={ListDietScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowDietScreen"
          component={ShowDietScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListUserScreen"
            component={ListUserScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowUserScreen"
          component={ShowUserScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}

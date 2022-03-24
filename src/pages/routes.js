import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Info from './Info';
import Login from './Login';

import {Entypo, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function Routes() {
  return (
    <Tab.Navigator
    tabBarOptions={{
       style:{
           backgroundColor: '#121212',
           borderTopColor: 'transparent',
       },
       activeTintColor: 'red',
       tabStyle:{
           paddingBottom: 5,
           paddingTop: 5,
       }
   }}
   >

    <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="home" size={size} color={color} />

            )
        }}
    />

    <Tab.Screen 
        name="Info" 
        component={Info}
        options={{
            tabBarIcon: ({size, color}) => (
                <Feather name="plus" size={size} color={color} />

            )
        }}
    />

    <Tab.Screen 
        name="Login" 
        component={Login}
        options={{
            tabBarIcon: ({size, color}) => (
                <Feather name="user" size={size} color={color} />

            )
        }}
    />

    </Tab.Navigator>
    
  );
}

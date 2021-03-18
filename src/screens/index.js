import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';
import ProductionScreen from './ProductionScreen';
import NotificationScreen from './NotificationScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="지도"
        component={HomeScreen}
        options={{
          tabBarLabel: '지도',
          tabBarIcon: ({ color = 'blue', size = 16 }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="사진"
        component={ImageScreen}
        options={{
          tabBarLabel: '사진',
          tabBarIcon: ({ color = 'blue', size = 16 }) => (
            <Ionicons name="camera-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="제작"
        component={ProductionScreen}
        options={{
          tabBarLabel: '제작',
          tabBarIcon: ({ color = 'blue', size = 16 }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="알림"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color = 'blue', size = 16 }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

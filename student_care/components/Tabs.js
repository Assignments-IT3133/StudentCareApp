import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import StudentDashboard from './StudentDashboard';
import Course from './Course';
import Subjects from './Subjects';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

export default function Tabs({ route }) {
  const { student } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#e32f45',
        tabBarInactiveTintColor: '#748c94',
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={StudentDashboard}
        initialParams={{ student }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/profile.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        initialParams={{ student }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/course.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
      name='Subjects'
      component={Subjects}
      initialParams={{ student }}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/subjects.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}
            />
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: height * 0.03,
    left: width * 0.05,
    right: width * 0.05,
    elevation: 0,
    backgroundColor: '#ffffff',
    height: height * 0.08,
    borderRadius: 15,
  },
  tabBarLabel: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
});
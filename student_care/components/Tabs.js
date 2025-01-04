import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentDashboard from './StudentDashboard';

export default function Tabs(){

    const Tab=createBottomTabNavigator();

    return(
        <>
        <Tabs.Navigator>
            <Tabs.Screen name='Dashboard' component ={StudentDashboard}/>
        </Tabs.Navigator>
        </>
    );
}
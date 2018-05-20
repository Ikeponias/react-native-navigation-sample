import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootDrawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
);

export default RootDrawer;
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate('Details')}
            title="Go to Details"
        />
    </View>
);

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
)

const RootNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

export default RootNavigator;
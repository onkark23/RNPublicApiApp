import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenshotToggleScreen from '../screens/ScreenshotToggleScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="ScreenshotToggle"
    component={ScreenshotToggleScreen}
    options={{ title: 'Screenshot Control' }}
    />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

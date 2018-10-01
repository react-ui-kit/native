import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import CameraScreen from '../screens/CameraScreen';

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="asterisk" />,
};

const ForgotStack = createStackNavigator({
  Forgot: ForgotScreen,
});

ForgotStack.navigationOptions = {
  tabBarLabel: 'Forgot',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={focused ? 'unlock-alt' : 'lock'} />,
};

const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={`user${focused ? '' : '-plus'}`} />,
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={`user${focused ? '' : '-o'}`} />,
};

export default createBottomTabNavigator(
  {
    LoginStack,
    ForgotStack,
    RegisterStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: '#88B04B',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#293042',
        paddingVertical: 4,
      },
    },
  }
);

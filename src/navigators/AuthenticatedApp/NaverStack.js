import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NaverDetails, NaverForm, NaversList } from '../../screens';
import { Image } from '../../components';
import logo from '../../assets/images/logo.png';
import Icon from '../../assets/icons';

const { Navigator, Screen } = createStackNavigator();

const NaverStack = () => (
  <Navigator
    screenOptions={{
      cardStyle: styles.cardStyle,
      headerLeft: props => (
        <TouchableOpacity style={styles.headerLeftButton} activeOpacity={0.7} {...props}>
          <Icon name="arrow-left" />
        </TouchableOpacity>
      ),
      headerRight: () => <View />,
      headerStyle: styles.headerStyle,
      headerTitle: () => <Image source={logo} height={32} width={124.8} />,
      headerTitleAlign: 'center',
    }}
  >
    <Screen
      name="NaversList"
      component={NaversList}
      options={({ navigation }) => ({
        headerLeft: ({ onPress, ...props }) => (
          <TouchableOpacity
            style={styles.headerLeftButton}
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}
            {...props}
          >
            <Icon name="menu" />
          </TouchableOpacity>
        ),
      })}
    />
    <Screen name="NaverDetails" component={NaverDetails} />
    <Screen name="NaverForm" component={NaverForm} />
  </Navigator>
);

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
  },
  headerStyle: {
    elevation: 5,
    height: 64,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerLeftButton: {
    marginLeft: 16,
  },
});

export default NaverStack;

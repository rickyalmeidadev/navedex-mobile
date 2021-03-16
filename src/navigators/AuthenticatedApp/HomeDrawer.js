import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import NaverStack from './NaverStack';
import { useAuthentication } from '../../hooks';
import { StyleSheet, TouchableOpacity } from 'react-native';

const { Navigator, Screen } = createDrawerNavigator();

const HomeDrawer = () => {
  const { logout } = useAuthentication();

  const handleLogout = navigation => () => {
    navigation.closeDrawer();
    logout();
  };

  return (
    <Navigator drawerContent={props => <DrawerContent {...props} onLogout={handleLogout} />}>
      <Screen
        name="Home"
        component={NaverStack}
        options={{ drawerLabel: 'Navers', swipeEnabled: false }}
      />
    </Navigator>
  );
};

const DrawerContent = ({ onLogout, ...props }) => (
  <DrawerContentScrollView contentContainerStyle={styles.contentContainerStyle} {...props}>
    <TouchableOpacity
      style={styles.headerLeftButton}
      activeOpacity={0.7}
      onPress={() => props.navigation.closeDrawer()}
    >
      <Icon name="x" color="black" size={24} />
    </TouchableOpacity>
    <DrawerItemList
      activeBackgroundColor="transparent"
      activeTintColor="black"
      inactiveBackgroundColor="transparent"
      inactiveTintColor="black"
      labelStyle={styles.labelStyle}
      {...props}
    />
    <DrawerItem
      activeBackgroundColor="transparent"
      activeTintColor="black"
      inactiveBackgroundColor="transparent"
      inactiveTintColor="black"
      label="Sair"
      labelStyle={styles.labelStyle}
      onPress={onLogout(props.navigation)}
    />
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  headerLeftButton: {
    position: 'absolute',
    top: 18,
    left: 16,
  },
  labelStyle: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeDrawer;

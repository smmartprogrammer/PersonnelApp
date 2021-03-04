import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import FormButton from '../Component/FormButton';
import {AuthContext} from '../Navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View>
      <Text>Home Screen {user.id}</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default HomeScreen;

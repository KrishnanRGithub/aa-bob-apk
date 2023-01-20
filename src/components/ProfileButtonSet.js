import React from 'react';
import { View,StyleSheet } from 'react-native';
import FlatButton from './FlatButton';
const ProfileButtonSet = ({ navigation }) => {
  return (
  <View style={{margin:5}}>
    <View style={styles.container}>
    <FlatButton
  title="Loans"
  onPress={() => {navigation.navigate("Loans");}}
/>
<FlatButton
  title="Insurance"
  onPress={() => {navigation.navigate("Insurance");}}
/>
    </View>


<FlatButton
  title="Custom Investment Plans"
  onPress={() => alert('Button pressed')}
/>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
  
export default ProfileButtonSet;
import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Dropdown = ({ items, selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Picker

        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 241, 240,0.9)',
    padding:1,
    paddingHorizontal:10,
    borderRadius:5,
  },
  picker:{
    // fontFamily:"noteFontEnglish",
    fontSize:16,
  }
})

export default Dropdown;
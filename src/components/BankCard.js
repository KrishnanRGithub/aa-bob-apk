import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BankCard = (prop) => {
   prop=prop.prop
    if(prop.fiType=="DEPOSIT"){
    return (
      <View style={styles.cellContainer}>
      <Text style={styles.maskedAccountNumberText}>{prop.maskedAccountNumber}</Text>
      <Text style={styles.ifscText}>{prop.ifsc}</Text>
      <Text style={styles.dematIdText}>{prop.branch}</Text>
      <Text style={styles.currentValueText}>{"₹"+prop.currentbalance}</Text>
      </View>
     );     
  }
};

const styles = StyleSheet.create({
  cellContainer: {
    backgroundColor: 'rgba(242, 242, 242,0.5)',
    padding: 20,
    margin: 10,
    borderRadius: 10, 
    alignSelf: 'flex-start'
  },
  maskedAccountNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },
  ifscText: {
    fontSize: 12,
    color: 'gray'
  },
  currentValueText: {
    fontSize: 18,
    fontWeight: 'bold',
 
  }
});

export default BankCard;
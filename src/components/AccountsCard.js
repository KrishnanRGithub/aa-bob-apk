import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AccountsCard = (prop) => {
    try{
  prop=prop.prop;
  if(prop.fiType=="EQUITIES")
  {return (
    <View style={styles.cellContainer}>
      <Text style={styles.maskedAccountNumberText}>{prop.maskedAccountNumber}</Text>
      <Text style={styles.fiTypeText}>{prop.fiType}</Text>
      <Text style={styles.nameText}>{prop.name}</Text>
      {/* <Text style={styles.mobileText}>{prop.mobile}</Text> */}
      <Text style={styles.dematIdText}>{"DEMAT ID "+prop.dematId}</Text>
      <Text style={styles.panText}>{"PAN "+prop.pan}</Text>
      <Text style={styles.currentValueText}>{"₹"+prop.currentValue}</Text>
      <Text style={styles.investmentValueText}>{"₹"+prop.investmentvalue}</Text>
    </View>
  );}
  else if(prop.fiType=="MUTUAL_FUNDS"){
    return (
        <View style={styles.cellContainer}>
        <Text style={styles.maskedAccountNumberText}>{prop.maskedAccountNumber}</Text>
        <Text style={styles.fiTypeText}>{prop.fiType}</Text>
        <Text style={styles.nameText}>{prop.name}</Text>
        <Text style={styles.dematIdText}>{"DEMAT ID "+prop.dematId}</Text>
        <Text style={styles.panText}>{"PAN "+prop.pan}</Text>
      </View>
    );
  }else{ 
        return (
            <View style={styles.cellContainer}>
            <Text style={styles.maskedAccountNumberText}>{prop.maskedAccountNumber}</Text>
            <Text style={styles.fiTypeText}>{prop.fiType}</Text>
            <Text style={styles.nameText}>{prop.name}</Text>
            <Text style={styles.panText}>{"PAN "+prop.pan}</Text>
            <Text style={styles.dematIdText}>{prop.mobile}</Text>
            </View>
    
        );     
  }}
    catch(e){
        console.log(e);
        return <></>
    }
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.2,
  },
  maskedAccountNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  fiTypeText: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold'
  },
  nameText: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold'
  },
  mobileText: {
    fontSize: 10,
    color: 'black'
  },
  dematIdText: {
    fontSize: 12,
    color: 'gray'
  },
  panText: {
    fontSize: 12,
    color: 'gray'
  },
  investmentValueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    textDecorationLine:'line-through'
  },
  currentValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
 
  }
});

export default AccountsCard;
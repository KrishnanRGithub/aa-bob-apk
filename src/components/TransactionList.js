import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as All  from './Icon';
import {classifyCategories} from '../helpers/categorySorted';
const TransactionList = (prop) => {
  prop = prop.prop;
  if(prop.counterParty!=null)
      prop.counterParty=prop.counterParty.trim("")
  else{
      prop.counterParty=""
  } 
  var temp=classifyCategories(prop.categoryCode)
  prop.uamount="₹"+prop.amount
  if(prop.type=="CREDIT")
      prop.uamount="+ ₹"+prop.amount

    return (
    <View style={styles.cellContainer}>
      <Image source={All[temp]} style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{prop.counterParty==""?prop.category:prop.counterParty}</Text>
        <Text style={styles.dateText}>{prop.dateOfTransaction+" at "+prop.timeOfTransaction}</Text>
      </View>
      <Text  style={[styles.amountText, prop.type === 'DEBIT' ? styles.debitAmount : styles.creditAmount]}>{prop.uamount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.2,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  amountText: {
    fontWeight:"bold",
    fontSize: 18,
  }, 
  debitAmount: {
    fontSize: 18,
  }, 
  creditAmount: {
    fontSize: 18,
    color: 'green',
  },
});

export default TransactionList;

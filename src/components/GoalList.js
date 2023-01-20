import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as All  from './Icon';
import {classifyCategories} from '../helpers/categorySorted';
const GoalList = (prop) => {
  prop = prop.prop;
  if(prop.goal==0){
    prop.goal="unset";
  }
  var percent = parseFloat(prop.amount)/parseFloat(prop.goal)*100;
  percent = percent.toFixed(2); 
    return (

        <View style={styles.cellContainer}>
        <Image source={All[styles.name]} style={styles.name} />
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{prop.name.toUpperCase()}</Text>
            <Text style={styles.dateText}>{"Limit: ₹"+prop.goal}</Text>
        </View>
        <View style={styles.textContainerRight}>
            <Text  style={[styles.amountText]}>{" ₹"+prop.amount}</Text>
            <Text style={styles.dateText}>{" ("+percent+"% )"}</Text>
        </View>
        </View>
    
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin:5,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 0.2,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
    backgroundColor: 'rgba(255, 241, 240,0.5)',
  },
  textContainer: {
    flex: 1,
  },
  textContainerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'headFontEnglish',
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'noteFontEnglish',

  },
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  amountText: {
    fontSize: 22,
    fontFamily: 'headFontEnglish',
  },
});

export default GoalList;

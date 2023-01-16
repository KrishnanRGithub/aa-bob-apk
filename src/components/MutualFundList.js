// //              "amc":i["amc"] ,
// "fundType":i["fundType"] ,
// "amount":i["amount"] ,
// "closingUnits":i["closingUnits"],
// "navDate":i["navDate"],
// "type":i["type"] 
import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as All  from './Icon';

const MutualFundList = (prop) => {

    prop=prop.prop;
    
    var typeColor="orange";
    if(prop.type=="SELL"){
        typeColor="green";
    }else if(prop.type=="BUY"){
        typeColor="maroon";
    }
    
    return (
    <View style={styles.cellContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{prop.amc}</Text>
        <Text style={styles.dateText}>{prop.isin}</Text>
        <Text style={styles.dateText}>{prop.closingUnits}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  rateContainer: {
    justifyContent: 'flex-end',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
},
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  unitText: {
    fontSize: 14,
    color: 'gray',
    textAlign:"right",
},
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  amountText: {
    fontWeight:"bold",
    fontSize: 18,
  },
});

export default MutualFundList;

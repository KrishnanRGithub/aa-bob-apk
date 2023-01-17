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
        <Text style={styles.isinText}>{prop.isin+" | "+prop.schemeCode}</Text>
        <Text style={styles.unitText}>{prop.closingUnits} Qty</Text>
      </View>
      <View>
        <Text  style={styles.navText}>NAV.</Text>
        <Text  style={styles.amountText}>{"₹"+prop.nav}</Text>
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
  textContainer: {
    flex: 1,
  },
  rateContainer: {
    justifyContent: 'flex-end',
  },
  nameText: {
    fontSize: 16,
    fontFamily:"noteFontEnglish"
  },
  isinText: {
    fontSize: 14,
    color: 'gray',
    fontFamily:"noteFontEnglish"
  },
  unitText: {
    fontSize: 14,
    color: 'gray',
    fontFamily:"noteFontEnglish"
  },
  amountText: {
    fontSize: 28,
    marginRight:5,
    fontFamily:"noteFontEnglish"
  },
  navText:{
    marginTop:7,
    marginBottom:-5,
    textAlign:"right",
    marginRight:5,
    fontFamily:"noteFontEnglish",
    color:"gray"
  }
});

export default MutualFundList;

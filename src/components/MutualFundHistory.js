// //              "amc":i["amc"] ,
// "fundType":i["fundType"] ,
// "amount":i["amount"] ,
// "closingUnits":i["closingUnits"],
// "navDate":i["navDate"],
// "type":i["type"] 
import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as All  from './Icon';

const MutualFundHistory = (prop) => {

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
        <View style={{flexDirection:"row"}}>
            <Text style={styles.nameText}>{prop.amc}</Text>
            <Text style={{...styles.typeText,backgroundColor:typeColor}}>{prop.type}</Text>
        </View>
        <Text style={{...styles.dateText, fontWeight:"500"}}>{prop.navDate}</Text>
      </View>
      <View style={styles.rateContainer}>
      <Text  style={styles.amountText}>{"₹"+prop.amount}</Text>
      <Text style={{...styles.dateText, fontWeight:"500"}}>{"Closing : "+prop.closingUnits+" units"}</Text>

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
    fontFamily:"noteFontEnglish"
  },
  typeText: {
    fontSize: 16,
    marginLeft:5,
    paddingBottom:0,
    fontFamily:"noteFontEnglish",
    color:"white",
    paddingHorizontal:5,
    borderRadius:5,
},
  dateText: {
    fontSize: 14,
    color: 'gray',
    fontFamily:"noteFontEnglish"
  },
  unitText: {
    fontSize: 14,
    color: 'gray',
    textAlign:"right",
    fontFamily:"noteFontEnglish"
},
  timeText: {
    fontSize: 14,
    color: 'gray',
    fontFamily:"noteFontEnglish"
  },
  amountText: {
    fontSize: 22,
    textAlign:"right",
    fontFamily:"noteFontEnglish"
  },
});

export default MutualFundHistory;

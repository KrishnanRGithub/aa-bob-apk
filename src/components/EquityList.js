// {"dateOfInvestment": "2004-04-12", "issuerName": "HCL Technologies Ltd", "rate": "1021.97", "timeOfInvestment": "13:20:00-05:00", "units": "34","lastTradedPrice"}


import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as All  from './Icon';

const EquityList = (prop) => {

    prop=prop.prop;
    var ratio = (parseFloat(prop.lastTradedPrice)-parseFloat(prop.rate))/parseFloat(prop.rate);
    ratio=ratio*100;
    ratio=ratio.toFixed(2);
    var ratioColor="black";
    var ratio2="";
    if(ratio>0){
        ratio2="+"+ratio.toString()+"%";
        ratioColor="green";
    }else{
        ratio2=ratio.toString()+"%";
        ratioColor="maroon";
    }
    let diffGain = (parseFloat(prop.rate)*parseFloat(prop.units))*(ratio/100)
    if(diffGain>0){
        diffGain="+"+diffGain.toFixed(2).toString();
    }else{
        diffGain=diffGain.toFixed(2).toString();
    }
    return (
    <View style={styles.cellContainer}>
      <View style={styles.textContainer}>
        <View>
            <Text style={styles.unitText}>{prop.units+" Qty · Avg "+prop.rate}</Text>
            <Text style={styles.nameText}>{prop.issuerName}</Text>
            <Text style={styles.unitText}>{"Invested "+parseFloat(prop.rate)*parseFloat(prop.units)}</Text>
        </View>
        {/* <Text style={styles.dateText}>{prop.dateOfInvestment}</Text> */}
      </View>
      <View style={styles.rateContainer}>
      <Text style={{...styles.ratioText,color:ratioColor,alignSelf:"flex-end"}}>{ratio2}</Text>
        <Text  style={{...styles.amountText,color:ratioColor}}>{diffGain}</Text>
        <Text style={{...styles.unitText,alignSelf:"flex-end"}}>{"LTP "+parseFloat(prop.lastTradedPrice)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 0.2,
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
    fontFamily:"headFontEnglish"
  },
  ratioText: {
    fontSize: 12,
    fontWeight: 'bold',
},
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  unitText: {
    fontSize: 14,
    color: 'gray',
    fontFamily:"noteFontEnglish"
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

export default EquityList;

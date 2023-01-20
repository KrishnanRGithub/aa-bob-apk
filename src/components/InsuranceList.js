import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image,Alert } from 'react-native';
import * as All  from './Icon';
const InsuranceList = (prop) => {
  prop = prop.prop;
  var paybackAmount = parseFloat(prop.return) + (parseFloat(prop.premium) * parseFloat(prop.duration));
  paybackAmount=paybackAmount.toFixed(2)
    return (
      <TouchableOpacity onPress={() => Alert.alert("Success",'Your insurance request from '+prop.bankName+" for a premium of "+prop.premium+"INR p.a is recieved.")}>
          <View style={styles.cellContainer}>

      <Image source={All[prop.img]} style={styles.icon} />
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{prop.bankName}</Text>
            <Text style={styles.dateText}>{"ROP : "+prop.return+"%"}</Text>
        </View>
        <View style={{display:"flex",flexDirection:"column"}}>
            <Text  style={[styles.dateText]}>{"coverage"}</Text>
            <Text  style={[styles.amountText]}>{paybackAmount}</Text>
        </View>
        </View>
            

    </TouchableOpacity>
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
    width: 100,
    height: 50,
    marginRight: 16,
    borderRadius:5,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
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
    fontSize: 18,
    fontFamily: 'headFontEnglish',
  }, 
});

export default InsuranceList;

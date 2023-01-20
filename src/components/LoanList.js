import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image,Alert } from 'react-native';
import * as All  from './Icon';
const LoanList = (prop) => {
  prop = prop.prop;
  var paybackAmount = parseFloat(prop.amount) + (parseFloat((prop.amount)) * parseFloat(prop.interestRate) * parseFloat(prop.duration))/100;
  paybackAmount=paybackAmount.toFixed(2)
    return (
      <TouchableOpacity onPress={() => Alert.alert("Success",'Your loan request from '+prop.bankName+" @"+prop.interestRate+" for a duration of "+prop.duration+" is recieved.")}>
          <View style={styles.cellContainer}>

      <Image source={All[prop.img]} style={styles.icon} />
        <View style={styles.textContainer}>
        <Text style={styles.nameText}>{prop.bankName}</Text>
        <Text style={styles.dateText}>{"Payback: Rs."+paybackAmount}</Text>
        </View>
        <Text  style={[styles.amountText]}>{prop.interestRate+"%"}</Text>
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

export default LoanList;

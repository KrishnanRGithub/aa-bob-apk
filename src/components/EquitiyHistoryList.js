// ({
//     "symbol": i["symbol"],
//     "exchange": i["exchange"],
//     "dateOfTransaction": d[0],
//     "timeOfTransaction": d[1],
//     "equityCategory": i['equityCategory'],
//     "rate": i['rate'],
//     "tradeValue": i['tradeValue'],
//     "type": i['type'],
//     "units": i['units'],
//   })


import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EquityHistoryList = (prop) => {

    prop=prop.prop;
    
    // var typeColor="black";
    // if(prop.type=="SELL"){
    //     typeColor="green";
    // }else{
    //     typeColor="maroon";
    // }
    
    return (
    <View style={styles.cellContainer}>
      <View style={styles.textContainer}>
        <View>
            <Text style={styles.nameText}>{prop.symbol+" "+prop.exchange}</Text>
            <Text style={{...styles.typeText}}>{prop.equityCatgory}</Text>
        </View>
        <Text style={styles.dateText}>{prop.dateOfTransaction}</Text>
      </View>
      <View style={styles.rateContainer}>
      <Text  style={styles.amountText}>{"₹"+prop.rate}</Text>
        <Text style={styles.unitText}>{prop.units+" units"}</Text>
      </View>
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

export default EquityHistoryList;

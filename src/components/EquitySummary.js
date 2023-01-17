import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';


const EquitySummary = (prop) => {
  prop=prop.prop
  var invested=0
  var current=0
  for( var i in prop){
    invested = invested+ parseFloat(prop[i].rate)*parseFloat(prop[i].units);
    current = current+ parseFloat(prop[i].lastTradedPrice)*parseFloat(prop[i].units);
  }
  invested = invested.toFixed(2)
  current = current.toFixed(2)
  var pl = current-invested
  pl = pl.toFixed(2)
  var plRatio=(pl*100/invested).toFixed(2).toString()+"%"; 
  var colorPl="black"
  var plRatio2=""
  var pl2=""
  if(pl>0){
    plRatio2="+"+plRatio
    pl2="+"+pl
    colorPl="darkgreen"
  }else{
    plRatio2=plRatio
    pl2=pl  
    colorPl="maroon"
  }
  return (
    <View style={styles.container}>
    <View style={styles.amountContainer}>
        <View style={styles.dataContainer}>
            <Text style={{...styles.label}}>Invested</Text>
            <Text style={styles.value}>{invested}</Text>
        </View>
        <View style={styles.dataContainer}>
            <Text style={{...styles.label}}>Current Value</Text>
            <Text style={styles.value}>{current}</Text>
        </View>
    </View>
    <View style={styles.amountContainer}>
            <Text style={styles.plLabel}>P&L</Text>
            <View style={{...styles.plContainer}}>
                <Text style={{color:colorPl, ...styles.plValue}}>{pl2}</Text>
                <Text style={{color:colorPl, ...styles.plPercent}}>({plRatio2})</Text>
            </View>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(255, 241, 240,0.5)',
        padding: 10,
        margin: 10,
        paddingHorizontal:20,
        borderRadius:5,
        marginHorizontal:15,
    },
    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      fontWeight: '500',
      fontFamily:"noteFontEnglish",
      color:"gray"
    },
    dataContainer:{
        width:"50%",
        marginBottom:10,
    },
    plLabel:{
        width:"50%",
        fontFamily:"noteFontEnglish",
        color:"gray",
        fontSize:24,
        fontWeight:"600"
    },
    plContainer:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    plValue:{
        width:"50%",
        fontFamily:"noteFontEnglish",
        fontSize:20,   
    },
    plPercent:{
      fontSize:12,
      fontWeight:"600",
      textAlign: 'right',

    },
    value: {
      flex: 1,
      alignSelf: 'flex-start',
      fontSize:22,
      textAlign: 'right',
      fontFamily:"noteFontEnglish"
    },
  });
  
export default EquitySummary;
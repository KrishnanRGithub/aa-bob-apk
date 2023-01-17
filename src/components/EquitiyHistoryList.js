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
    var colorType="black";
    if(prop.type=="BUY"){
      colorType="maroon";
    }else if (prop.type=="SELL"){
      colorType="darkgreen";
    }
    var temp =prop.type
    if(prop.equityCategory!="EQUITY"){
      temp = prop.type+"  "+prop.instrumentType+"  "
      if(prop.instrumentType=="OPTIONS"){
        temp=prop.type+" "+prop.optionType;
      }
      colorType="#996600"
    }else{
      temp=prop.type+" "+"EQUITY"
    }
    temp=temp.trim("")
    return (
    <View style={styles.cellContainer}>
      <View style={styles.textContainer}>
        <View>
            <Text style={styles.nameText}>{prop.symbol+" | "+prop.exchange}</Text>
            <Text style={[{...styles.typeText,color:colorType}]}>{temp}</Text>
            <Text style={styles.dateText}>{prop.dateOfTransaction}</Text>

        </View>
      </View>
      <View style={styles.rateContainer}>
      <Text  style={styles.amountText}>{prop.tradeValue}</Text>
        <Text style={styles.unitText}>{prop.units+" Qty · "+prop.rate}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingVertical:12,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 0.2,
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
    // fontWeight: 'bold',
  },
  typeText: {
    fontFamily:"headFontEnglish",
    fontSize: 16,
    fontWeight: '800',
    alignSelf:"flex-start",

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
    // fontWeight:"bold",
    alignSelf:"flex-end",
    fontSize: 18,
    fontFamily:"headFontEnglish"
  },
});

export default EquityHistoryList;





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


// import React,{useState} from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const EquityHistoryList = (prop) => {

//     prop=prop.prop;
//     var colorType="black";
//     if(prop.type=="BUY"){
//       colorType="maroon";
//     }else if (prop.type=="SELL"){
//       colorType="darkgreen";
//     }
//     var temp =prop.type
//     if(prop.equityCategory!="EQUITY"){
//       temp = prop.type+"  "+prop.instrumentType+"  "
//       if(prop.instrumentType=="OPTIONS"){
//         temp=prop.type+"  "+prop.optionType;
//       }
//       colorType="#996600"
//     }
//     temp=temp.trim("")
//     return (
//     <View style={styles.cellContainer}>
//       <View style={styles.textContainer}>
//         <View>
//             <Text style={styles.nameText}>{prop.symbol+" | "+prop.exchange}</Text>
//             <Text style={[{...styles.typeText,backgroundColor:colorType}]}>{temp}</Text>
//             <Text style={styles.dateText}>{prop.dateOfTransaction}</Text>

//         </View>
//       </View>
//       <View style={styles.rateContainer}>
//       <Text  style={styles.amountText}>{prop.tradeValue}</Text>
//         <Text style={styles.unitText}>{prop.units+" Qty · "+prop.rate}</Text>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cellContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     paddingVertical:12,
//     // borderBottomColor: 'lightgray',
//     // borderBottomWidth: 0.2,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   rateContainer: {
//     justifyContent: 'flex-end',
//   },
//   nameText: {
//     fontSize: 16,
//     fontFamily:"noteFontEnglish"
//     // fontWeight: 'bold',
//   },
//   typeText: {
//     fontFamily:"headFontEnglish",
//     fontSize: 16,
//     fontWeight: '800',
//     color:"white",
//     alignSelf:"flex-start",
//     paddingHorizontal:4,
//     borderRadius:4,
// },
//   dateText: {
//     fontSize: 14,
//     color: 'gray',
//     fontFamily:"noteFontEnglish"
//   },
//   unitText: {
//     fontSize: 14,
//     color: 'gray',
//     textAlign:"right",
//     fontFamily:"noteFontEnglish"
// },
//   timeText: {
//     fontSize: 14,
//     color: 'gray',
//     fontFamily:"noteFontEnglish"
//   },
//   amountText: {
//     // fontWeight:"bold",
//     alignSelf:"flex-end",
//     fontSize: 18,
//     fontFamily:"headFontEnglish"
//   },
// });

// export default EquityHistoryList;

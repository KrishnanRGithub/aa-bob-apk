import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const MonthYearPicker = ({currDate,setDate}) => {

  const dictionary ={"January":"01","February":"02",'March':"03", 'April':"04", 'May':"05", 'June':"06", 'July':"07", 'August':"08", 'September':"09", 'October':"10", 'November':"11", 'December':"12"}
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentYear = new Date().getFullYear();
  let years=[(currentYear).toString()]

  for(let i=1;i<20;i++){
    years.push((currentYear-i).toString())
  }
 
  const [selectedMonth, setSelectedMonth] = useState(months[parseInt(currDate.split("-")[1])-1]);
  const [selectedYear, setSelectedYear] = useState(currDate.split("-")[0]);
  useEffect(() => {
    setDate(selectedYear+"-"+dictionary[selectedMonth])
    console.log(currDate)
  }, [selectedMonth, selectedYear]);
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedMonth}
        style={styles.pickerMonth}
        onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
      >
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={month} />
        ))}
      </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
        selectedValue={selectedYear}
        style={styles.pickerYear}
        onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
      >
        {years.map((year, index) => (
          <Picker.Item key={index} label={year} value={year} />
        ))}
      </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    marginHorizontal:30,
    marginTop:5,
    marginBottom:20,
  },
  pickerMonth:{
    width:Dimensions.get('screen').width*4/7-30,
    height:30
  },
  pickerYear:{
    width:Dimensions.get('screen').width*3/7-30,
    height:30
  },
  pickerContainer:{
    // borderBottomRadius:10,
    // borderColor:"black",
    // borderWidth:1,
  }
});
export default MonthYearPicker;
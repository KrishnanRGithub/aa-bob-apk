// const data = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43]
//       }
//     ]
//   };

//   <BarChart
//   style={graphStyle}
//   data={data}
//   width={screenWidth}
//   height={220}
//   yAxisLabel="$"
//   chartConfig={chartConfig}
//   verticalLabelRotation={30}
// />

import { BarChart } from "react-native-gifted-charts";

import { theme } from '../core/theme'
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { filterByDate,convertToDictionary } from "../helpers/categorySorted";
const AnalyticsBarChart = ({values,monthYear}) => {

  var dictionary = {"shopping":0,"entertainment":0,"bank":0,"income":0,"expense":0,"investment":0,"other":0};
  var filtered=filterByDate(values,monthYear);
  dictionary=convertToDictionary(filtered);
//   const data = {
//     labels: ["shopping","entertainment","bank","income","expense","investment","other"],
//     datasets: [
//       {
//         data: [dictionary["shopping"],dictionary["entertainment"],dictionary["bank"],dictionary["income"],dictionary["expense"],dictionary["investment"],dictionary["other"]]
//       }
//     ]
//   };
var data =[
     {value:dictionary['shopping'],label:'shopping'},
    {value:dictionary['entertainment'],label:'entertainment'},
    {value:dictionary['bank'],label:'bank'},
    {value:dictionary['income'],label:'income'},
    {value:dictionary['expense'],label:'expense'},
    {value:dictionary['investment'],label:'investment'},
    {value:dictionary['other'],label:'other'},
]

  return (
    <BarChart
    barWidth={22}
    noOfSections={3}
    barBorderRadius={4}
    frontColor="lightgray"
    data={data}
    yAxisThickness={0}
    xAxisThickness={0}
/>
  );
  
};

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginTop:10,
    marginBottom:20,
  },
  text: {
    fontSize: 13,
    color: "gray",
    fontFamily:'noteFontEnglish',
  }
});

export default AnalyticsBarChart;

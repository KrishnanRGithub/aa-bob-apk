

// import { BarChart } from "react-native-gifted-charts";

import { theme } from '../core/theme'
import React from 'react';
import { View, Text,StyleSheet ,Dimensions} from 'react-native';
import { filterByDate,convertToDictionary } from "../helpers/categorySorted";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { color } from 'react-native-reanimated';

const AnalyticsBarChart = ({values,monthYear}) => {

  var dictionary = {"shopping":0,"entertainment":0,"bank":0,"income":0,"expense":0,"investment":0,"other":0};
  var filtered=filterByDate(values,monthYear);
  dictionary=convertToDictionary(filtered);
  const data = {
    labels: ["Shopping","Entertainment","Bank","Income","Expense","Investment","Other"],
    datasets: [
      {
        data: [dictionary["shopping"],dictionary["entertainment"],dictionary["bank"],dictionary["income"],dictionary["expense"],dictionary["investment"],dictionary["other"]]
      },
      
    ]
  };
  const data3 = [
    {
      name: "Shopping",
      population:dictionary["shopping"],
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Entertainment",
      population:dictionary["entertainment"],  
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Bank",
      population:dictionary["bank"],     
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Income",
      population:dictionary["income"],      
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Expense",
      population:dictionary["expense"],
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Investment",
      population:dictionary["investment"],
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Other",
      population:dictionary["other"],
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
// var data =[
//      {value:dictionary['shopping'],label:'shopping'},
//     {value:dictionary['entertainment'],label:'entertainment'},
//     {value:dictionary['bank'],label:'bank'},
//     {value:dictionary['income'],label:'income'},
//     {value:dictionary['expense'],label:'expense'},
//     {value:dictionary['investment'],label:'investment'},
//     {value:dictionary['other'],label:'other'},
// ]
const chartConfig = {
  backgroundGradientFrom: "gray",
  backgroundGradientTo: "darkgray",
  backgroundGradientFromOpacity: 0.8,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
  barPercentage: 0.5,
};
  return (
<View>
<PieChart
  data={data3}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
/>
</View>

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

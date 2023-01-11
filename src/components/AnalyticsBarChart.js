

// import { BarChart } from "react-native-gifted-charts";

import TransactionList from './TransactionList';
import { FlatList } from 'react-native';
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
   var total = dictionary["shopping"]+dictionary["entertainment"]+dictionary["bank"]+dictionary["income"]+dictionary["expense"]+dictionary["investment"]+dictionary["other"]
        
  const data3 = [
    {
      name: "Shopping",
      amount:dictionary["shopping"],
      color: "#54a9ff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Entertainment",
      amount:dictionary["entertainment"],  
      color: "#Ff9108",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Bank",
      amount:dictionary["bank"],     
      color: "#fc7a99",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Income",
      amount:dictionary["income"],      
      color: "#baa9ff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Expense",
      amount:dictionary["expense"],
      color: "#fcdfaa",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Investment",
      amount:dictionary["investment"],
      color: "#864908",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Other",
      amount:dictionary["other"],
      color: "#095e8b",
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
  yAxisSuffix: "k",
};
  return (
<>
<PieChart
  data={data3}
  width={Dimensions.get("window").width} // from react-native
  height={220}
  chartConfig={chartConfig}
  accessor={"amount"}
  backgroundColor={"transparent"}
  avoidFalseZero={"true"}
/>
<FlatList
              data={filtered}
              renderItem={({ item, index }) => (
                <TransactionList key={index} prop={item}></TransactionList>
              )}
              keyExtractor={(item, index) => index.toString()}

            />
</>

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

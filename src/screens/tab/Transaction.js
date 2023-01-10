import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import { FlatList } from "react-native";
import DateRangePicker from "../../components/DateRangePicker";
import TransactionList from "../../components/TransactionList";
import LoadingScreen from "../../components/LoadingScreen";
import { fetchDataAA,getTransaction,storeTransaction } from "../../helpers/dataStore";
import FetchLoader from "../../components/FetchLoader";
import AppScreen from "../../components/AppScreen";
// import AnalyticsBarChart from "../../components/AnalyticsBarChart";
const config = require("../../../config");
export default function Transaction({ navigation }) {
  

  const [transaction, setTransaction] = useState(null);
  const [userDetails,setUserDetails] = useState(null);
  const [data, setData] = useState(null);
  const [activeScreen,setActiveScreen] = useState(0);

  const handleLoadMore = () => {
    // Load the next set of items here and add them to the list
    var newItem= transaction.slice(data.length,data.length+100)
    setData([...data, ...newItem]);
  };

  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once
  
  useEffect(() => {
    refreshTransactions().then(() => {
      console.log("Transaction set on load");
    });
  }, [userDetails]); 
  
  async function refreshTransactions(){
      try{
        let data =await fetchDataAA(userDetails['mobile'],"allTransactions")
        console.log("Setting transaction in TPage",data.data.length)
        setTransaction(data.data);
        setData(data.data.slice(0,100))
        storeTransaction(data.data)  ;
      }
      catch(err){
        console.log(err);
      } 
  }






  return (
    // <AppScreen prop={{onRefresh:()=>{refreshTransactions()},title:"Transactions",routes:[{"title":"Transactions"},{"title":"Analytics"}],activeRoute:activeScreen,setActiveRoute:setActiveScreen}} >
    <AppScreen prop={{onRefresh:()=>{refreshTransactions()},title:"Transactions",routes:null,activeRoute:activeScreen,setActiveRoute:setActiveScreen}} >
       {transaction==null?<FetchLoader></FetchLoader>:null}  
      {/* {transaction && transaction.map((i, index) => (
                  <TransactionList
                  key={index}
                  prop={i}
                  ></TransactionList>
              ))} */}

    {activeScreen==0?<FlatList
              data={data}
              renderItem={({ item, index }) => (
                <TransactionList key={index} prop={item}></TransactionList>
              )}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.9}
            />:null} 
      {/* {activeScreen==1&&transaction!=null?<AnalyticsBarChart
              values={transaction}
              monthYear={"2020-09"}

            />:null} */}
    </AppScreen>
  );
}



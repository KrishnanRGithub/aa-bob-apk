import React, { useEffect, useState } from "react";
import { fetchDataFI,storeEquity } from "../../helpers/dataStore";
import FetchLoader from "../../components/FetchLoader";
import { getSession } from "../../helpers/sessionHandler";
import EquityList from "../../components/EquityList";
import AppScreen from "../../components/AppScreen";
import { FlatList,Text } from "react-native";
import EquityHistoryList from "../../components/EquitiyHistoryList";
export default function Equities({ navigation }) {
  const [equities, setEquities] = useState(null);
  const [userDetails,setUserDetails] = useState(null);
  const [activeScreen,setActiveScreen] = useState(0);
  const [equityHistory,setEquityHistory] = useState(null);
  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once
  

  async function refreshEquities(){
    try{
      let data =await fetchDataFI(userDetails['mobile'],"equities")
      console.log(data)
      console.log("Setting equities in EPage")
      setEquities(data.data.summary);
      storeEquity(data.data.summary) ;
      setEquityHistory(data.data.all) ;
    }
    catch(err){
      console.log(err);
    } 
}

  useEffect(() => {
    refreshEquities().then(() => {
      console.log("Equities set on load");
    });
  }, [userDetails]); 

  return (
    <AppScreen prop={{onRefresh:()=>{refreshEquities()},title:"Equities",routes:[{"title":"Holdings"},{"title":"Transactions"}],activeRoute:activeScreen,setActiveRoute:setActiveScreen}}>
      {equities==null?<FetchLoader></FetchLoader>:null}  
      {activeScreen==0?<FlatList
          data={equities}
          renderItem={({ item, index }) => (
            <EquityList key={index} prop={item}></EquityList>
          )}
          keyExtractor={(item, index) => index.toString()}
        />:null}
      {activeScreen==1?<FlatList
          data={equityHistory}
          renderItem={({ item, index }) => (
            <EquityHistoryList key={index} prop={item}></EquityHistoryList>
          )}
          keyExtractor={(item, index) => index.toString()}
        />:null}

      {/* {equities && equities.map((i, index) => (
                  <EquityList
                  key={index}
                  prop={i}
                  ></EquityList>
              ))} */}
    </AppScreen>
  );
}

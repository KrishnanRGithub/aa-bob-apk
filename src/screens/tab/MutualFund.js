import React, { useEffect, useState } from "react";
import { fetchDataFI,storeMutualFund } from "../../helpers/dataStore";
import FetchLoader from "../../components/FetchLoader";
import { getSession } from "../../helpers/sessionHandler";
import MutualFundHistory from "../../components/MutualFundHistory";
import MutualFundList from "../../components/MutualFundList";
import AppScreen from "../../components/AppScreen";
import { FlatList } from "react-native";
export default function MutualFund({ navigation }) {

  const [mf, setMF] = useState(null);
  const [mfHistory, setMFHistory] = useState(null);
  const [userDetails,setUserDetails] = useState(null);
  const [activeScreen,setActiveScreen] = useState(0);

  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once
  

  async function refreshMF(){
    try{
      let data =await fetchDataFI(userDetails['mobile'],"mutualfund")
      console.log(data)
      console.log("Setting MF in EPage")
      setMF(data.data.summary);
      setMFHistory(data.data.all);
      storeMutualFund(data.data.summary)  
    }
    catch(err){
      console.log(err);
    } 
}

  useEffect(() => {
    refreshMF().then(() => {
      console.log("Equities set on load");
    });
  }, [userDetails]); 

  return (

    <AppScreen prop={{onRefresh:()=>{refreshMF()},title:"Mutual Funds",routes:[{"title":"Holdings"},{"title":"Transactions"}],activeRoute:activeScreen,setActiveRoute:setActiveScreen}}>
              {mfHistory==null?<FetchLoader></FetchLoader>:null}  
              {activeScreen==0?<FlatList
                  data={mf}
                  renderItem={({ item, index }) => (
                    <MutualFundList key={index} prop={item}></MutualFundList>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              :null}
              {activeScreen==1?<FlatList
          data={mfHistory}
          renderItem={({ item, index }) => (
            <MutualFundHistory key={index} prop={item}></MutualFundHistory>
          )}
          keyExtractor={(item, index) => index.toString()}
        />:null}
            {/* {mf && mf.map((i, index) => (
                        <MutualFundHistory
                        key={index}
                        prop={i}
                        ></MutualFundHistory>
                    ))} */}
    </AppScreen>
  );
}

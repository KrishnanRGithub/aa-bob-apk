import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import AppScreen from "../../components/AppScreen";
import CarrosalCard from "../../components/CarrosalCard";
import ProfileButtonSet from "../../components/ProfileButtonSet";
import { storeAccounts } from "../../helpers/dataStore";
import { fetchDataAA } from "../../helpers/dataStore";
import { View, Text } from "react-native";
import { getGoals,storeGoals } from "../../helpers/dataStore";
import GoalList from "../../components/GoalList";
export default function Profile({ navigation }) {
  const [userDetails,setUserDetails] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const monthlySpending={"shopping":12000,"entertainment":8000,"expense":7000,"investment":23110,"other":5000}
  const goals={"shopping":0,"entertainment":0,"expense":0,"investment":0,"other":0}
  const keys= Object.keys(monthlySpending);
  const [varGoals,setVarGoals]=useState(null);
  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
        getGoals().then((val2)=>{
        { 
            console.log("Goals in APage",val2)
            goals["shopping"]=val2['shopping']
            goals["entertainment"]=val2['entertainment']
            goals["other"]=val2['other']
            goals["expense"]=val2['expense']
            goals["investment"]=val2['investment']
            setVarGoals(goals)
        }       
    })
    });
  }, []); // empty array ensures that the effect only runs once
  
  
  useEffect(() => {
    refreshAccounts().then(() => {
      console.log("Accounts set on load");
    });
  }, [userDetails]); 
  
  async function refreshAccounts(){
    try{
      let data =await fetchDataAA(userDetails['mobile'],"accounts")
      console.log("Setting accounts in APage",data.data)
      setAccounts(data.data);
      storeAccounts(data.data)  ;
    }
    catch(err){
      console.log(err);
    } 
  }
  return (
    <AppScreen prop={{onRefresh:()=>{console.log("Refresh in profile")},title:"Home", routes:null}} >
    <CarrosalCard/>
    <ProfileButtonSet navigation={navigation}/>
    <View style={{ borderWidth: 1, margin:10,marginTop:20, borderRadius:20,padding:10, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text style={{ position: 'absolute',backgroundColor:"white", top: -10, left: 10, paddingHorizontal:4, fontFamily:"noteFontEnglish", fontSize:20 }}>{"Monthly Spendings"}</Text>
      <GoalList
        prop={{amount:monthlySpending["shopping"],name:"shopping",goal:varGoals["shopping"]}}
        />
            
            <GoalList
        prop={{amount:monthlySpending["entertainment"],name:"entertainment",goal:varGoals["entertainment"]}}
        />  
        <GoalList
        prop={{amount:monthlySpending["investment"],name:"investment",goal:varGoals["investment"]}}
        />  
        <GoalList
        prop={{amount:monthlySpending["other"],name:"other",goal:varGoals["other"]}}
        />  
        <GoalList
        prop={{amount:monthlySpending["expense"],name:"expense",goal:varGoals["expense"]}}
        />
 
    </View>
  </AppScreen>
  );
}

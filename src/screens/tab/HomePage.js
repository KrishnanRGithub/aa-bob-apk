import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import AppScreen from "../../components/AppScreen";
import CarrosalCard from "../../components/CarrosalCard";
import ProfileButtonSet from "../../components/ProfileButtonSet";
import { storeAccounts } from "../../helpers/dataStore";
import { fetchDataAA } from "../../helpers/dataStore";
import { View, Text } from "react-native";
export default function Profile({ navigation }) {
  const [userDetails,setUserDetails] = useState(null);
  const [accounts, setAccounts] = useState(null);

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
    <View style={{ borderWidth: 1, margin:10, borderRadius:20,height:100, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text style={{ position: 'absolute',backgroundColor:"white", top: -10, left: 10, paddingHorizontal:4, fontFamily:"noteFontEnglish", fontSize:20 }}>{"Monthly Spendings"}</Text>

    </View>
  </AppScreen>
  );
}

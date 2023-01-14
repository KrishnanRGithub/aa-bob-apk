import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import BackScreen from "../../components/BackScreen";
import { Text } from "react-native-paper";
import { storeAccounts } from "../../helpers/dataStore";
import { fetchDataAA } from "../../helpers/dataStore";
import AccountsCard from "../../components/AccountsCard";
export default function AccountDetails({ navigation }) {
  const [userDetails,setUserDetails] = useState(null);
  const [accounts, setAccounts] = useState(null);
  
  useEffect(() => {
    getSession("user").then((val) => {
      
      setUserDetails(val);
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
    <BackScreen prop={{onPress:()=>{navigation.goBack()},title:"Accounts"}} >
         {accounts && accounts.map((i, index) => (
                        <AccountsCard
                        key={index}
                        prop={i}
                        ></AccountsCard>
                    ))}
    </BackScreen>
  );
}

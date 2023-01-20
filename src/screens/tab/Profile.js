import React, { useEffect, useState } from "react";
import ListButton from "../../components/ListButton";
import { signoutSession, storeSession } from "../../helpers/sessionHandler";
import { getSession } from "../../helpers/sessionHandler";
import AppScreen from "../../components/AppScreen";
import Footer from "../../components/Footer";
import InfoText from "../../components/InfoText";
import LanguagePicker from "../../components/LanguagePicker";
import PersonalInfoCard from "../../components/PersonalInfoCard";
export default function Profile({ navigation }) {
  const [userDetails,setUserDetails] = useState(null);
  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once

  async function removeAAUserIdFromSession(){
    try{
      userDetails["trackingId"] = null;
      userDetails["referenceId"]=null;
      await storeSession("user",userDetails);
      console.log(await getSession("user"));
    }
    catch(err){
      console.log(err);
    } 
}
  return (
    <AppScreen prop={{onRefresh:()=>{console.log("Refresh in profile")},title:"Profile", routes:null}} >
        {userDetails==null?null:<PersonalInfoCard mobile={userDetails["mobile"]}/>}
        <ListButton 
              item={{text:"All Accounts",icon:"account-box"}} 
              onPress={()=>{navigation.navigate("AccountDetails");}} 
            /> 
        <ListButton 
              item={{text:"Allow Access",icon:"sync"}} 
              onPress={async ()=>{await removeAAUserIdFromSession();  navigation.navigate("StartScreen"); }} 
            />    
                             {/* <ListButton 
              item={{text:"Support",icon:"support-agent"}} 
              onPress={()=>{console.log("Support")}} 
            />  */}

        <ListButton 
              item={{text:"Set Limits",icon:"playlist-add-check"}} 
              onPress={()=>{navigation.navigate("SetGoals");}} 
            /> 
          <LanguagePicker/>
          <ListButton 
              item={{text:"Logout",icon:"logout"}} 
              onPress={()=>{signoutSession(); navigation.navigate("Login");}} 
            /> 
            {userDetails==null?null:<InfoText text={userDetails["_id"]}></InfoText>}
            {/* {userDetails==null?null:<InfoText text={userDetails["mobile"]}></InfoText>} */}
            <Footer/>
  </AppScreen>
  );
}

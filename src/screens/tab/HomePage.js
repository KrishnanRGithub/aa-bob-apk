import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import AppScreen from "../../components/AppScreen";
export default function Profile({ navigation }) {
  const [userDetails,setUserDetails] = useState(null);
  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once

  return (
    <AppScreen prop={{onRefresh:()=>{console.log("Refresh in profile")},title:"Home", routes:null}} >
    
  </AppScreen>
  );
}

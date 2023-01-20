import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import BackScreen from "../../components/BackScreen";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import { getGoals,storeGoals } from "../../helpers/dataStore";
import TextInput3 from "../../components/TextInput3";
import Button from "../../components/Button";
export default function SetGoals({ navigation }) {
    const {t, i18n} = useTranslation();
  const [userDetails,setUserDetails] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [goals, setGoals] = useState(0);
  const [shopping,setShopping]=useState(0);
  const [entertainment,setEntertainment]=useState(0);
  const [other,setOther]=useState(0);
  const [expense,setExpense]=useState(0);
  const [investment,setInvestment]=useState(0);
  useEffect(() => {
    getSession("user").then((val) => {
      setUserDetails(val);
        getGoals().then((val2)=>{
            setGoals(val2);
            console.log("Goals",val2);
            if(val2!=null)
        { 
            setShopping(val2['shopping']);
            setEntertainment(val2['entertainment']);
            setOther(val2['other']);
            setExpense(val2['expense']);
            setInvestment(val2['investment']);
        }else{
            setShopping(0);
            setEntertainment(0);
            setOther(0);
            setExpense(0);
            setInvestment(0);
            
        }        
    })
    });
  }, []); // empty array ensures that the effect only runs once
  
    async function saveGoal(){
        setGoals({
            "shopping":shopping,
            "entertainment":entertainment,
            "expense":expense,
            "investment":investment,
            "other":other
        })
        console.log("Goals",{
            "shopping":shopping,
            "entertainment":entertainment,
            "expense":expense,
            "investment":investment,
            "other":other
        });
        await storeGoals({
            "shopping":shopping,
            "entertainment":entertainment,
            "expense":expense,
            "investment":investment,
            "other":other
        })
    } 
  



  return (
    <BackScreen prop={{onPress:()=>{navigation.goBack()},title:"Set Limits"}} >
        <View style={{margin:15,padding:20}}>
          <TextInput3
                label={t("Shopping")}
                returnKeyType="next"
                value={shopping}
                onChangeText={(text) => setShopping(text)}
                keyboardType="number-pad"
            />
            <TextInput3
                label={t("Entertainment")}
                returnKeyType="next"
                value={entertainment}
                onChangeText={(text) => setEntertainment(text)} 
                keyboardType="number-pad"
            />
            <TextInput3
                label={t("Expense")}
                returnKeyType="next"
                value={expense}
                onChangeText={(text) => setExpense(text)}
                keyboardType="number-pad"
            />
            <TextInput3
                label={t("Investment")}
                returnKeyType="next"
                value={investment}
                onChangeText={(text) => setInvestment(text)}
                keyboardType="number-pad"
            />
            <TextInput3
                label={t("Other")}
                returnKeyType="next"
                value={other}
                onChangeText={(text) => setOther(text)}
                keyboardType="number-pad"
            />
             <Button mode="contained" onPress={saveGoal}>
            {t('Save Limit')}
            </Button>
           </View>






    </BackScreen>
  );
}

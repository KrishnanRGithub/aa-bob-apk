import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import BackScreen from "../../components/BackScreen";
import { Text } from "react-native-paper";
import Dropdown from "../../components/Dropdown";
import TextInput2 from "../../components/TextInput2";
import { useTranslation } from "react-i18next";
import { View,Alert } from "react-native";
import Button from "../../components/Button";
import InsuranceList from "../../components/InsuranceList";
import { ScrollView } from "react-native-gesture-handler";
export default function Insurance({ navigation }) {
  const insuranceList=[
    {"img":"hdfc","return":109.2,"bankName":"HDFC BANK"},
    {"img":"icici","return":108.6,"bankName":"ICICI BANK"},
    {"img":"bob","return":107.6,"bankName":"BANK OF BARODA"},
    {"img":"axis","return":108.2,"bankName":"AXIS BANK"},
    {"img":"indian","return":109.7,"bankName":"INDIAN BANK"},
    {"img":"bob","return":101.6,"bankName":"BANK OF BARODA"},
    {"img":"axis","return":118.2,"bankName":"AXIS BANK"},
    {"img":"indian","return":109.7,"bankName":"INDIAN BANK"},
  ]

  const [insurance,setInsuranceList] = useState(null);
    const dropdown = [
        { label: 'Vehicle', value: 'Vehicle' },
        { label: 'Housing', value: 'Housing' },
        { label: 'Life', value: 'Life' },
        { label: 'Travel', value: 'Travel' },
      ];
  const [userDetails,setUserDetails] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(dropdown[0].value);
  const [premium, setPremium] = useState("");
  const [duration, setDuration] = useState("");
  const {t, i18n} = useTranslation();

  const findInsurance = () => {
    console.log("Find insurance")
    if(premium.trim("")==""||duration.trim("")==""){
        Alert.alert("Warning","Please enter all the details")
        return
    }
    setInsuranceList(insuranceList)
  }

  useEffect(() => {
    getSession("user").then((val) => {
      
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once
  

  




  return (
    <BackScreen prop={{onPress:()=>{navigation.goBack()},title:"Insurance"}} >            
           <View style={{margin:15,padding:20, borderRadius:10}}>
           <Dropdown
            items={dropdown}
            selectedDropdown={selectedDropdown}
            onValueChange={(itemValue) => setSelectedDropdown(itemValue)}
            />
            <TextInput2
                label={t("Premium (p.a)")}
                returnKeyType="next"
                value={premium}
                onChangeText={(text) => setPremium(text)}
                keyboardType="number-pad"
            />
            <TextInput2
                label={t("Duration")}
                returnKeyType="next"
                value={duration}
                onChangeText={(text) => setDuration(text)}
                keyboardType="number-pad"
            />
            <Button mode="contained" onPress={findInsurance}>
            {t('Find insurance')}
            </Button>
           </View>

           <ScrollView style={{margin:10, marginTop:0}}>
           {insurance&&insurance.map((i, index) => (
                        <InsuranceList
                        key={index}
                        prop={{...i,premium:premium,duration:duration}}
                        ></InsuranceList>))}
           </ScrollView>
    </BackScreen>
    
  )
};
import React, { useEffect, useState } from "react";
import { getSession } from "../../helpers/sessionHandler";
import BackScreen from "../../components/BackScreen";
import { Text } from "react-native-paper";
import Dropdown from "../../components/Dropdown";
import TextInput2 from "../../components/TextInput2";
import { useTranslation } from "react-i18next";
import { View,Alert } from "react-native";
import Button from "../../components/Button";
import LoanList from "../../components/LoanList";
export default function Loans({ navigation }) {
  const loanList=[
    {"img":"hdfc","interestRate":9.2,"bankName":"HDFC BANK"},
    {"img":"icici","interestRate":8.6,"bankName":"ICICI BANK"},
    {"img":"bob","interestRate":7.6,"bankName":"BANK OF BARODA"},
    {"img":"axis","interestRate":8.2,"bankName":"AXIS BANK"},
    {"img":"indian","interestRate":9.7,"bankName":"INDIAN BANK"}
  ]

  const [loans,setLoanList] = useState(null);
    const dropdown = [
        { label: 'Personal', value: 'Personal' },
        { label: 'Vehicle', value: 'Vehicle' },
        { label: 'Housing', value: 'Housing' },
      ];
  const [userDetails,setUserDetails] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(dropdown[0].value);
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const {t, i18n} = useTranslation();

  const findLoan = () => {
    console.log("Find loan")
    if(amount.trim("")==""||duration.trim("")==""){
        Alert.alert("Warning","Please enter all the details")
        return
    }
    setLoanList(loanList)
  }

  useEffect(() => {
    getSession("user").then((val) => {
      
      setUserDetails(val);
    });
  }, []); // empty array ensures that the effect only runs once
  
  useEffect(() => {
    console.log("Added data")
  }, [userDetails]); 
  




  return (
    <BackScreen prop={{onPress:()=>{navigation.goBack()},title:"Loans"}} >            
           <View style={{margin:15,padding:20, borderRadius:10}}>
           <Dropdown
            items={dropdown}
            selectedDropdown={selectedDropdown}
            onValueChange={(itemValue) => setSelectedDropdown(itemValue)}
            />
            <TextInput2
                label={t("Amount")}
                returnKeyType="next"
                value={amount}
                onChangeText={(text) => setAmount(text)}
                keyboardType="number-pad"
            />
            <TextInput2
                label={t("Duration")}
                returnKeyType="next"
                value={duration}
                onChangeText={(text) => setDuration(text)}
                keyboardType="number-pad"
            />
            <Button mode="contained" onPress={findLoan}>
            {t('Find Loans')}
            </Button>
           </View>

           <View style={{margin:10, marginTop:0}}>
           {loans&&loans.map((i, index) => (
                        <LoanList
                        key={index}
                        prop={{...i,duration:duration,amount:amount}}
                        ></LoanList>))}
           </View>
    </BackScreen>
    
  )
};
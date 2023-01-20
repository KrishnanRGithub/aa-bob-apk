import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { StyleSheet } from 'react-native';
import RedirectLink from "../components/RedirectLink";
import Toast from "../components/Toast";
import TextInput from "../components/TextInput";
import PinField from "../components/PinField";
import { numberValidator } from "../helpers/numberValidator";
import { Keyboard } from 'react-native';
import LoadingScreen from "../components/LoadingScreen";
import { useTranslation } from "react-i18next";
const config = require("../../config");


// open your gateway

export default function OtpScreen({ navigation,route }) {
  // clearSession("user").then(()=>{
  //   pass=1
  // })
  const {t, i18n} = useTranslation();
  const [pin, setPin] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState({message:null, type:"success"});
  const [renderPage, setRenderPage] = useState(true);
  const pass = route.params.pass
  const repass = route.params.repass
  const mobile = route.params.mobile

  const doSignup = async () => {
    Keyboard.dismiss();
    setLoading(true)
    setShowToast(false)
    try{

      const validNumber = numberValidator(mobile);
      if (!validNumber) {
        setToastMsg({message:"Invalid mobile number",type:"error"})
        setShowToast(true);
        setLoading(false);
        return;
      } 

      if(pass.length!=4){
        setToastMsg({message:"Fill the PIN",type:"error"})
        setShowToast(true);
        setLoading(false);
        return;
      }
      if(pass!==repass){
        setToastMsg({message:"Pin doesnt match",type:"error"})
        setShowToast(true);
        setLoading(false);
        return;
      }
     
      // validate pin so make api call for that
      let url = "http://"+config.server_url + "/user/signup" ;
      const response = await fetch(url,  {
        method: "POST", 
        body: JSON.stringify({
              mobile: mobile,
              pin: pass,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
  
      let msg = await response.json();
      setToastMsg({message:msg["msg"],type:msg["type"]})
      setShowToast(true);
      setLoading(false);  
      navigation.navigate("Login");
      
    } catch (err) {
      console.error(err);
      setToastMsg({message:"Unexpected Error",type:"error"})
      setShowToast(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }

  };
  if(isLoading){
    return<><LoadingScreen></LoadingScreen></>
  }
  if(renderPage==false){
    return<></>
  }
  return (
    <Background>
      <Logo />
      <Header>{t('Verification')}</Header>
      <Paragraph>
        {t("Please enter the OTP sent to your mobile number")}
      </Paragraph>
      <PinField
        onChange={text => setPin(text)}
        value={pin}
        description={t(`Enter your OTP`)}
        keyboardType="number-pad"
      />
      <Button mode="contained" onPress={doSignup}>
        {t("Submit")}
      </Button>
      <Button mode="contained" onPress={ ()=>{ navigation.navigate("Signup")}}>
        {t("Cancel")}
      </Button>

      <RedirectLink 
        toPage="OtpScreen"
        linkText={t("Click here to resend")}
      />
      {/* {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null} */}
    </Background>
  );
}

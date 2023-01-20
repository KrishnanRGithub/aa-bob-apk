import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Toast from "../components/Toast";
import TextInput from "../components/TextInput";
import PinField from "../components/PinField";
import RedirectLink from "../components/RedirectLink";
import { numberValidator } from "../helpers/numberValidator";
import { Keyboard } from 'react-native';
import { storeSession,isSessionSet } from "../helpers/sessionHandler";
import LoadingScreen from "../components/LoadingScreen";
import { useTranslation } from "react-i18next";

const config = require("../../config");

export default function Signup({ navigation }) {
    const {t, i18n} = useTranslation();
    const [number, setNumber] = useState("");
    const [pin, setPin] = useState("");
    const [repin, setRepin] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState({message:null, type:"success"});
    const [renderPage, setRenderPage] = useState(false);

       
    useEffect(() => {
      return navigation.addListener("focus",()=>{
        isSessionSet("user").then((val)=>{
          if (val){
             console.log(val)
             setRenderPage(false)
             navigation.navigate("StartScreen");
          }else{
            setShowToast(false)
            setNumber("")
            setLoading(false)
            setPin("")
            setRepin("")
            setRenderPage(true)
          }
        })
      })
    }, [navigation]);
    
    const doSignup = async () => {
      Keyboard.dismiss();
      setLoading(true)
      setShowToast(false)
      try{

        const validNumber = numberValidator(number);
        if (!validNumber) {
          setToastMsg({message:"Invalid mobile number",type:"error"})
          setShowToast(true);
          setLoading(false);
          return;
        } 

        if(pin.length!=4){
          setToastMsg({message:"Fill the PIN",type:"error"})
          setShowToast(true);
          setLoading(false);
          return;
        }
        if(pin!==repin){
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
                mobile: number,
                pin: pin,
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

    const doOtp= async () => {
      navigation.navigate("OtpScreen", {mobile:number,pass:pin, repass:repin});

    }

    if(isLoading){
      return<><LoadingScreen></LoadingScreen></>
    }
    if(renderPage==false){
      return<></>
    }
  return (
    <Background>
    <Logo />
    <Header>{t('Create Account')}</Header>
    <TextInput
      label={t("Mobile Number")}
      returnKeyType="next"
      value={number}
      onChangeText={(text) => setNumber(text)}
      error={!!number.error}
      errorText={number.error}
      keyboardType="number-pad"
    />
    <PinField
      onChange={text => setPin(text)}
      value={pin}
      description={t(`Set 4 Digit PIN`)}
      keyboardType="number-pad"
    />
    <PinField
      onChange={text => setRepin(text)}
      value={repin}
      description={t(`Confirm 4 Digit PIN`)}
      keyboardType="number-pad"
    />
    <Button mode="contained" onPress={doOtp}>
      {t('Create Account')}
    </Button>
    <RedirectLink 
      toPage="Login"
      linkText={t("Existing User ? Click here to login")}
    />
    {showToast && (<Toast message= {toastMsg.message} type={toastMsg.type} />)}
    {/* {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null} */}
  </Background>
  );
}

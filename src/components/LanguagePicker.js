import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import {useTranslation} from 'react-i18next';

const LanguagePicker = ({ options=['English', 'हिंदी', 'தமிழ்'], onValueChange=null }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const {t, i18n} = useTranslation();
  
const [currentLanguage,setLanguage] =useState('en');

const changeLanguage = value => {
  i18n
    .changeLanguage(value)
    .then(() => setLanguage(value))
    .catch(err => console.log(err));
};
  const langMap={
    "English": "en",
    "हिंदी": "hi",
    "தமிழ்": "ta"
  }
  if(onValueChange==null){
    onValueChange=(itemValue)=>{
      console.log("itemValue",itemValue)
      console.log("langMap[itemValue]",langMap[itemValue])
      i18n.changeLanguage(langMap[itemValue])
    }
  }
  return (
    <View    style={{paddingLeft: 4}}    >
         <Picker
            style={{fontFamily:"noteFontEnglish"}}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => {
              setSelectedValue(itemValue);
              onValueChange(itemValue);
              setIsVisible(false);
            }}>
            {options.map((option) => (
              <Picker.Item key={option} label={option} value={option} style={{fontFamily:"noteFontEnglish", fontSize: 18 }}/>
            ))}
          </Picker>
    </View>
  );
};

export default LanguagePicker;

import { theme } from '../core/theme'
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ImageInput from './ImageInput';
import config from '../../config';
const PersonalInfoCard = ({ mobile, image=null}) => {
mobile=mobile.trim(" ")
  return (
    <View style={styles.container}>

        <View style={styles.textContainer}>
                <Text style={styles.mobile}>{mobile}</Text>
                <Text style={styles.aa_id}>{mobile+"@"+config.aa_id}</Text>
        </View>
        <ImageInput src={image}/>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    borderRadius:15,
    backgroundColor: 'rgba(255, 242, 242,0.5)',
    margin:15,
    padding:10,
    paddingHorizontal:15,
    paddingVertical:10,
    marginTop:10,
},
  textContainer: {
    justifyContent: 'center',
  },
  mobile: {
    fontSize: 28,
    fontFamily:'noteFontEnglish',
  },
  aa_id:{
    fontFamily:'noteFontEnglish',
    color:"gray"
  }
});

export default PersonalInfoCard;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import  {theme} from '../core/theme'

const FlatButton = ({ title, onPress, backgroundColor='rgba(242, 82, 46,0.85)' }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        padding: 15,
        margin:5,
        flex:1,
        alignItems: 'center',
        borderRadius:5,
        marginBottom:2,
      }}
      onPress={onPress}
    >
      <Text style={{ color: 'white', fontSize:20,fontFamily:"noteFontEnglish" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;
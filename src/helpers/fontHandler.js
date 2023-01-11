import {useFont} from 'expo-font';
export default function loadFonts(){
    const [fontsLoaded] = useFonts({
        'noteFontEnglish': require('../assets/note.ttf'),
        'headFontEnglish': require('../assets/head.ttf'),
        'titleFontEnglish': require('../assets/title.ttf'),
      
      });  
    while(!fontsLoaded){
        continue;
    }
    return true;
}
import '../../i18n';
import {useTranslation} from 'react-i18next';
const {t, i18n} = useTranslation();
  
const [currentLanguage,setLanguage] =useState('en');

const changeLanguage = value => {
  i18n
    .changeLanguage(value)
    .then(() => setLanguage(value))
    .catch(err => console.log(err));
};

export {t,currentLanguage,changeLanguage};
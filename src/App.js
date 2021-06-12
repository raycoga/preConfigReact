import Routes from "./routes/router";
import { I18nProvider, LOCALES } from "./i18n";
import translate from './i18n/translate'
import { useSelector } from "react-redux";
import { useLenguageActions } from './redux/actions/useLenguageActions'
function App() {
  
  const locale = useSelector((state) => state.lenguage.locale);
 
  const [setLenguage] = useLenguageActions();

  const customVar = <span style={{color:'red'}}>!"#$%345</span>

  return (
    <I18nProvider locale={locale}>
      {translate({id:'custom', value:{customVar}})}
      <Routes />
      <button onClick={()=>setLenguage(LOCALES.ENGLISH)}> Change to english</button>
      <button onClick={()=>setLenguage(LOCALES.ESPAÑOL)}> cambiar a español</button>
    </I18nProvider>
  );
}

export default App;

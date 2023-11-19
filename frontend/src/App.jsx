import { LanguageContext } from "./context/LanguageContext";
import { useMemo, useState } from "react";
import Router from "./routes/index";
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);
	const [language, setLanguage] = useState("ES");
	const languageProvider = useMemo(
		() => ({ language, setLanguage }),
		[language, setLanguage]
	);

  return (
    <LanguageContext.Provider value={languageProvider}>
      <Navigation/>
      <Router />
    </LanguageContext.Provider>
  )  
}

export default App

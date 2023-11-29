import { LanguageContext } from "./context/LanguageContext";
import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes/index";
import Navigation from './components/Navigation';
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import NoteList from "./components/NoteList";
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
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<NoteList />} />,
          <Route path="/create" element={<CreateNote />} />,
          <Route path="/edit/:id" element={<CreateNote />} />,
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  )
}
//<Route path="/" element={<HomePage />} />
export default App

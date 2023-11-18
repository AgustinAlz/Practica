import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/edit/:id" element={<CreateNote />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/user" element={<CreateUser/>} />
      </Routes>
    </Router>
  )
}

export default App

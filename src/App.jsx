import Home from './components/home';
import LP from './components/landingPage';
import SignIn from './components/signin';
import SignUp from './components/signup';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LP />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
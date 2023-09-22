import "./index.css"
import Home from './components/Home';
import LP from './components/landingPage';
import SignIn from './components/signin';
import SignUp from './components/signup';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LP />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
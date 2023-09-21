import DashUser from './components/dash';
import DashAuth from './components/dash-auth'
import LP from './components/landingPage';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Profile from './components/profile';
import Submit from './components/submit';
import Description from "./components/description"
import AuthDescript from "./components/descrip-auth"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LP />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-dashboard" element={<DashUser />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/description" element={<Description />} />
        <Route path="/dash-auth" element={<DashAuth />} />
        <Route path="/discrip-auth" element={<AuthDescript />} />

        {/* <Route path="/user/pinnedProjects" element={<Dash />} />
        
        <Route path="/authority/update" element={<Dash />} />
        <Route path="/authority/remove" element={<Dash />} />
        <Route path="/authority/collegeProjects" element={<Dash />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
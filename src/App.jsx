import LP from './components/landingPage'
import Contact from './components/contact'
import SignIn from './components/signin'
import SignUp from './components/signup'
import DashUser from './components/dash'
import DashAuth from './components/dash-auth'
import Profile from './components/profile'
import Submit from './components/submit'
import UserDescrip from "./components/description"
import CollegeDescript from "./components/descrip-auth"
import PinnedProject from "./components/pinned"
import CollegeProject from "./components/CollegeProject"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-dashboard" element={<DashUser />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/user-dashboard/user-description" element={<UserDescrip />} />
        <Route path="/college-dashboard" element={<DashAuth />} />
        <Route path="/college-description" element={<CollegeDescript />} />
        <Route path="/pinned" element={<PinnedProject />} />
        <Route path="/college-project" element={<CollegeProject />} />
      </Routes>
    </Router>
  )
}

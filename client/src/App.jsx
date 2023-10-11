
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus'
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Courses from './pages/Courses' // Replace './path/to/RecipeDetails' with the correct path to your RecipeDetails component
import MyDashboard from './pages/Mydashboard';
import Newsletter from './pages/Newsletter';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/mydashboard' element={<MyDashboard />}></Route>
        <Route path='/newsletter' element={<Newsletter />}></Route>
      </Routes>
    </Router>
  )
}

export default App

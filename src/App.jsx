import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/Authentication/SignupPage";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

export default App;

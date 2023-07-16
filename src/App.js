import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/global/Footer';
import Home from './Pages/Home/Home';
import Video from './Pages/video/index';
import Login from './Pages/auth/Login';
import Upload from './Pages/upload/Index';
import Signup from './Pages/auth/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

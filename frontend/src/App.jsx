// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Profile from './pages/Profile';
import Vault from './pages/Vault';
import NotFound from './pages/NotFound';
import Chatbot from './components/Chatbot';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          {/* <Sidebar /> */}
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schemes" element={<Schemes />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Chatbot />
        <LanguageSwitcher />
      </div>
    </Router>
  );
}

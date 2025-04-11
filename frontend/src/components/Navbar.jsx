import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const nav = useNavigate();
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          Sahaya
        </Link>

        {/* Navigation Links */}
        <div className="space-x-7 hidden md:flex">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/schemes" className="hover:text-gray-200 transition">
            Schemes
          </Link>
          <Link to="/profile" className="hover:text-gray-200 transition">
            Profile
          </Link>
          <Link to="/vault" className="hover:text-gray-200 transition">
            Document Vault
          </Link>
        </div>

        {/* Language Switcher Placeholder */}
        <div className="flex items-center space-x-2">
          <span className="text-sm">🌐</span>
          <select className="bg-indigo-700 text-white text-sm px-2 py-1 rounded">
            <option value="en">EN</option>
            <option value="hi">हिंदी</option>
            <option value="ta">தமிழ்</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>

        <button onClick={() => { nav('/login')}}>Login</button>
      </div>
    </nav>
  );
}

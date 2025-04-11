import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  FileTextIcon,
  UserIcon,
  FolderIcon,
  LogIn,
  Milestone,
} from 'lucide-react';


export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon size={20} /> },
    { name: 'Schemes', path: '/schemes', icon: <FileTextIcon size={20} /> },
    { name: 'Profile', path: '/profile', icon: <UserIcon size={20} /> },
    { name: 'Vault', path: '/vault', icon: <FolderIcon size={20} /> },
    { name: 'Login', path: '/login', icon: <LogIn size={20}/> },
    { name: 'SignupPage', path: '/signup', icon: <Milestone  size={20}/> }
  ];

  return (
    <aside className="hidden md:block w-60 bg-gray-100 h-full shadow-inner">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Navigation</h2>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-indigo-100 transition ${
                  location.pathname === item.path
                    ? 'bg-indigo-200 text-indigo-900 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

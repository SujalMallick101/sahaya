import { useState } from 'react';
import { GlobeIcon } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'gu', label: 'ગુજરાતી' },
];

export default function LanguageSwitcher({ currentLang = 'en', onLanguageChange }) {
  const [selectedLang, setSelectedLang] = useState(currentLang);

  const handleChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    onLanguageChange?.(newLang); // optional callback to propagate selection
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <GlobeIcon className="text-indigo-600" size={18} />
      <select
        value={selectedLang}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}

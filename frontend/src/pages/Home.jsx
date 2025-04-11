import Sidebar from '../components/Sidebar';
import Chatbot from '../components/Chatbot';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 h-dvh">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6 space-y-6">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-indigo-700">Welcome to Sahaya 🇮🇳</h1>
              <p className="mt-2 text-gray-600 max-w-xl">
                Simplifying access to education, healthcare, housing, and food security schemes by centralizing everything in one platform.
              </p>
              <div className="mt-4 flex space-x-3">
                <Link to="/profile">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Get Started
                  </button>
                </Link>
                <Link to="/schemes">
                  <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition">
                    Browse Schemes
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <FeatureCard title="Smart Filtering" description="Schemes tailored to your profile." />
            <FeatureCard title="Eligibility Checker" description="Simple inputs to check eligibility." />
            <FeatureCard title="Secure Document Vault" description="Store and reuse key documents." />
          </section>
        </main>
        <Chatbot />
      </div>
    </div>
  );
}

// Feature card component
function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow border border-gray-100">
      <h3 className="font-semibold text-indigo-700 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}

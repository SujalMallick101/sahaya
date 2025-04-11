import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import EligibilityChecker from '../components/EligibilityChecker';
import Chatbot from '../components/Chatbot';

export default function Eligibility() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h1 className="text-2xl font-semibold text-indigo-700 mb-4">Check Your Eligibility</h1>
          <p className="text-sm text-gray-600 mb-6">
            Answer a few simple questions to find schemes you may qualify for.
          </p>

          <div className="max-w-2xl">
            <EligibilityChecker />
          </div>
        </main>
        <Chatbot />
      </div>
    </div>
  );
}

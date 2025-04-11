import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DocumentVault from '../components/DocumentVault';
import AlertsPanel from '../components/AlertsPanel';
import Chatbot from '../components/Chatbot';

export default function Vault() {
  return (
    <div className="flex min-h-screen bg-gray-50 h-dvh">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6 space-y-8">
          <section>
            <h1 className="text-2xl font-semibold text-indigo-700 mb-4">Document Vault</h1>
            <p className="text-sm text-gray-600 mb-6">
              Securely upload, store, and reuse documents required for welfare scheme applications.
            </p>
            <DocumentVault />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Your Smart Alerts</h2>
            <p className="text-sm text-gray-600 mb-4">
              Stay on top of important deadlines, renewal dates, and required actions.
            </p>
            <AlertsPanel />
          </section>
        </main>
        <Chatbot />
      </div>
    </div>
  );
}

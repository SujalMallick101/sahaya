import Sidebar from '../components/Sidebar';
import ProfileForm from '../components/ProfileForm';
import Chatbot from '../components/Chatbot';

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h1 className="text-2xl font-semibold text-indigo-700 mb-4">Your Profile</h1>
          <p className="text-sm text-gray-600 mb-6">
            Fill out your profile to help us match you with relevant welfare schemes.
          </p>

          <div className="max-w-2xl">
            <ProfileForm />
          </div>
        </main>
        <Chatbot />
      </div>
    </div>
  );
}

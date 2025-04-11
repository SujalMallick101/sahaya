import { useState } from 'react';

export default function ProfileForm({ onSubmit }) {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    income: '',
    occupation: '',
    state: '',
    district: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(profile); // optional callback to pass data upward
    console.log('Profile submitted:', profile);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 max-w-xl mx-auto space-y-5 border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">User Profile</h2>

      {/* Name */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Age</label>
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      {/* Income */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Annual Income (INR)</label>
        <input
          type="number"
          name="income"
          value={profile.income}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Occupation</label>
        <select
          name="occupation"
          value={profile.occupation}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        >
          <option value="">-- Select --</option>
          <option value="student">Student</option>
          <option value="farmer">Farmer</option>
          <option value="worker">Worker</option>
          <option value="unemployed">Unemployed</option>
          <option value="retired">Retired</option>
        </select>
      </div>

      {/* State & District */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">State</label>
          <input
            type="text"
            name="state"
            value={profile.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">District</label>
          <input
            type="text"
            name="district"
            value={profile.district}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-5 py-2 rounded-lg transition"
      >
        Save Profile
      </button>
    </form>
  );
}

import { useState } from 'react';

export default function EligibilityChecker({ onCheck }) {
  const [inputs, setInputs] = useState({
    age: '',
    income: '',
    occupation: '',
    state: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy logic for now
    if (inputs.age < 60 && inputs.income <= 250000 && inputs.occupation === 'student') {
      setResult('✅ You are eligible for 3 schemes related to education and skill development.');
    } else {
      setResult('❌ No matching schemes found. Try adjusting your inputs.');
    }

    onCheck?.(inputs); // optional callback to send data up
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-xl mx-auto space-y-5 border border-gray-100">
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">Check Eligibility</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Age */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={inputs.age}
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
            value={inputs.income}
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
            value={inputs.occupation}
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

        {/* State */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">State</label>
          <input
            type="text"
            name="state"
            value={inputs.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-5 py-2 rounded-lg transition"
        >
          Check Now
        </button>
      </form>

      {/* Result */}
      {result && (
        <div className="mt-4 text-sm text-center text-gray-800 bg-indigo-50 p-3 rounded-lg border border-indigo-200">
          {result}
        </div>
      )}
    </div>
  );
}

import Sidebar from '../components/Sidebar';
import SchemeCard from '../components/SchemeCard';
import Chatbot from '../components/Chatbot';

const sampleSchemes = [
  {
    id: 1,
    title: 'National Scholarship Scheme',
    description: 'Provides financial assistance to students from economically weaker sections.',
    category: 'Education',
  },
  {
    id: 2,
    title: 'Ayushman Bharat',
    description: 'Free health insurance coverage for low-income families across India.',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'PM Awas Yojana',
    description: 'Affordable housing for urban and rural poor.',
    category: 'Housing',
  },
];

export default function Schemes() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h1 className="text-2xl font-semibold text-indigo-700 mb-4">Available Schemes</h1>

          {/* Filter Controls (optional) */}
          <div className="mb-6 flex flex-wrap gap-3">
            <FilterButton label="All" />
            <FilterButton label="Education" />
            <FilterButton label="Healthcare" />
            <FilterButton label="Housing" />
            <FilterButton label="Food Security" />
          </div>

          {/* Scheme List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </main>
        <Chatbot />
      </div>
    </div>
  );
}

// Simple category filter button (not functional here, but styled)
function FilterButton({ label }) {
  return (
    <button className="border border-indigo-500 text-indigo-600 px-3 py-1 rounded-full text-sm hover:bg-indigo-100 transition">
      {label}
    </button>
  );
}

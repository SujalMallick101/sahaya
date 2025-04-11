export default function SchemeCard({ scheme }) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-5 space-y-3 border border-gray-100">
        {/* Title */}
        <h3 className="text-lg font-semibold text-indigo-700">{scheme.title}</h3>
  
        {/* Category */}
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
          {scheme.category}
        </span>
  
        {/* Short Description */}
        <p className="text-sm text-gray-600">{scheme.description}</p>
  
        {/* Eligibility Preview */}
        <div className="text-sm text-gray-500">
          <p><span className="font-medium text-gray-700">Eligibility:</span> {scheme.eligibility}</p>
        </div>
  
        {/* Action Button */}
        <div className="flex justify-end">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg transition">
            Check Eligibility
          </button>
        </div>
      </div>
    );
  }
  
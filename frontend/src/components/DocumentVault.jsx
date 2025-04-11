import { useState } from 'react';
import { FileTextIcon, UploadCloudIcon, Trash2Icon } from 'lucide-react';

export default function DocumentVault() {
  const [documents, setDocuments] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
      uploadedAt: new Date().toLocaleDateString(),
    }));
    setDocuments((prev) => [...prev, ...newDocs]);
  };

  const handleDelete = (index) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-indigo-700">📂 Document Vault</h2>
        <label className="inline-flex items-center cursor-pointer">
          <UploadCloudIcon className="text-indigo-600 mr-2" size={18} />
          <span className="text-sm text-indigo-600 font-medium">Upload</span>
          <input
            type="file"
            className="hidden"
            multiple
            onChange={handleUpload}
          />
        </label>
      </div>

      {documents.length === 0 ? (
        <p className="text-sm text-gray-500">No documents uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {documents.map((doc, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-200"
            >
              <div className="flex items-center space-x-3">
                <FileTextIcon className="text-indigo-500" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.type} • {(doc.size / 1024).toFixed(1)} KB</p>
                  <p className="text-xs text-gray-400">Uploaded: {doc.uploadedAt}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
                title="Delete"
              >
                <Trash2Icon size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

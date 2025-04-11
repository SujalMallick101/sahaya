import { BellIcon, AlertTriangleIcon, CalendarClockIcon } from 'lucide-react';

export default function AlertsPanel({ alerts = [] }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-indigo-700">Smart Alerts</h2>
        <BellIcon className="text-indigo-600" size={20} />
      </div>

      {alerts.length === 0 ? (
        <p className="text-sm text-gray-500">🎉 No new alerts. You're all caught up!</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map((alert, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 bg-indigo-50 p-3 rounded-lg border border-indigo-200"
            >
              <div className="mt-1">
                {alert.type === 'deadline' && <CalendarClockIcon className="text-indigo-600" size={18} />}
                {alert.type === 'document' && <AlertTriangleIcon className="text-yellow-600" size={18} />}
                {alert.type === 'renewal' && <BellIcon className="text-red-600" size={18} />}
              </div>

              <div className="text-sm text-gray-700">
                <p>{alert.message}</p>
                {alert.date && (
                  <p className="text-xs text-gray-500 mt-1">⏳ {alert.date}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

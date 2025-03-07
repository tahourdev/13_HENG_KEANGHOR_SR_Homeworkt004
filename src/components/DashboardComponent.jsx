import React from 'react';
import { dashboard } from '../data/dashboard';

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex justify-between gap-5">
        {dashboard.map((item) => (
          <div key={item.id} className="flex bg-white gap-5 items-center py-3.5 px-4 rounded-xl w-auto">
            <div className={`p-3 rounded-xl ${item.color}`}>
              <img src={item.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

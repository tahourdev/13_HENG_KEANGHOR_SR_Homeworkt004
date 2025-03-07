import { EllipsisVertical } from 'lucide-react';
import React from 'react';
import { formatDate } from '../utils/utils';

export default function CardComponent({ assignments, searchQuery }) {
  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-custom-sky-blue';
    if (progress === 50) return 'bg-custom-yellow-500';
    if (progress > 50) return 'bg-custom-carrot';
    return 'bg-custom-pink';
  };

  const calculateDaysLeft = (dueDate) => {
    const currentDate = new Date();
    const targetDate = new Date(dueDate);
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

    console.log(daysRemaining);
    return daysRemaining;
  };

  const filteredAssignments = assignments.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {filteredAssignments.length === 0 ? (
        <p className="text-gray-500">No projects found.</p>
      ) : (
        <div className="flex gap-6 flex-wrap">
          {filteredAssignments.map((item) => {
            const progress = item.progress;
            const daysLeft = calculateDaysLeft(item.dueDate);

            return (
              <div
                key={item.name}
                className="basis-[380px] p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between mb-5">
                  {/* date */}
                  <p
                    className={`${item.progress === 100 && 'text-custom-sky-blue'} ${
                      item.progress < 100 && progress > 50 && 'text-custom-carrot'
                    } ${item.progress < 50 && 'text-custom-pink'} ${
                      item.progress === 50 && 'text-custom-yellow-500'
                    } font-medium`}>
                    {formatDate(item.dueDate)}
                  </p>
                  <EllipsisVertical size={20} color="#374957" />
                </div>

                <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
                  {item.description}
                </p>

                {/* progress bar */}
                <div className="w-full flex justify-between font-medium mb-1">
                  <p>Progress</p>
                  <p>{item.progress}</p>
                </div>
                <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className={`${getProgressColor(progress)} h-2.5 rounded-full`}
                    style={{ width: `${progress}%` }}></div>
                </div>

                {/* deadline */}
                <div className="flex justify-end">
                  <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg text-center">
                    {daysLeft === 0
                      ? 'Today'
                      : daysLeft < 0
                      ? 'end'
                      : daysLeft === 7
                      ? 'Week'
                      : `${daysLeft} days left`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

import React from 'react';
import Image from 'next/image';

const activities = [
  { name: 'Completed JavaScript Basics', date: 'Feb 1, 2025' },
  { name: 'Started React Course', date: 'Jan 28, 2025' },
  { name: 'Earned a Python Certification', date: 'Jan 20, 2025' },
  { name: 'Joined Machine Learning Workshop', date: 'Jan 15, 2025' },
  { name: 'Started React Course', date: 'Jan 28, 2025' },
  { name: 'Earned a Python Certification', date: 'Jan 20, 2025' },
];

const RecentActivityTable = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full table-auto">
        <thead className="bg-[#F5F4FF]">
          <tr>
            <th className="py-3 px-6 text-left text-lg font-semibold">Recent Activity</th>
            <th className="py-3 px-6 text-left text-md font-medium text-gray-600 flex items-center justify-between">
              <span>View</span>
              <Image src={'/icons/arrow-right.png'} width={20} height={20} alt="arrow" />
            </th>
          </tr>
        </thead>

        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-6">
                <p className="text-lg text-gray-800">{activity.name}</p>
                <p className="text-md text-gray-600">{activity.date}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivityTable;

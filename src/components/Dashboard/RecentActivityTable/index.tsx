import React from 'react';
import Image from 'next/image';

const activities = [
    { name: 'Completed JavaScript Basics', date: 'Feb 1, 2025', icon: '/icons/1.png', color: "#FFD4D1" },
    { name: 'Started React Course', date: 'Jan 28, 2025', icon: '/icons/2.png', color: "#F4EAFF" },
    { name: 'Earned a Python Certification', date: 'Jan 20, 2025', icon: '/icons/3.png', color: "#FFD4D1" },
    { name: 'Joined Machine Learning Workshop', date: 'Jan 15, 2025', icon: '/icons/4.png', color: "#F4EAFF" },
    { name: 'Started React Course', date: 'Jan 28, 2025', icon: '/icons/5.png', color: "#F4EAFF" },
    { name: 'Started React Course', date: 'Jan 28, 2025', icon: '/icons/5.png', color: "#FFD4D1" },

];

const RecentActivityTable = () => {
    return (
        <div className="overflow-hidden bg-white rounded-lg pb-2  border-[#EAECF0] border-2 h-auto">
            <div className="flex justify-between items-center bg-[#F5F4FF] w-full p-4 rounded-t-lg">

                <h2 className="text-lg font-semibold bg-[#F5F4FF]  ">Recent Activity</h2>
                
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                    <span>View</span>
                    <Image src={'/icons/arrow-right.png'} width={20} height={20} alt="arrow" />
                </button>
            </div>

            <div className="divide-y">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-1 m-3 rounded-lg" style={{ backgroundColor: activity.color }}>
                        <Image src={activity.icon} alt="icon" width={36} height={36} className="w-9 h-9" />
                        <div>
                            <p className="text-lg text-gray-800 font-medium">{activity.name}</p>
                            <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivityTable;

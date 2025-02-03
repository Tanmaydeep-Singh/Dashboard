import React from 'react';
import Image from 'next/image';

const courses = [
    { name: 'Web Development Bootcamp', students: 1234, rating: 4.3 },
    { name: 'Data Science Fundamentals', students: 1234, rating: 4.1 },
    { name: 'UX/UI Design Masterclass', students: 1234, rating: 4.5 },
    { name: 'Digital Marketing Essentials', students: 1234, rating: 4.8 },
];

const TopCourses = () => {
    return (
        <div className="overflow-hidden border-[#EAECF0] border-2 rounded-lg w-full md:w-2/4 h-auto md:h-[320px] lg:h-auto">
            <div className="flex justify-between items-center bg-[#F5F4FF] py-3 px-6 rounded-t-lg">
                <h2 className="text-lg">Top Courses</h2>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                    <span>View</span>
                    <Image src={'/icons/arrow-right.png'} width={20} height={20} alt="arrow" />
                </button>
            </div>
            
            <div className="flex flex-col md:gap-3 p-4">
                {courses.map((course, index) => (
                    <div key={index} className="flex justify-between items-center p-1 rounded-lg">
                        <div>
                            <p className="text-lg font-medium">{course.name}</p>
                            <p className="text-md text-gray-600 font-light">{course.students} Students</p>
                        </div>
                        <div className="text-center">{course.rating} ⭐</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCourses;

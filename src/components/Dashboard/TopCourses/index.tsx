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
    <div className="p-4 bg-white shadow-md rounded-lg w-full md:w-2/4 m-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Top Courses</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <span className="mr-2">View</span>
          <Image src="/icons/arrow-right.png" width={20} height={20} alt="arrow" />
        </button>
      </div>

      <table className="w-full table-auto border-collapse">
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2">
                <div>
                  <p className="text-lg font-semibold">{course.name}</p>
                  <p className="text-md text-gray-600">{course.students} Students</p>
                </div>
              </td>
              <td className="p-2 text-center">{course.rating} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCourses;

import React from 'react'
import Image from 'next/image';

const courses = [
    { name: 'Web Development Bootcamp', students: 1234, rating: 4.3 },
    { name: 'Data Science Fundamentals', students: 1234, rating: 4.1 },
    { name: 'UX/UI Design Masterclass', students: 1234, rating: 4.5 },
    { name: 'Digital Marketing Essentials', students: 1234, rating: 4.8 },
];
const TopCourses = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg w-2/4 m-3">
            <div className='flex justify-between items-center bg-[#FFFFFF]'>
                <h2 className="text-xl font-bold mb-4">Top Courses</h2>
                <h2 className="text-md font-bold mb-4 flex">View<Image src={'/icons/arrow-right.png'} width={20} height={20} alt="arrow" />
                </h2>
            </div>

            <table className="w-full border-collapse">
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-2">
                                <div>
                                    <p className=' text-lg'>{course.name}</p>
                                    <p className=' text-md text-gray-600'>{course.students}</p>
                                </div>
                            </td>
                            <td className="p-2"> {course.rating} ⭐</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}

export default TopCourses;
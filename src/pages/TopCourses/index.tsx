import React from 'react'

const courses = [
    { name: 'Web Development Bootcamp', students: 1234, rating: 4.3 },
    { name: 'Data Science Fundamentals', students: 1234, rating: 4.0 },
    { name: 'UX/UI Design Masterclass', students: 1234, rating: 4.5 },
    { name: 'Digital Marketing Essentials', students: 1234, rating: 4.8 },
];
function index() {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Top Courses</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">Course Name</th>
                        <th className="p-2 text-left">Students</th>
                        <th className="p-2 text-left">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-2">{course.name}</td>
                            <td className="p-2">{course.students}</td>
                            <td className="p-2">⭐ {course.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}

export default index
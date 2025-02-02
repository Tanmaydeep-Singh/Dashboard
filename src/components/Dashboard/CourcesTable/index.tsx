import React, { useState } from "react";
import data from './courses.json';
import Image from "next/image";

const courses = data;

const CoursesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Courses List</h2>
      
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full">
          <thead className="bg-[#F5F4FF]">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Course Title</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Description</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Goal of Course</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Teacher</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Created Date</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Enrolled Students</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Language</th>
              <th className="py-3 px-6 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => (
              <tr key={index} className="border-t h-8">
                <td className="py-4 px-6 text-sm font-medium text-gray-800">{course.title}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.description}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.goal}</td>
                <td className="py-4 px-6 text-sm flex space-x-2">
                  {course.teachers.map((img, i) => (
                    <Image
                      key={i}
                      src={'/icons/blob.jpeg'}
                      width={32}
                      height={32}
                      alt="teacher"
                      className="w-8 h-8 rounded-full border"
                    />
                  ))}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.createdDate}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.enrolled}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.language}</td>
                <td className="py-4 px-6 text-center text-sm flex">
                  <button className="text-blue-500 hover:text-blue-700"><Image src={'/icons/edit.png'} width={40} height={40} alt="edit" /></button>
                  <button className="ml-2 text-red-500 hover:text-red-700"><Image src={'/icons/delete.png'} width={40} height={40} alt="delete" /> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center text-gray-700">{currentPage} / {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md ml-2 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CoursesTable;

import React, { useState } from "react";
import data from "./courses.json";
import Image from "next/image";
import Swal from "sweetalert2";

interface Course {
  title: string;
  description: string;
  goal: string;
  teachers: string[];
  createdDate: string;
  enrolled: string;
  language: string;
}

const CoursesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentCourses: Course[] = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number): void => setCurrentPage(page);

  const handleAction = (action: "edit" | "delete", courseTitle: string): void => {
    const config = {
      edit: {
        title: `Edit Course: ${courseTitle}`,
        text: "Do you want to make changes to this course?",
        icon: "warning" as const,
        confirmButtonText: "Edit",
      },
      delete: {
        title: `Delete Course: ${courseTitle}?`,
        text: "This action cannot be undone.",
        icon: "error" as const,
        confirmButtonText: "Yes, delete it!",
      },
    };

    Swal.fire({
      ...config[action],
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          action === "edit" ? "Editing..." : "Deleted!",
          action === "delete" ? `${courseTitle} has been deleted.` : "",
          "success"
        );
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Courses List</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full">
          <thead className="bg-[#F5F4FF]">
            <tr>
              {[
                "Course Title",
                "Description",
                "Goal of Course",
                "Teacher",
                "Created Date",
                "Enrolled Students",
                "Language",
                "Actions",
              ].map((header) => (
                <th key={header} className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course: Course, index: number) => (
              <tr key={index} className="border-t h-8">
                <td className="py-4 px-6 text-sm font-medium text-gray-800 flex items-center">
                  <Image src={"/icons/Image.png"} width={38} height={38} alt="Course" className="p-1" />
                  {course.title}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.description}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.goal}</td>
                <td className="py-4 px-6 text-sm flex space-x-2">
                  {course.teachers.map((img: string, i: number) => (
                    <Image key={i} src={"/icons/blob.jpeg"} width={32} height={32} alt="Teacher" className="w-8 h-8 rounded-full border" />
                  ))}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.createdDate}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.enrolled}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.language}</td>
                <td className="py-4 px-6 text-center text-sm flex space-x-2">
                  {[
                    { icon: "edit.png", action: "edit", color: "blue" },
                    { icon: "delete.png", action: "delete", color: "red" },
                  ].map(({ icon, action, color }) => (
                    <button
                      key={action}
                      className={`text-${color}-500 hover:text-${color}-700`}
                      onClick={() => handleAction(action as "edit" | "delete", course.title)}
                    >
                      <Image src={`/icons/${icon}`} width={40} height={40} alt={action} />
                    </button>
                  ))}
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

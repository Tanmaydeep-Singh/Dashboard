import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const RecentActivity = () => {
    const data = {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.0, 3.3],
                borderColor: "#1e3a8a",
                backgroundColor: "rgba(30, 58, 138, 0.2)",
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 4,
                ticks: { stepSize: 1 },
                grid: { display: false },
            },
            x: {
                grid: { display: false },
            },
        },
        plugins: { legend: { display: false } },
    };


    return (
        <div className="p-4 bg-white shadow-md rounded-lg w-full md:w-2/4 m-3">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
                <button className="text-blue-600">View</button>
            </div>
            <div className="mt-2 w-full h-[300px] pt-16">
                <Line data={data} options={options} className="w-full h-full" />
            </div>
        </div>

    );
};

export default RecentActivity;

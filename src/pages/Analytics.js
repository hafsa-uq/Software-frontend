import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FaDollarSign, FaChartLine, FaTags, FaCheckSquare } from 'react-icons/fa';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const unitsSoldData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Units Sold',
            data: [5, 10, 12, 8, 14, 7, 9, 10, 12, 15, 20, 5],
            backgroundColor: '#60A5FA',
            borderColor: '#3B82F6',
            borderWidth: 1,
        },
    ],
};

const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Revenue',
            data: [10000, 15000, 20000, 18000, 22000, 17000, 19000, 21000, 23000, 24000, 35000, 30000],
            backgroundColor: '#3B82F6',
            borderColor: '#1D4ED8',
            borderWidth: 1,
        },
    ],
};

const marketShareData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Brand A',
            data: [5000, 8000, 9000, 7000, 9500, 10000, 10500, 9500, 12000, 11000, 13000, 12500],
            backgroundColor: '#60A5FA',
            borderColor: '#3B82F6',
            borderWidth: 1,
        },
        {
            label: 'Brand B',
            data: [3000, 5000, 6000, 4000, 5500, 6000, 6500, 6000, 7000, 8000, 8500, 9000],
            backgroundColor: '#1E3A8A',
            borderColor: '#1D4ED8',
            borderWidth: 1,
        },
        {
            label: 'Brand C',
            data: [2000, 4000, 3000, 5000, 4500, 7000, 7500, 8500, 9000, 7000, 10000, 8500],
            backgroundColor: '#000000',
            borderColor: '#000000',
            borderWidth: 1,
        },
    ],
};

const bestSellingSKUData = {
    labels: ['SKU1', 'SKU2', 'SKU3', 'SKU4', 'SKU5'],
    datasets: [
        {
            label: 'Best Selling SKU',
            data: [70, 40, 30, 20, 10],
            backgroundColor: [
                '#1E3A8A',
                '#3B82F6',
                '#111827',
                '#6B7280',
                '#93C5FD',
            ],
            borderColor: [
                '#1E3A8A',
                '#3B82F6',
                '#111827',
                '#6B7280',
                '#93C5FD',
            ],
            borderWidth: 1,
        },
    ],
};

const fbaFbmData = {
    labels: ['FBA', 'FBM'],
    datasets: [
        {
            data: [36.2, 63.8],
            backgroundColor: ['#0052CC', '#212529'],
            borderWidth: 0,
            cutout: '75%',
        },
    ],
};

const incomeData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            data: [13.1, 28.6, 28, 30.3],
            backgroundColor: ['#0052CC', '#2E86AB', '#000000', '#E6E6E6'],
            borderWidth: 0,
            cutout: '75%',
        },
    ],
};

// Default options
const defaultOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 10,
                font: {
                    family: 'Roboto Condensed',
                    size: 14,
                },
                color: '#000000',
            },
        },
        datalabels: {
            color: '#000',
            font: {
                size: 14,
                family: 'Roboto Condensed',
            },
            formatter: (value) => `${value}%`,
            align: 'end',
            anchor: 'end',
        },
    },
    layout: {
        padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
    },
};

const incomeOptions = {
    ...defaultOptions,
    layout: {
        padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 0, 
        },
        margin: {
            top: 70,
        }
    },
};

const Analytics = () => {
    const cards = [
        { icon: <FaDollarSign />, label: 'Total Monthly Sales', value: '$2,500,000.00' },
        { icon: <FaChartLine />, label: 'Sales Increase per month', value: '36.2%' },
        { icon: <FaTags />, label: 'Number of total SKU\'S', value: '36' },
        { icon: <FaCheckSquare />, label: 'Number of active SKU\'s', value: '34' },
    ];

    return (
        <div className="p-4">
            {/* Cards at the top */}
            <div className="flex flex-wrap justify-between mt-3">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mx-2 mb-4"
                    >
                        <div className="text-4xl text-gray-600 mb-2">{card.icon}</div>
                        <div className="text-sm text-gray-500">{card.label}</div>
                        <div className="text-2xl font-semibold text-gray-900">{card.value}</div>
                    </div>
                ))}
            </div>

            {/* Doughnut Charts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2">FBA and FBM sales</h3>
                    <div className="border-b border-gray-300 w-44 mb-4"></div>
                    <div className="w-48 h-48">
                        <Doughnut data={fbaFbmData} options={defaultOptions} />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2">Income per Quarter 2023</h3>
                    <div className="border-b border-gray-300 w-52 mb-4"></div>
                    <div className="w-48 h-48">
                        <Doughnut data={incomeData} options={incomeOptions} /> 
                    </div>
                </div>
            </div>

            {/* Bar Charts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold mb-4">Units Sold per Month</h3>
                    <Bar data={unitsSoldData} options={defaultOptions} />
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold mb-4">Best Selling SKU</h3>
                    <Bar data={bestSellingSKUData} options={defaultOptions} />
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold mb-4">Revenue per Month</h3>
                    <Bar
                        data={revenueData}
                        options={{
                            ...defaultOptions,
                            plugins: {
                                ...defaultOptions.plugins,
                                datalabels: {
                                    display: false, 
                                },
                            },
                        }}
                    />
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold mb-4">Market Share per Month</h3>
                    <Bar
                        data={marketShareData}
                        options={{
                            ...defaultOptions,
                            plugins: {
                                ...defaultOptions.plugins,
                                datalabels: {
                                    display: false, 
                                },
                            },
                            scales: {
                                x: { stacked: true },
                                y: { stacked: true },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Analytics;

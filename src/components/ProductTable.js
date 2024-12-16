import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const ProductLevelAnalysis = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [asinData, setAsinData] = useState([]);
  const [selectedAsin, setSelectedAsin] = useState(null);
  const [comparisonAsins, setComparisonAsins] = useState([]);

  useEffect(() => {
    fetchAsinData();
  }, []);

  const fetchAsinData = () => {
    setAsinData([
      { asin: 'B000123456', pageViews: 1500, uniqueVisitors: 1200, ctr: 2.5, conversionRate: 0.6, addToCartRate: 3.0, unitsOrdered: 200, buyBoxPercentage: 75 },
      { asin: 'B000654321', pageViews: 2000, uniqueVisitors: 1700, ctr: 3.0, conversionRate: 0.65, addToCartRate: 3.5, unitsOrdered: 300, buyBoxPercentage: 80 },
    ]);
  };

  const columns = React.useMemo(
    () => [
      { Header: 'ASIN', accessor: 'asin' },
      { Header: 'Page Views', accessor: 'pageViews' },
      { Header: 'Unique Visitors', accessor: 'uniqueVisitors' },
      { Header: 'CTR (%)', accessor: 'ctr' },
      { Header: 'Conversion Rate (%)', accessor: 'conversionRate' },
      { Header: 'Add to Cart Rate (%)', accessor: 'addToCartRate' },
      { Header: 'Units Ordered', accessor: 'unitsOrdered' },
      { Header: 'Buy Box (%)', accessor: 'buyBoxPercentage' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data: asinData },
    useSortBy
  );

  const handleRowClick = (row) => {
    const asin = row.original;
    setSelectedAsin(asin);
    setComparisonAsins(prev => 
      prev.includes(asin.asin) ? prev.filter(a => a !== asin.asin) : [...prev, asin.asin]
    );
  };

  const createChartData = (data) => ({
    labels: ['Page Views', 'Unique Visitors', 'CTR', 'Conversion Rate', 'Add to Cart Rate', 'Units Ordered', 'Buy Box Percentage'],
    datasets: data.map(asin => ({
      label: `ASIN ${asin.asin}`,
      data: [
        asin.pageViews,
        asin.uniqueVisitors,
        asin.ctr,
        asin.conversionRate,
        asin.addToCartRate,
        asin.unitsOrdered,
        asin.buyBoxPercentage
      ],
      borderColor: '#' + Math.floor(Math.random()*16777215).toString(16),
      backgroundColor: 'rgba(38, 132, 255, 0.2)',
      fill: true,
      borderWidth: 2
    }))
  });

  const comparisonData = asinData.filter(asin => comparisonAsins.includes(asin.asin));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product-Level Analysis</h1>
      
      {/* Date Range Selector */}
      <div className="mb-4">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={dates => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          isClearable
          dateFormat="MMMM d, yyyy"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
      </div>

      {/* ASIN Table */}
      <div className="mb-4">
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} onClick={() => handleRowClick(row)} className={`cursor-pointer hover:bg-gray-100 ${comparisonAsins.includes(row.original.asin) ? 'bg-gray-200' : ''}`}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detailed Breakdown View */}
      {selectedAsin && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Detailed Breakdown for ASIN: {selectedAsin.asin}</h2>
          <Line data={createChartData([selectedAsin])} />
        </div>
      )}

      {/* Comparison Section */}
      {comparisonAsins.length > 1 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">See the Comparison of Selected ASINs</h2>
          <button
            onClick={() => setComparisonAsins([])}
            className="mt-2 px-4 py-2 border rounded bg-red-500 text-white"
          >
            Clear Comparison
          </button>
          <div className="mt-4">
            {comparisonData.length > 0 && (
              <div>
                <Line data={createChartData(comparisonData)} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductLevelAnalysis;

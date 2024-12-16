import React, { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

const TaskCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const detailedText = [
        "We’re seeing a 10% increase week after week.",
        "The campaign's performance has been consistently improving.",
        "Our goal is to reach the target by the end of year."
      
    ];

    return (
        <div className="p-2 bg-gray-100 rounded-lg shadow-md cursor-pointer" onClick={toggleExpand}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Alfredo"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="text-sm font-semibold">Alfredo</p>
                        <p className="text-xs text-gray-600">Added 20+ keywords to the campaign</p>
                    </div>
                </div>
                <span className="text-gray-500 text-xs">04:47 PM</span>
            </div>

            <div className="mt-3">
                <p className="text-sm mb-3">
                    {isExpanded ? (
                        detailedText.map((text, index) => (
                            <span key={index} className="block mb-2">{text}</span>
                        ))
                    ) : (
                        "Click to expand for more details."
                    )}
                </p>
                {isExpanded && (
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-4 text-gray-500">
                            <AiFillLike className="cursor-pointer" />
                            <FaHeart className="cursor-pointer" />
                            <AiFillDislike  className="cursor-pointer" />
                        </div>
                        <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg">Reply</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskCard;

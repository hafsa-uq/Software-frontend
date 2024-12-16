import React from 'react';
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment } from 'react-icons/ai';

const MessageCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-4">
            <div className="flex items-center mb-3">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Alfredo Torres"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <p className="text-sm font-semibold">Alfredo Torres</p>
                </div>
            </div>
            <p className="text-sm mb-3">
                We’re seeing a 10% increase week after week. Goal will be reached by the end of August.
            </p>
            <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-gray-500">
                    <AiOutlineLike className="cursor-pointer" />
                    <AiOutlineDislike className="cursor-pointer" />
                    <AiOutlineComment className="cursor-pointer" />
                </div>
                <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg">Reply</button>
            </div>
        </div>
    );
};

export default MessageCard;

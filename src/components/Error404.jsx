import React from 'react';

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl font-bold text-red-500">Error 404</h1>
            <p className="text-xl text-gray-600">Page not found</p>
        </div>
    );
};

export default Error404;

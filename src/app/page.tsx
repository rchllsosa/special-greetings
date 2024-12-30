"use client";

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Tap this for a surprise
      </h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Click Me
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg font-semibold bg-gray-500">HNY 🐝🐝</h5>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="p-1">
              <video width="100%" controls>
                <source src="/new-year.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  setIsModalOpen(false);
                  setIsMoreModalOpen(true);
                }}
              >
                Click this for more 😉
              </button>
            </div>
          </div>
        </div>
      )}

      {isMoreModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsMoreModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg text-gray-800 font-semibold">
                More Fun 🎊
              </h5>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsMoreModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="p-1">
              <video width="100%" height="50%" controls>
                <source src="/oiiaacat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-end p-4 border-t">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => {
                  setIsMoreModalOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// public/new-year.mp4 and public/more-new-year.mp4
// Add video files named "new-year.mp4" and "more-new-year.mp4" in the public directory.

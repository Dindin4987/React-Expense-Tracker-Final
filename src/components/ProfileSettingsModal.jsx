import React, { useState } from "react";

function ProfileSettingsModal() {
  // State to control the modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("Alex Rybachok");
  const [currency, setCurrency] = useState("UAH");

  // Function to open/close the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        Open Profile Settings
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dark background overlay */}
          <div
            className="absolute inset-0 bg-black opacity-70"
            onClick={toggleModal}
          ></div>

          {/* Modal content */}
          <div className="relative w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg z-50">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                Profile settings
              </h2>
              <button
                onClick={toggleModal}
                className="text-white text-xl hover:text-gray-400"
              >
                &times;
              </button>
            </div>

            {/* Profile picture upload section */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              <button className="px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600">
                Upload new photo
              </button>
              <button className="px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600">
                Remove
              </button>
            </div>

            {/* Currency selection */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="currency">
                Currency
              </label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:outline-none"
              >
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            {/* Name input */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg focus:outline-none"
              />
            </div>

            {/* Save button */}
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileSettingsModal;

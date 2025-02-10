const DonateNow = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-5 bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-5xl flex flex-col md:flex-row gap-8">
        
        {/* Left Section - Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left">Donate Now</h2>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            Support our cause in Pakistan by making a donation.
          </p>

          {/* Donation Amount Selection */}
          <div className="mt-4">
            <h3 className="text-gray-700 font-semibold text-center md:text-left">Select Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {[500, 1000, 5000, 10000].map((amount) => (
                <button
                  key={amount}
                  className="py-2 px-4 bg-gray-200 rounded-md hover:bg-green-500 hover:text-white"
                >
                  Rs. {amount}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount Input */}
          <div className="mt-4">
            <input
              type="number"
              placeholder="Enter custom amount"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Right Section - Payment Methods */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-gray-700 font-semibold text-center md:text-left">Choose Payment Method</h3>
          <div className="flex flex-col gap-2 mt-2">
            <button className="py-2 px-4 border rounded-md bg-yellow-400 text-black">
              Easypaisa
            </button>
            <button className="py-2 px-4 border rounded-md bg-red-500 text-white">
              JazzCash
            </button>
            <button className="py-2 px-4 border rounded-md bg-blue-500 text-white">
              Bank Transfer
            </button>
          </div>

          {/* Donate Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700">
            Donate Now
          </button>

          {/* Note */}
          <p className="text-xs text-center text-gray-500 mt-2">
            100% of your donation goes to the cause.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;

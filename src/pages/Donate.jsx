const Donate = () => {
  return (
    <>
      {/* <div  className="bg-black bg-opacity-50 flex items-center justify-center  w-full"> */}
      <div className=" bg-amber-50  shadow-xl   overflow-hidden">
        <div className="px-6 py-4 bg-amber-800 text-white text-center">
          <h3 className="text-xl font-bold playfair">Donate Books</h3>
          {/* <button id="closeDonateModal" className="text-amber-100 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button> */}
        </div>
        <div className="p-6">
          <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-800">
                  Your book donations help support literacy programs and provide
                  reading materials to underserved communities. Thank you for
                  your generosity!
                </p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label
                for="bookTypes"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Types of Books
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fiction"
                    name="bookType"
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300"
                  />
                  <label
                    for="fiction"
                    className="ml-2 block text-sm text-amber-900"
                  >
                    Fiction
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="nonfiction"
                    name="bookType"
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300"
                  />
                  <label
                    for="nonfiction"
                    className="ml-2 block text-sm text-amber-900"
                  >
                    Non-Fiction
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="children"
                    name="bookType"
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300"
                  />
                  <label
                    for="children"
                    className="ml-2 block text-sm text-amber-900"
                  >
                    Children's
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="textbooks"
                    name="bookType"
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300"
                  />
                  <label
                    for="textbooks"
                    className="ml-2 block text-sm text-amber-900"
                  >
                    Textbooks
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="rare"
                    name="bookType"
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300"
                  />
                  <label
                    for="rare"
                    className="ml-2 block text-sm text-amber-900"
                  >
                    Rare/Collectible
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="other"
                    name="bookType"
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300"
                  />
                  <label
                    for="other"
                    className="ml-2 block text-sm text-amber-900"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div id="pickupDetails" className="space-y-4 hidden">
              <div>
                <label
                  for="address"
                  className="block text-sm font-medium text-amber-900 mb-1"
                >
                  Pickup Address
                </label>
                <textarea
                  id="address"
                  rows="3"
                  className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    for="preferredDate"
                    className="block text-sm font-medium text-amber-900 mb-1"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label
                    for="preferredTime"
                    className="block text-sm font-medium text-amber-900 mb-1"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label
                for="contactName"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="contactName"
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  for="contactEmail"
                  className="block text-sm font-medium text-amber-900 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label
                  for="contactPhone"
                  className="block text-sm font-medium text-amber-900 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            <div>
              <label
                for="notes"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Description
              </label>
              <textarea
                id="notes"
                rows="3"
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>
            {/* <div className="flex items-center">
                        <input type="checkbox" id="taxReceipt" className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300 rounded"/>
                        <label for="taxReceipt" className="ml-2 block text-sm text-amber-900">I would like a tax receipt for my donation</label>
                    </div> */}

            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1">
                Upload Images
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="border border-amber-400 rounded px-4 py-2 file:bg-amber-400 file:text-purple-800 file:border-0 cursor-pointer"
                accept="image/*"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 rounded-md transition-colors font-medium"
              >
                Submit Donation Request
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Donate;

import { useState } from "react";

const filterData = [
  {
    filterType: "Location",
    area: ["Delhi NCR", "Banglore", "Hydrabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    area: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    area: ["0-40k", "42k-1lakh", "1lakh to 5lakh"]
  }
]

const FilterCard = () => {
  //  

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Section</h1>
      <hr />
      {
        filterData.map((data, index) => (
          <div key={index}>
            <label className="font-bold text-lg">{data.filterType} </label>
            {
              data.area.map((item, index) => {
                return (
                  <div key={index} className="flex items-center ml-2">
                    <input
                      type="radio"
                      id="option1"
                      name="radioGroup"
                      value={item}
                      className="mr-2"
                    />
                    <label htmlFor="">{item}</label>
                  </div>
                )
              })
            }
          </div>
        ))
      }
    </div>
  );
}
export default FilterCard;


{/* <div className="flex flex-col">
      <label className="mb-2 text-lg font-medium">Select an option:</label>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="option1"
          name="radioGroup"
          value="Option 1"
          checked={selectedOption === 'Option 1'}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="option1" className="text-gray-700">
          Option 1
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="option2"
          name="radioGroup"
          value="Option 2"
          checked={selectedOption === 'Option 2'}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="option2" className="text-gray-700">
          Option 2
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="option3"
          name="radioGroup"
          value="Option 3"
          checked={selectedOption === 'Option 3'}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="option3" className="text-gray-700">
          Option 3
        </label>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Selected option: {selectedOption || 'None'}
      </p>
    </div> */}
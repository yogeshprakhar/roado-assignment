const HighlightScreen = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="font-bold text-lg">Today Highlights (14)</h1>
      <h4 className="text-xs">19 Mar 2024</h4>

      <div className="flex flex-row gap-3 justify-around mt-4">
        <div className="border border-gray-300 rounded-lg px-4 py-1">
          <h1 className="text-gray-700 text-xs">Income</h1>
          <h1 className="text-sm my-1 font-semibold text-green-600">
            {" "}
            100000 CAD{" "}
          </h1>
          <h1 className="text-gray-700 text-xs"> 2 payments received</h1>
        </div>
        <div className="border border-gray-300 rounded-lg px-3 py-1">
          <h1 className="text-gray-700 text-xs">Income</h1>
          <h1 className="text-sm my-1 font-semibold text-green-600">
            {" "}
            100000 CAD{" "}
          </h1>
          <h1 className="text-gray-700 text-xs"> 2 payments received</h1>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <span className="font-semibold mt-4 mb-3 text-sm">
          Completed Activities (14)
        </span>
        <span className="text-sm underline">View All</span>
      </div>

      <div className="flex flex-col border-2 rounded-md text-gray-500 border-gray-300">
        <h1 className="p-2 text-sm">
          <span className="text-blue-800">Gurpreet Singh</span> (Dispatch Team)
          has created <span className="text-black">Load No. 1-1-AAA-1234 </span>
        </h1>
        <div className="h-0.5 w-full bg-gray-300" />
        <h1 className="p-2 text-sm">
          <span className="text-blue-800">Aman</span> (Driver) Picked Up goods
          at Location_name for{" "}
          <span className="text-black">Load No. 1-1-AAA-1234</span>
        </h1>
        <div className="h-0.5 w-full bg-gray-300" />
        <h1 className="p-2 text-sm">
          <span className="text-blue-800">Gurpreet Singh</span> (Dispatch Team)
          has created <span className="text-black">Load No. 1-1-AAA-1234 </span>
        </h1>
        <div className="h-0.5 w-full bg-gray-300" />
        <h1 className="p-2 text-sm">
          <span className="text-black">Load No. 1-1-AAA-1234</span> will start
          added by <span className="text-blue-800">Gurpreet Singh</span>
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold mt-4 mb-3 text-sm">Schedule Activities</h1>
        <span className="text-sm underline">View All</span>
      </div>

      <div className="flex flex-col border-2 rounded-md text-gray-500 border-gray-300">
        <h1 className="p-2 text-sm">
          <span className="text-blue-800">Gurpreet Singh</span> (Dispatch Team)
          has created <span className="text-black">Load No. 1-1-AAA-1234 </span>
        </h1>
        <div className="h-0.5 w-full bg-gray-300" />
        <h1 className="p-2 text-sm">
          <span className="text-blue-800">Aman</span> (Driver) Picked Up goods
          at Location_name for{" "}
          <span className="text-black">Load No. 1-1-AAA-1234</span>
        </h1>
        <div className="h-0.5 w-full bg-gray-300" />
        <h1 className="p-2 text-sm">
          <span className="text-blue-800">Gurpreet Singh</span> (Dispatch Team)
          has created <span className="text-black">Load No. 1-1-AAA-1234 </span>
        </h1>
        <div className="h-0.5 w-full bg-gray-300" />
        <h1 className="p-2 text-sm">
          <span className="text-black">Load No. 1-1-AAA-1234</span> will start
          added by <span className="text-blue-800">Gurpreet Singh</span>
        </h1>
      </div>
    </div>
  );
};

export default HighlightScreen;

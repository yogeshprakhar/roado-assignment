import { Button } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const HighPriorityCard = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col rounded-lg shadow-lg w-[48%] bg-white p-3 gap-3">
        <div className="flex flex-row gap-3">
          <div className="bg-gray-300 px-2  flex justify-center rounded-lg items-center">
            <AccountBoxOutlinedIcon fontSize="medium" />
          </div>
          <div className="flex flex-col items-start flex-1">
            <h1 className="font-semibold text-sm">Driver Raised Concern</h1>
            <h4 className="text-xs text-gray-700">
              Load No: 12345, Bill To: RoadDo demo Bangalore
            </h4>
          </div>
          <h2 className="text-gray-700 text-sm p-2">13 Feb 24</h2>
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          deleniti laborum quia perspiciatis officia deserunt.
        </div>
        <div className="flex flex-row justify-end gap-5 items-center">
          <div className="cursor-pointer underline text-blue-900">Ignore</div>
          <Button variant="contained">Resolve</Button>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow-lg w-[48%] bg-white p-3 gap-3">
        <div className="flex flex-row gap-3">
          <div className="bg-gray-300 px-2  flex justify-center rounded-lg items-center">
            <DeviceThermostatIcon fontSize="medium" />
          </div>
          <div className="flex flex-col items-start flex-1">
            <h1 className="font-semibold text-sm">Reefer Temp. out of range</h1>
            <h4 className="text-xs text-gray-700">
              Load No: 12345, Bill To: RoadDo demo Bangalore
            </h4>
          </div>
          <h2 className="text-gray-700 text-sm p-2">13 Feb 24</h2>
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          deleniti laborum quia perspiciatis officia deserunt.
        </div>
        <div className="flex flex-row justify-end gap-5 items-center">
          <div className="cursor-pointer underline text-blue-900">Ignore</div>
          <Button variant="contained">Resolve</Button>
        </div>
      </div>
    </div>
  );
};

export default HighPriorityCard;

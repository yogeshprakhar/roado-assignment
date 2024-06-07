import HighPriorityCard from "./HighPriorityCard";
import NavBar from "./NavBar";
import PieCard from "./PieCard";
import QuickActionCard from "./QuickActionCard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Mainscreen = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-grow gap-2 pt-5 mr-2">
        <PieCard title="Orders" />
        <PieCard title="Trips" />
        <PieCard title="Revenue" />
        <PieCard title="Expences" />
      </div>

      <div className="flex flex-col mt-5 gap-3 pr-2">
        <h1 className="font-semibold text-lg">Quick Actions</h1>
        <QuickActionCard />
      </div>

      <div className="flex flex-col mt-5 gap-3 w-[100%]">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-lg" >High Priority Alerts (14)</span>
          <span className="text-blue-500 pr-4">View All <ArrowForwardIosOutlinedIcon/> </span>
        </div>
        
          <HighPriorityCard />
        
      </div>
    </div>
  );
};

export default Mainscreen;

import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";

const QuickActionCard = () => {
  return (
    <div className=" px-2 py-4  text-xs rounded-lg flex justify-evenly items-center w-[100%] bg-white  shadow-xl">
      <div className="flex gap-1 flex-col justify-center items-center">
        <LabelImportantOutlinedIcon />
        <p>Create Indents</p>
      </div>
      <div className="h-10 w-0.5 bg-gray-400" />
      <div className="flex gap-1 flex-col justify-center items-center">
        <LocalShippingOutlinedIcon />
        <p>Add vehicle</p>
      </div>
      <div className="h-10 w-0.5 bg-gray-400" />
      <div className="flex gap-1 flex-col justify-center items-center">
        <RvHookupOutlinedIcon />
        <p>Add Trailer</p>
      </div>
      <div className="h-10 w-0.5 bg-gray-400" />
      <div className="flex gap-1 flex-col justify-center items-center">
        <Person2OutlinedIcon />
        <p>Add driver</p>
      </div>
      <div className="h-10 w-0.5 bg-gray-400" />
      <div className="flex gap-1 flex-col justify-center items-center">
        <LocalShippingOutlinedIcon />
        <p>Add Indents</p>
      </div>
    </div>
  );
};

export default QuickActionCard;

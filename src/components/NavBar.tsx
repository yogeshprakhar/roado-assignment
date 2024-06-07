import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const NavBar = () => {
  return (
    <div className="flex flex-row justify-between pt-4">
      <div className="text-black text-2xl font-semibold">Dashboard</div>

      <div className="flex flex-row justify-center bg-white border-black items-center gap-3 px-3 rounded-full py-1 mx-4">
        <SearchIcon fontSize="medium" />
        <div className="h-5 w-0.5 rounded-xl bg-gray-400"></div>
        <NotificationsNoneOutlinedIcon fontSize="medium" />
        <div className="h-5  w-0.5 rounded-xl bg-gray-400"></div>
        <MoreVertOutlinedIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default NavBar;

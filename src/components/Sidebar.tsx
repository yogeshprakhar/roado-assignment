import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DepartureBoardOutlinedIcon from "@mui/icons-material/DepartureBoardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import { LiaShippingFastSolid } from "react-icons/lia";
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-5 bg-gray-50 min-h-screen pt-5 w-28">
      <img src="ring.png" height={30} width={30}/>
      <DashboardOutlinedIcon color="action" fontSize="medium" />
      <AddToQueueIcon color="action" fontSize="medium" />
      <LabelImportantOutlinedIcon color="action" fontSize="medium" />
      <AssignmentOutlinedIcon color="action" fontSize="medium" />
      <DepartureBoardOutlinedIcon color="action" fontSize="medium" />
      <LocalShippingOutlinedIcon color="action" fontSize="medium" />
      <LiaShippingFastSolid color="gray" size={"1.5rem"} />
      <BusinessCenterSharpIcon color="action" fontSize="medium" />
      <AccountBalanceWalletOutlinedIcon color="action" fontSize="medium" />
      <DynamicFeedOutlinedIcon color="action" fontSize="medium" />
      <SettingsSharpIcon color="action" fontSize="medium" />
    </div>
  );
};

export default Sidebar;

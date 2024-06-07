import { Box, Typography } from "@mui/material";
// import { red } from "@mui/material/colors";
import { PieChart } from "@mui/x-charts/PieChart";

type Props = {
    title: string
}

const PieCard = ({title}:Props) => {
  return (
    <div className="flex flex-col justify-center bg-white shadow-xl w-60 rounded-xl">
      <h1 className="font-semibold ml-3 mt-1 text-xl"> {title} </h1>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 50, color: "#4FD2B5" },
                { id: 1, value: 30, color: "#FFCB49" },
                { id: 2, value: 20, color: "#7464FF" },
              ],

              innerRadius: 50,
              outerRadius: 80,
              paddingAngle: 0,
              cornerRadius: 0,
              startAngle: -180,
              endAngle: 180,
              cx: 80,
              cy: 80,
            },
          ]}
          width={180}
          height={180}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="flex flex-col items-center justify-center"
            variant="caption"
            component="div"
          >
            <h1 className="font-semibold text-gray-400 pr-1">Total</h1>
            <h1 className="font-semibold text-black">123456</h1>
          </Typography>
        </Box>
      </Box>
      <div className="mb-3 ml-1 flex flex-col gap-2 ">
        <div className="px-3 w-56 rounded-lg py-1 flex justify-between bg-gradient-to-r from-white to-orange-500">
          <h1>Upcoming</h1>
          <h1>50</h1>
        </div>
        <div className="px-3 w-56 rounded-lg py-1 flex justify-between bg-gradient-to-r from-white to-purple-500">
          <h1>Ongoing</h1>
          <h1>100</h1>
        </div>
        <div className="px-3 w-56 rounded-lg py-1 flex justify-between bg-gradient-to-r from-white to-green-500">
          <h1>Completed</h1>
          <h1>50</h1>
        </div>
      </div>
    </div>
  );
};

export default PieCard;

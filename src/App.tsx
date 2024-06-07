import MainScreen from "./components/MainScreen";
import HighlightScreen from "./components/HighlightScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-row min-h-screen w-full ">
        <Sidebar />
        <div className="bg-blue-100 pl-4">
          <MainScreen />
        </div>
        <div className=" bg-white w-[40%]">
          <HighlightScreen />
        </div>
      </div>
    </>
  );
}

export default App;

import { PulseLoader } from "react-spinners";
const LoadingScreen = () => {
  return (
    <div className="center" style={{minHeight:"60vh"}}>
      <PulseLoader color={'#6002ee'}/>
    </div>
  );
};

export default LoadingScreen;

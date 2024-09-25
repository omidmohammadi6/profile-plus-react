import Membership from "./componenets/Membership";
import SocialMedia from "./componenets/Social";

export default function App() {
  return (
    <div>
      <div className="flex justify-start  items-center h-[60vh] w-[300px] bg-[#f5f7fa] rounded-[10px] shadow-[ 0 10px 10px rgba(0, 0, 0, 0.1)] mx-auto mt-[100px] text-center  flex-col">
        <div className="flex mt-4 justify-center ">
          <img
            src="./images/profile.png"
            className="w-[100px] h-[100px] rounded-[50%] relative object-cover hover:scale-110"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mt-[10px]">Omid Mohammadi</h2>
          <div className="text-gray-400 flex justify-center items-center ">
            <span>
              <i className="text-gray-400 mr-2 fa-solid fa-location-dot"></i>
            </span>
            <spanc className="text-sm"> 15 Eagle Way, AL10 8RD</spanc>
          </div>
        </div>
        <p className="text-gray-400 px-[10px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>
        <Membership />
        <SocialMedia />
      </div>
    </div>
  );
}

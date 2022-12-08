import { useNavigate } from "react-router-dom";

const profileImage = 'http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg';
const userName = 'Eric';
const latestMessage = 'last seen recently';

const ChatInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 shadow-sm w-full flex justify-between items-center">
    <div className="flex items-center">
      <div className="mr-4 cursor-pointer" onClick={() => navigate(-1)}>
        Back
      </div>
      <div className="mr-4">
        <img className="rounded-full w-12 h-12" src={profileImage} alt={userName} />
      </div>
      <div>
        <div className="mb-1 text-black font-bold text-sm">
          {userName}
        </div>
        <div className="text-slate-400 text-xs">
          {latestMessage}
        </div>
      </div>
    </div>
    <div className="items-center cursor-pointer">
      ℹ️
    </div>
  </div>
  )
}

export default ChatInfo;
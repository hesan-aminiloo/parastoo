
const profileImage = 'http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg';
const userName = 'Eric';
const latestMessage = 'Hey what\'s up?';

const ChatItem = ({ onClick }) => {
  return (
    <div className="flex rounded items-center bg-white p-4 mb-4 border-b cursor-pointer" onClick={onClick}>
      <div className="mr-4">
        <img className="rounded-full w-16 h-16" src={profileImage} alt={userName} />
      </div>
      <div>
        <div className="mb-2 text-black font-bold text-lg">
          {userName}
        </div>
        <div className="text-xs text-slate-400 text-base">
          {latestMessage}
        </div>
      </div>
    </div>
  )
}

export default ChatItem;
import clsx from 'clsx';

const ChatInput = ({ text, status }) => {
  return (
    <div className="w-full flex p-4 bg-slate-800">
      <input type="text" className="bg-white px-2 py-2 rounded w-full" placeholder='Type your message' />
    </div>
  )
}

export default ChatInput;
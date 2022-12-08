import clsx from 'clsx';

const ChatBubble = ({ text, status }) => {
  return (
    <div className={clsx('bg-white max-w-xs shadow-lg mb-4 rounded-xl p-4', {
      'bg-neutral-100': status === 'sender',
      'bg-white ml-auto': status === 'receiver',
    })}>
      <div className="mb-2">{text}</div>
      <div className="text-gray-400 text-xs">
        11:40
      </div>
    </div>
  )
}

export default ChatBubble;
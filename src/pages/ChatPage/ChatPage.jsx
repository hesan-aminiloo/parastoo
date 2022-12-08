import ChatInfo from './components/ChatInfo';
import ChatBox from './components/ChatBox';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';

const ChatPage = () => {
  return (
    <div className="flex flex-col">
      <ChatInfo />
      <ChatBox>
        <ChatBubble status="sender" text="Hey!" />
        <ChatBubble status="receiver" text="What'up?" />
        <ChatBubble status="sender" text="I wanted to ask a question" />
      </ChatBox>
      <ChatInput />
    </div>
  )
};

export default ChatPage;
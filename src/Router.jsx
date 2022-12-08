import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home, Chats, ChatPage, Profile } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chats/:id" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

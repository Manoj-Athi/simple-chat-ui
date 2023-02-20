import React from "react";
import TopNav from "../Components/TopNav";
import ChatContainer from "../Components/ChatContainer/ChatContainer";
import SideNavbar from "../Components/SideNavbar";

import { Container } from "react-bootstrap";

const Chat = () => {
  return (
    <div className="min-vw-100 min-vh-100 d-flex">
      <SideNavbar />
      <Container fluid className="flex-column p-0 vh-100">
        <TopNav />
        <div className="p-3 h-auto">
          <ChatContainer />
        </div>
      </Container>
    </div>
  );
};

export default Chat;

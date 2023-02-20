import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";

import NeuralMind from "../../assets/neuralMind.svg";
import SendMessages from "./SendMessages";
import { defaultValue } from "./defaultMessages";
import MessagesContainer from "./MessagesContainer";
import RecommendQuestion from "./RecommendQuestion";

const ChatContainer = () => {
  const [messages, setMessages] = useState(defaultValue);
  const [message, setMessage] = useState("");
  const recommendQues = [
    "I want to use Bing anymore.",
    "I'm scared of you.",
    "I'll use Google instead.",
  ];

  const handleMessage = (e) => setMessage(e.target.value);

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && !e.shiftKey && message) {
      e.preventDefault();
      setMessages((state) => [...state, { sender: "user", message }]);
      setMessage("");
    }
  };

  const handleAddQues = (index) =>
    setMessage((state) => state + recommendQues[index]);

  return (
    <Container className="bg-light" style={{ height: "85vh" }}>
      <Container className="d-flex pt-3 align-items-center">
        <img src={NeuralMind} alt="Neuralmind" />
        <h4 className="px-2">Neuralmind.io</h4>
      </Container>
      <Container className="ps-5 py-2">
        <MessagesContainer messages={messages} />
        <RecommendQuestion
          recommendQues={recommendQues}
          handleAddQues={handleAddQues}
        />
        <SendMessages
          message={message}
          handleMessage={handleMessage}
          handleSendMessage={handleSendMessage}
        />
      </Container>
    </Container>
  );
};

export default ChatContainer;

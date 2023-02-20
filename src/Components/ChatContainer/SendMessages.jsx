import React from "react";
import { Container, Button, InputGroup, Form } from "react-bootstrap";

import { GiMagicBroom } from "react-icons/gi";
import { BiMessageRoundedDetail } from "react-icons/bi";

const SendMessages = ({ handleMessage, message, handleSendMessage }) => {
  return (
    <Container className="my-3 d-flex p-0">
      <Button className="rounded-circle py-2 px-2">
        <GiMagicBroom size={25} />
      </Button>
      <InputGroup className="ms-2 border border-1 shadow-sm rounded-pill bg-white">
        <InputGroup.Text className="bg-transparent border-0">
          <BiMessageRoundedDetail size={25} className="text-secondary" />
        </InputGroup.Text>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => handleMessage(e)}
          onKeyDown={handleSendMessage}
          rows="1"
          className="bg-transparent pt-2 border-0 flex-grow-1 overflow-hidden bg-outline-none shadow-none"
          style={{ resize: "none" }}
        />
      </InputGroup>
    </Container>
  );
};

export default SendMessages;

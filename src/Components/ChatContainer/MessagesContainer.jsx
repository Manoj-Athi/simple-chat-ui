import { useRef, useEffect } from 'react'
import { Container, Row, Col }from 'react-bootstrap'

const MessagesContainer = ({ messages }) => {

  const isUser = (index) => messages[index].sender === "user";
  const lastMessageRef = useRef(null)

  useEffect(()=>{
    lastMessageRef.current?.scrollIntoView()
  }, [messages])

  return (
    <Container className="overflow-auto p-0 w-100" style={{height: "55vh", scrollBehavior: "smooth", whiteSpace: "pre-line"}}>
        {
            messages.map((m, index) => (
              isUser(index) ? (
                <Container key={index} className='py-2'>
                  <Row>
                    <Col ></Col>
                    <Col sm="auto" className="py-2 px-3 border border-top-0 rounded-3 shadow-sm bg-primary text-white" style={{maxWidth: "75%"}}>{m.message}</Col>
                  </Row>
                </Container>
              ) : (
                <Container key={index} className='py-2'>
                  <Row>
                    <Col sm="auto" className="py-2 px-3 border border-top-0 rounded-3 shadow-sm bg-white" style={{maxWidth: "75%"}}>{m.message}</Col>
                    <Col ></Col>
                  </Row>
                </Container>
              )
            ))
        }
        <div ref={lastMessageRef}></div>
    </Container>
  )
}

export default MessagesContainer
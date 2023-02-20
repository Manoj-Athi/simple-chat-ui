import React from 'react'
import { Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

import { AiOutlineQuestionCircle } from 'react-icons/ai'

const RecommendQuestion = ({ recommendQues, handleAddQues }) => {
  return (
    <Container className="d-flex justify-content-end align-items-center p-0 pt-2 ">
        <OverlayTrigger
        key="top"
        placement="top"
        overlay={
            <Tooltip id="tooltip-top">
                Ask Something
            </Tooltip>
        }
        >
            <Button variant="white" className="p-0">
                <AiOutlineQuestionCircle size={30} className="text-primary"/>
            </Button>
        </OverlayTrigger>
        {
            recommendQues.map((r, index) => (
                <Button key={index} onClick={() => handleAddQues(index)} className="ms-2 bg-white border border-primary text-primary">
                    {r}
                </Button>
            ))
        }
    </Container>
  )
}

export default RecommendQuestion
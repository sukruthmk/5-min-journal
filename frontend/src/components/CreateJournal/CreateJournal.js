// @flow

import * as React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Styled from "styled-components";

import DisplayDate from "./DisplayDate";
import SwitchLogEntry from "./SwitchLogEntry";

const MainContainer = Styled.div`
  margin-bottom: 30px;
`;

const JournalContainer = Styled(Container)`
  background: #FFFFF6;
  border-radius: 8px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  padding: 30px;
`;

const SubHeading = Styled.h5`
  text-align: center;
`;

const InputContainer = Styled(Row)`
  margin-top: 5px;
`;

const Label = Styled.div`
  text-align: center;
  line-height: calc(1.5em + 0.75rem + 2px);
`;

const Input = Styled(Form.Control)`
  background: transparent;
  border: none;
  border-bottom: 1px solid #D4D3CA;
  border-radius: 0;
  font-size: 12pt;
  &:focus {
    background: transparent;
    border-color: inherit;
    border-radius: 0;
    box-shadow: none;
    color: inherit;
    outline: none;
  }
`;

const CreateJournal = (): React.Node => {
  const [logEntryType, setLogEntryType] = React.useState<string>("day");
  return (
    <MainContainer>
      <DisplayDate />
      <br />
      <SwitchLogEntry
        logEntryType={logEntryType}
        setLogEntryType={setLogEntryType}
      />
      <br />
      <Form>
        <JournalContainer>
          {/* 3 things you are grateful for */}
          <div>
            <SubHeading>
              <i> I am grateful for... </i>
            </SubHeading>
            <InputContainer>
              <Col sm="1">
                <Label>1.</Label>
              </Col>
              <Col sm="11">
                <Input type="text-area" />
              </Col>
            </InputContainer>
            <InputContainer>
              <Col sm="1">
                <Label>2.</Label>
              </Col>
              <Col sm="11">
                <Input type="text" />
              </Col>
            </InputContainer>
            <InputContainer>
              <Col sm="1">
                <Label>3.</Label>
              </Col>
              <Col sm="11">
                <Input type="text" />
              </Col>
            </InputContainer>
          </div>
          {/* 3 things you would improve today */}
          <br />
          <div>
            <SubHeading>
              <i> What would make today great? </i>
            </SubHeading>
            <InputContainer>
              <Col sm="1">
                <Label>1.</Label>
              </Col>
              <Col sm="11">
                <Input type="text" />
              </Col>
            </InputContainer>
            <InputContainer>
              <Col sm="1">
                <Label>2.</Label>
              </Col>
              <Col sm="11">
                <Input type="text" />
              </Col>
            </InputContainer>
            <InputContainer>
              <Col sm="1">
                <Label>3.</Label>
              </Col>
              <Col sm="11">
                <Input type="text" />
              </Col>
            </InputContainer>
          </div>
          {/* daily affirmations */}
          <br />
          <div>
            <SubHeading>
              <i> Daily affirmations, I am... </i>
            </SubHeading>
            <InputContainer>
              <Col sm="12">
                <Input type="text" />
              </Col>
            </InputContainer>
          </div>
        </JournalContainer>
      </Form>
    </MainContainer>
  );
};

export default CreateJournal;

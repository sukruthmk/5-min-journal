// @flow

import * as React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Styled from "styled-components";

import DisplayDate from "./DisplayDate";

const JournalContainer = Styled(Container)`
  background: #FFFFF6;
  border-radius: 8px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;

const SubHeading = Styled.h5`
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const InputContainer = Styled.div`
  margin-top: 15px;
`;

const Input = Styled(Form.Control)`
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  font-size: 12px;
  margin-left: 15px;
  &:focus {
    background: transparent;
    border-color: inherit;
    box-shadow: none;
    color: inherit;
    outline: none;
  }
`;

const CreateJournal = (): React.Node => {
  return (
    <div>
      <DisplayDate />
      <br />
      <br />
      <JournalContainer>
        <SubHeading>
          <i> I am grateful for </i>
        </SubHeading>
        <Form>
          <InputContainer>
            <span>1.</span>
            <Input type="text" placeholder="" />
          </InputContainer>
        </Form>
      </JournalContainer>
    </div>
  );
};

export default CreateJournal;

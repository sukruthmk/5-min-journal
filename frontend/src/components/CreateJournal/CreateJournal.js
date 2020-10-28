// @flow

import * as React from "react";
import { Form } from "react-bootstrap";
import Styled from "styled-components";

import DayJournalForm from "./DayJournalForm";
import DisplayDate from "./DisplayDate";
import NightJournalForm from "./NightJournalForm";
import SwitchLogEntry from "./SwitchLogEntry";

const MainContainer = Styled.div`
  margin-bottom: 30px;
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
        {logEntryType === "day" ? <DayJournalForm /> : <NightJournalForm />}
      </Form>
    </MainContainer>
  );
};

export default CreateJournal;

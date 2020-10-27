// @flow
import * as React from "react";
import { Container, Nav, Row } from "react-bootstrap";

type Props = {
  logEntryType: string,
  setLogEntryType: (string) => void,
};

const SwitchLogEntry = ({
  logEntryType,
  setLogEntryType,
}: Props): React.Node => {
  return (
    <Container>
      <Row>
        <Nav variant="pills" defaultActiveKey={logEntryType}>
          <Nav.Item>
            <Nav.Link eventKey="day" onClick={() => setLogEntryType("day")}>
              Day
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="night" onClick={() => setLogEntryType("night")}>
              Night
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
  );
};

export default SwitchLogEntry;

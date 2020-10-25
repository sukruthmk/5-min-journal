import * as React from "react";
import Styled from "styled-components";

const Heading = Styled.h5`
  text-align: center;
`;

const DisplayDate = () => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const date = today.getDate();
  const year = today.getFullYear();
  return (
    <Heading>
      {month} {date}, {year}
    </Heading>
  );
};

export default DisplayDate;

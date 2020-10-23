import * as React from "react";

const DisplayDate = () => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const date = today.getDate();
  const year = today.getFullYear();
  return (
    <h4 align="center">
      {month} {date}, {year}
    </h4>
  );
};

export default DisplayDate;

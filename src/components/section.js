import React from "react";
import { Box, Heading, Text } from "grommet";

export default function Section({ children, width, border }) {
  return (
    <Box
      round={"small"}
      margin={{ top: "medium" }}
      width={width ? width : "100%"}
      pad={"small"}
    >
      {children}
    </Box>
  );
}

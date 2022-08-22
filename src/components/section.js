import React from "react";
import { Box, Heading, Text } from "grommet";

export default function Section({ children, width }) {
  return (
    <Box round={"small"} gap={"small"} width={width ? width : "100%"}>
      {children}
    </Box>
  );
}

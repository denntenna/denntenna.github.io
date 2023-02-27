import React from "react";
import { Box, Heading, Text } from "grommet";

export default function Section({ children, width, border }) {
  return (
    <Box round={"small"} margin={{ top: "medium" }}>
      {children}
    </Box>
  );
}

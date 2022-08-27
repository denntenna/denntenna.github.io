import React from "react";
import { Box, Heading, Text } from "grommet";

export default function Section({ children, width, border }) {
  return (
    <Box
      pad={"small"}
      round={"small"}
      width={"medium"}
      height={"fit-content"}
      margin={"small"}
    >
      {children}
    </Box>
  );
}
